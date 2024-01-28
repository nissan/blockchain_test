export const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/?retryWrites=true&w=majority`;
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
export async function getFavTokens(userId: string) {
  try {
    await client.connect();
    const database = client.db("techtest");
    const collection = database.collection("userFavTokens");

    // Find the document for the given userId
    const userDocument = await collection.findOne({ userId: userId });

    if (userDocument) {
      console.log(`FavTokenIds for userId ${userId}:`, userDocument.favTokenIds);
      return userDocument.favTokenIds; // Return the array of favorite token IDs
    } else {
      console.log(`No document found for userId ${userId}.`);
      return []; // Return an empty array if no document is found
    }
  } catch (error) {
    console.error("Failed to fetch favorite tokens:", error);
    return []; // Return an empty array in case of an error
  } finally {
    await client.close();
    console.log("MongoDB connection closed.");
  }
}
export async function addFavToken(userId: string, tokenId: number) {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    const database = client.db("techtest");
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

export async function removeFavToken(userId: string, tokenId: number) {
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