export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
  const url = new URL(request.url);
  const limit = url.searchParams.get("limit");
  const res = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?sort=market_cap&limit=${limit}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY!,
    },
  })
  const data = await res.json()
  return Response.json({ data })
}