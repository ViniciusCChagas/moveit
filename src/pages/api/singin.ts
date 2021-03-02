import { NowRequest, NowResponse } from '@vercel/node';
import axios from 'axios';
import { MongoClient, Db } from 'mongodb';

import url from 'url';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
	if (cachedDb) {
		return cachedDb;
	}
	const client = await MongoClient.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	const dbName = url.parse(uri).pathname.substr(1);
	const db = client.db(dbName);

	cachedDb = db;

	return db;
}

export default async (request: NowRequest, response: NowResponse) => {
	const { oAuthCode } = request.body;
	try {
		const authorization = await axios.post(
			'https://github.com/login/oauth/access_token',
			{
				client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
				client_secret: process.env.GITHUB_OAUTH_SECRET,
				code: oAuthCode,
			},
			{
				headers: {
					Accept: 'application/json',
				},
			}
		);

		const accessToken = authorization.data.access_token;

		const resGithubUserData = await axios.get('https://api.github.com/user', {
			headers: {
				Authorization: 'token ' + accessToken,
			},
		});
		const GithubUserData = resGithubUserData.data;
		const userData = {
			githubId: GithubUserData.id,
			login: GithubUserData.login,
			name: GithubUserData.name,
			email: GithubUserData.email,
			level: 0,
			currentExperience: 0,
			challengesCompleted: 0,
			createdAt: new Date(),
		};

		const db = await connectToDatabase(process.env.MONGODB_URI);

		const collection = db.collection('users');

		let user = await collection.findOne({ githubId: GithubUserData.id });
		if (!user) {
			await collection.insertOne(userData);
			user = await collection.findOne({ githubId: GithubUserData.id });
		}

		return response.json({ userId: user._id });
	} catch (error) {
		return response.status(401).json({ message: 'Bad request' });
	}
};
