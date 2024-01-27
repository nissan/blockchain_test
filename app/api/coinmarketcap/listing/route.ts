export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY!,
    },
  })
  const data = await res.json()
  return Response.json({ data })
}