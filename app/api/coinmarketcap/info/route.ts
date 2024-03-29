export const dynamic = 'auto' // defaults to auto
export async function GET(request: Request) {
    const url = new URL(request.url);
    const symbol = url.searchParams.get("symbol");
    
    const res = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${symbol}`, {
    next: { revalidate: 3600 },
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY!,
    },
  })
  const data = await res.json()
  return Response.json({ data })
}