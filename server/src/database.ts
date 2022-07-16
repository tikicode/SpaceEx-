import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({
  path: '.env'
});

const connectionString = process.env.MONGO_DB_LINK || '';
console.log(connectionString);
const client = new MongoClient(connectionString);

export async function connectToDB() {
  try {
    await client.connect();
    // Connect to our database for Payload
  } catch (err) {
    throw new Error("Uh oh! Got this from MongoDB: " + err);
  }

  console.log(process.env.MONGO_DB_NAME);
  const dbConnection = client.db(process.env.MONGO_DB_NAME);
  console.log("Successfully connected to MongoDB.");

  return dbConnection;
}
