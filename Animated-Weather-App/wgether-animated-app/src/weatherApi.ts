const API_KEY = "312a36fb260382d34fc8e4e957f3d1c4";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchCurrentWeather(city: string) {
  const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
  if (!response.ok) {
    const errMsg = await response.text();
    throw new Error(`API error: ${response.status} ${errMsg}`);
  }
  return await response.json();
}

export async function fetchForecastWeather(city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    const errMsg = await response.text();
    throw new Error(`Forecast API error: ${response.status} ${errMsg}`);
  }
  const data = await response.json();
  // Group into 5 days (always returns at least 5)
  // - Use time around 12:00 for each day when possible (typical for 'today', 'tomorrow', etc)
  const result: Array<{
    day: string; // e.g. 'Mon'
    temp: number;
    icon: string;
    main: string;
  }> = [];
  const seenDays = new Set();
  for (let entry of data.list) {
    const date = new Date(entry.dt * 1000);
    const dayCode = date.toLocaleDateString('en-US', { weekday: 'short' });
    const hr = date.getHours();
    if (!seenDays.has(dayCode) && (hr === 12 || result.length === 0 /* fallback for today if 12 not present */)) {
      result.push({
        day: dayCode,
        temp: Math.round(entry.main.temp),
        icon: entry.weather[0].icon,
        main: entry.weather[0].main,
      });
      seenDays.add(dayCode);
    }
    if (result.length >= 5) break;
  }
  return result;
}
