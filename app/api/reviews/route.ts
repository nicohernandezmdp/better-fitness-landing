import { NextResponse } from 'next/server';

const FALLBACK = { rating: 4.8, totalReviews: 113 };

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey  = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return NextResponse.json(FALLBACK);
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`;
    const res  = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== 'OK') {
      return NextResponse.json(FALLBACK);
    }

    return NextResponse.json({
      rating:       data.result?.rating              ?? FALLBACK.rating,
      totalReviews: data.result?.user_ratings_total  ?? FALLBACK.totalReviews,
    });
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
