export async function GET() {
  try {
    const response = await fetch("https://www.tiktok.com/@beastmode3501", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return Response.json({ followers: 0 }, { status: 200 });
    }

    const html = await response.text();
    const patterns = [
      /"followerCount":"?(\d+)"?/,
      /"statsV2":\{[^]*?"followerCount":"?(\d+)"?/,
      /"stats":\{[^]*?"followerCount":(\d+)/,
      /"shareMeta":\{[^]*?\b(\d+(?:\.\d+)?)\s+Followers\b/,
    ];

    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match?.[1]) {
        const followers = Number.parseInt(match[1], 10);
        return Response.json({ followers: Number.isFinite(followers) ? followers : 0 });
      }
    }

    return Response.json({ followers: 0 });
  } catch {
    return Response.json({ followers: 0 });
  }
}
