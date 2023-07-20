import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_DB_URI || "", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("ani-me");

async function connectToDB() {
  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}

const pushDataToDB = async (collection: string, data: any) => {
  try {
    await client.connect();
    const dbCollection = db.collection(collection);

    const result = await dbCollection.insertOne(data);
    console.log("Document inserted:", result.insertedId);

    await client.close();
  } catch (error) {
    console.error("Failed to push data:", error);
  }
};

async function readDataFromDB(collection: string) {
  try {
    await client.connect();
    const dbCollection = db.collection(collection);

    const documents = await dbCollection.find().toArray();

    await client.close();

    return documents;
  } catch (error) {
    console.error("Failed to read data:", error);
  }
}

module.exports = { connectToDB, pushDataToDB, readDataFromDB };
