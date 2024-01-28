import { MONGODB_URI, clientOptions } from "@/data/db";
const mongoose = require('mongoose');
export const dynamic = 'auto' // defaults to auto
export async function GET(request: Request) {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(MONGODB_URI, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
      }
    const data = [1, 1027]
    return Response.json({ data })
}

export async function POST(request: Request) {
  const res = await request.json();
  console.log("I am posting");
  console.log(`Received: ${res}`)
 
  return Response.json(res);
}

export async function DELETE(request: Request) {
  const res = await request.json();
  console.log("I am deleting");
  console.log(`Received: ${res}`)
 
  return Response.json(res);
}