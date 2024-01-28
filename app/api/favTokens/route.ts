export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");

    const data = [1, 1027]
    return Response.json({ data })
}