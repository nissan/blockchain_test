import { addFavToken, getFavTokens, removeFavToken } from "@/data/db";

export const dynamic = 'auto' // defaults to auto
export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");
  const data = await getFavTokens(userId!);
  return Response.json({ data })
}

export async function POST(request: Request) {
  const req = await request.json();
  addFavToken(req.userId, req.id);
  return Response.json(req);
}

export async function DELETE(request: Request) {
  const req = await request.json();
  removeFavToken(req.userId, req.id);
  return Response.json(req);
}