import { MONGODB_URI } from "@/data/db";
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function addFavToken(userId: string, tokenId: number) {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    const database = client.db("techtest"); // Replace "YourDatabaseName" with your actual database name.
    const collection = database.collection("userFavTokens");

    // Update the user's document by adding the new token ID to the favTokenIds array without creating duplicates.
    const updateResult = await collection.updateOne(
      { userId: userId }, // Filter document by userId
      { $addToSet: { favTokenIds: tokenId } }, // Use $addToSet to prevent duplicates
      { upsert: true } // Create a new document if it doesn't exist
    );

    if (updateResult.matchedCount === 0) {
      console.log(`No document found for userId ${userId}. A new document was created.`);
    } else {
      console.log(`Updated document for userId ${userId}.`);
    }
  } catch (error) {
    console.error("Failed to add favorite token:", error);
  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

async function removeFavToken(userId: string, tokenId: number) {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    const database = client.db("techtest"); // Replace "YourDatabaseName" with your actual database name.
    const collection = database.collection("userFavTokens");

    // Update the user's document by adding the new token ID to the favTokenIds array without creating duplicates.
    const updateResult = await collection.updateOne(
      { userId: userId }, // Filter document by userId
      { $pull: { favTokenIds: tokenId } }, // Use $pull to remove token from the array
    );

    if (updateResult.matchedCount === 0) {
      console.log(`No document found for userId ${userId}.`);
    } else if (updateResult.modifiedCount === 0) {
      console.log(`Token ID ${tokenId} not found in the user's favorites.`);
    } else {
      console.log(`Removed token ID ${tokenId} from userId ${userId}'s favorites.`);
    }
  } catch (error) {
    console.error("Failed to remove favorite token:", error);
  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

export const dynamic = 'auto' // defaults to auto
export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");
  console.log("I am getting the favTokens");
  console.log(`I was called as ${url.toString()}`)
  console.log(`Received: ${userId}`)
  const data = [1, 1027]
  return Response.json({ data })
}

export async function POST(request: Request) {
  const req = await request.json();
  console.log("I am posting");
  console.log(`Received: ${JSON.stringify(req)}`)
  addFavToken(req.userId, req.id);

  return Response.json(req);
}

export async function DELETE(request: Request) {
  const req = await request.json();
  console.log("I am deleting");
  console.log(`Received: ${req}`)
  removeFavToken(req.userId, req.id);

  return Response.json(req);
}