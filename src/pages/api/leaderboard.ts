import { NowRequest, NowResponse } from '@vercel/node';
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
	try {
		const db = await connectToDatabase(process.env.MONGODB_URI);
		const collection = db.collection('users');

		const leaderboard = await collection
			.aggregate([
				{ $sort: { level: -1, challengesCompleted: -1 } },
				{ $limit: 10 },
				{ $project: { email: 0, githubId: 0, createdAt: 0 } },
			])
			.toArray();

		return response.json(leaderboard);
	} catch (error) {
		return response.status(401).json({ message: 'Bad request' });
	}
};
