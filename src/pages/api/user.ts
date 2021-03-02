import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db, ObjectId } from 'mongodb';

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
	const db = await connectToDatabase(process.env.MONGODB_URI);

	const collection = db.collection('users');

	if (request.method === 'PUT') {
		const { id, level, experience, currentExperience, challengesCompleted } = request.body;
		const mongoId = new ObjectId(id);

		const { result } = await collection.updateOne(
			{ _id: mongoId },
			{
				$set: {
					level: level,
					experience: experience,
					currentExperience: currentExperience,
					challengesCompleted: challengesCompleted,
				},
			}
		);
		if (result.ok) {
			return response.json({ message: 'Update succefuly' });
		} else {
			return response.status(401).json({ message: 'Failed on update' });
		}
	} else if (request.method === 'GET') {
		const { userId } = request.query;
		try {
			const id = new ObjectId(userId.toString());
			let user = await collection.findOne({ _id: id });

			if (user) {
				return response.json(user);
			} else {
				return response.status(404).json({ message: 'User not Found' });
			}
		} catch (error) {
			return response.status(401).json({ message: 'Bad request' });
		}
	}
};
