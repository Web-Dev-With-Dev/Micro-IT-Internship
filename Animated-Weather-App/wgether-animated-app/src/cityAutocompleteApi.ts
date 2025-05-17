const API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const API_KEY = ""; // Will fetch without API key; for production, a RapidAPI key may be needed.

// Fetch city autocomplete suggestions
export async function fetchCitySuggestions(query: string): Promise<{ city: string, country: string, region?: string }[]> {
  if (!query || query.length < 2) return [];
  const url = `${API_URL}?namePrefix=${encodeURIComponent(query)}&limit=6&sort=-population`;
  const headers: Record<string, string> = {};
  if (API_KEY) headers['X-RapidAPI-Key'] = API_KEY;
  const res = await fetch(url, { headers });
  if (!res.ok) return [];
  const json = await res.json();
  return (json.data || []).map((item: any) => ({ city: item.city, country: item.country, region: item.region }));
}
