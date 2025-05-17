import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AnimatedSunny,
  AnimatedCloudy,
  AnimatedRainy,
  AnimatedSnowy,
  AnimatedThunderstorm,
  AnimatedFoggy,
  AnimatedWindy,
  AnimatedMoonNight,
  AnimatedPartlyCloudy,
} from './AnimatedWeatherIcons';
import { fetchCurrentWeather, fetchForecastWeather } from './weatherApi';
import { fetchCitySuggestions } from './cityAutocompleteApi';

const iconMap = [
  { id: 'sunny', match: (w: any) => w.main === 'Clear', label: 'Sunny', Component: AnimatedSunny },
  { id: 'cloudy', match: (w: any) => w.main === 'Clouds', label: 'Cloudy', Component: AnimatedCloudy },
  { id: 'rainy', match: (w: any) => w.main === 'Rain' || w.main === 'Drizzle', label: 'Rainy', Component: AnimatedRainy },
  { id: 'thunderstorm', match: (w: any) => w.main === 'Thunderstorm', label: 'Thunderstorm', Component: AnimatedThunderstorm },
  { id: 'snow', match: (w: any) => w.main === 'Snow', label: 'Snowy', Component: AnimatedSnowy },
  { id: 'fog', match: (w: any) => ['Fog','Mist','Smoke','Haze','Dust','Sand'].includes(w.main), label: 'Foggy', Component: AnimatedFoggy },
  { id: 'windy', match: (w: any) => w.main === 'Wind', label: 'Windy', Component: AnimatedWindy },
  { id: 'night', match: (w: any) => (w.icon && w.icon.endsWith('n')), label: 'Night', Component: AnimatedMoonNight },
  { id: 'partly-cloudy', match: (w: any) => (w.icon && w.icon.startsWith('02')), label: 'Partly Cloudy', Component: AnimatedPartlyCloudy },
];

const placeholders = {
  weather: {
    temp: '23',
    status: 'Sunny',
    location: 'San Francisco',
    details: 'Clear sky',
  },
  forecast: [
    { day: 'Mon', icon: '☀️', temp: '24' },
    { day: 'Tue', icon: '⛅', temp: '22' },
    { day: 'Wed', icon: '🌧️', temp: '18' },
    { day: 'Thu', icon: '⛄', temp: '14' },
    { day: 'Fri', icon: '☀️', temp: '25' }
  ],
};

function getIconComponent(weather: any): { label: string; Component: any } {
  if (!weather) return { label: 'Sunny', Component: AnimatedSunny };
  const entry = iconMap.find(entry => entry.match(weather));
  return entry || { label: weather.main || 'Sunny', Component: AnimatedSunny };
}

function getForecastIcon(props: { main: string; icon?: string }) {
  const { main, icon } = props;
  if (main === 'Clear' && icon && icon.endsWith('n')) return <AnimatedMoonNight />;
  if (main === 'Clear') return <AnimatedSunny />;
  if (main === 'Clouds' && icon && icon.startsWith('02')) return <AnimatedPartlyCloudy />;
  if (main === 'Clouds') return <AnimatedCloudy />;
  if (main === 'Rain' || main === 'Drizzle') return <AnimatedRainy />;
  if (main === 'Thunderstorm') return <AnimatedThunderstorm />;
  if (main === 'Snow') return <AnimatedSnowy />;
  if (['Fog','Mist','Smoke','Haze','Dust','Sand'].includes(main)) return <AnimatedFoggy />;
  return <AnimatedSunny />;
}

// Animated weather background
function AnimatedBackground({ weatherMain, icon }: { weatherMain: string, icon: string }) {
  let variant: string = 'default';
  if (icon && icon.endsWith('n')) variant = 'night';
  else if (weatherMain === 'Snow') variant = 'snow';
  else if (weatherMain === 'Thunderstorm') variant = 'storm';
  else if (weatherMain === 'Rain' || weatherMain === 'Drizzle') variant = 'rain';

  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full z-0">
      {variant === 'default' && <>
        <motion.div animate={{ opacity: [0.45,0.8,0.45] }} transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }} className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-200 to-rose-100" />
        <motion.div className="absolute left-0 top-10 w-32 h-14 bg-white bg-opacity-50 rounded-full shadow-lg" animate={{ x: [0, 220, 0] }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} style={{ filter: 'blur(4px)' }} />
        <motion.div className="absolute right-0 top-40 w-56 h-20 bg-white bg-opacity-60 rounded-full shadow-lg" animate={{ x: [0, -300, 0] }} transition={{ duration: 42, repeat: Infinity, ease: 'linear' }} style={{ filter: 'blur(8px)' }} />
      </>}
      {variant === 'night' && <>
        <motion.div animate={{ background: [
            'linear-gradient(120deg,#1d283a,#202053 70%,#4b447e)',
            'linear-gradient(120deg,#0a1e35,#181e35 70%,#383063)',
            'linear-gradient(120deg,#1d283a,#202053 70%,#4b447e)' ] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-0" style={{ background: 'linear-gradient(120deg,#1d283a,#202053 70%,#4b447e)' }} />
        {[...Array(16)].map((_,i)=>(<motion.div key={i} style={{ left:`${4+i*6}%`, top:`${10+Math.sin(i)*35}%` }} className="absolute w-1.5 h-1.5 bg-white rounded-full"
            initial={{ opacity: 0 }} animate={{ opacity: [0,1,0] }} transition={{ repeat:Infinity, duration:2.3+0.13*i, delay:0.2*i }} />))}
      </>}
      {variant==='rain' && <>
        <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-300 to-sky-200" animate={{ opacity:[0.8,1,0.8] }} transition={{duration:7,repeat:Infinity}}/>
        {[...Array(40)].map((_,i)=>(<motion.div key={i} className="absolute w-0.5 h-7 bg-blue-500 bg-opacity-60 rounded-full" style={{ left:`${i*2.5}%`, top:`-${6*i%93}px` }}
          initial={{ y: -30 }} animate={{ y: [0,320,0] }} transition={{ repeat:Infinity, duration:2.9+0.07*i, delay:.04*i }} />))}
      </>}
      {variant==='snow' && <>
        <motion.div className="absolute inset-0 bg-gradient-to-br from-white via-blue-100 to-blue-200" animate={{ opacity:[0.92,1,0.92] }} transition={{duration:8,repeat:Infinity}}/>
        {[...Array(32)].map((_,i)=>(<motion.div key={i} className="absolute rounded-full" style={{ width:4+(i%3)*2, height:4+(i%3)*2, left:`${i*3.1}%`, top:`-${27*i%91}px`, background:'#ddf6ff', opacity:.75-.015*i }}
          initial={{ y: -60 }} animate={{ y: [0,400,0] }} transition={{ repeat:Infinity, duration:4.8+0.13*i, delay:.07*i }} />))}
      </>}
      {variant==='storm' && <>
        <motion.div animate={{ background: [
            'linear-gradient(130deg,#292b38,#414880 80%,#9eabc5)',
            'linear-gradient(130deg,#202031,#838bbf 70%,#2e3751)',
            'linear-gradient(130deg,#292b38,#414880 80%,#9eabc5)'] }} transition={{ duration: 12, repeat: Infinity }} className="absolute inset-0" style={{ background: 'linear-gradient(120deg,#292b38,#414880 80%,#9eabc5)' }} />
        {[...Array(3)].map((_,i)=>(<motion.div key={i} className="absolute left-1/2 top-1/2 w-14 h-1.5 rounded opacity-70" style={{ background:'#fffbe0', rotate:-35+27*i+'deg' }}
          initial={{ opacity: 0 }} animate={{ opacity: [0,1,0] }} transition={{ repeat:Infinity, duration:1.6, delay:1.1*i }} />))}
      </>}
    </div>
  );
}

function App() {
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [apiError, setApiError] = useState('');
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>(placeholders.forecast);
  const [citySuggestions, setCitySuggestions] = useState<{ city: string, country: string, region?: string }[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setCurrentWeather(null); }, []);

  const iconData = getIconComponent(currentWeather && currentWeather.weather ? currentWeather.weather[0] : null);
  const WeatherIcon = iconData.Component;
  const weatherInfo = currentWeather
    ? {
        temp: Math.round(currentWeather.main.temp).toString(),
        status: iconData.label,
        location: `${currentWeather.name || ''}${currentWeather.sys?.country ? ', ' + currentWeather.sys.country : ''}`,
        details: currentWeather.weather[0]?.description,
      }
    : placeholders.weather;

  useEffect(() => {
    let ignore = false;
    async function run() {
      if (query.length < 2) {
        setCitySuggestions([]); setShowSuggestions(false);
        return;
      }
      const suggestions = await fetchCitySuggestions(query);
      if (!ignore) {
        setCitySuggestions(suggestions);
        setShowSuggestions(true);
      }
    }
    run();
    return () => { ignore = true; };
  }, [query]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!inputRef.current || !(e.target instanceof Node)) return;
      if (!inputRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  async function handleSearch(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!query) return;
    setSearching(true);
    setApiError('');
    setShowSuggestions(false);
    try {
      const [current, forecastData] = await Promise.all([
        fetchCurrentWeather(query),
        fetchForecastWeather(query),
      ]);
      setCurrentWeather(current);
      setForecast(forecastData);
    } catch (err: any) {
      setApiError(err.message || 'Unable to fetch weather.');
      setCurrentWeather(null);
      setForecast(placeholders.forecast);
    } finally {
      setSearching(false);
    }
  }

  function handleSuggestionClick(city: string, country: string) {
    setQuery(`${city}, ${country}`);
    setShowSuggestions(false);
    setTimeout(() => handleSearch(), 0);
    if (inputRef.current) inputRef.current.blur();
  }

  const weatherMain = currentWeather?.weather?.[0]?.main || '';
  const weatherIcon = currentWeather?.weather?.[0]?.icon || '';

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-400 via-blue-200 to-rose-100 transition-all duration-1000">
      <AnimatedBackground weatherMain={weatherMain} icon={weatherIcon} />
      <main className="z-10 w-full max-w-lg px-4 pb-16 flex flex-col gap-8 relative">
        <div className="relative">
        <motion.form
          layout
          autoComplete="off"
          className="flex items-center mt-8 mb-2 w-full bg-white bg-opacity-50 rounded-xl shadow-md overflow-hidden"
          onSubmit={handleSearch}
        >
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 px-4 py-3 text-lg bg-transparent outline-none"
            placeholder="Search for a city..." />
          <button type="submit" className="px-5 py-3 bg-blue-300 hover:bg-blue-400 font-bold text-blue-900 transition-all" disabled={searching}>
            {searching ? '...' : 'Go'}
          </button>
        </motion.form>
        <AnimatePresence>
        {showSuggestions && citySuggestions.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute left-0 right-0 bg-white shadow-lg ring-1 ring-black ring-opacity-10 rounded-b-xl z-20 mt-[-4px] overflow-hidden"
          >
            {citySuggestions.map((suggestion, i) => (
              <li
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-base transition-colors flex items-center"
                key={suggestion.city + suggestion.country + i}
                onClick={() => handleSuggestionClick(suggestion.city, suggestion.country)}
              >
                <span className="font-semibold text-blue-800">{suggestion.city}</span>
                <span className="ml-2 text-blue-500 text-sm">{suggestion.country}{suggestion.region?` · ${suggestion.region}`:''}</span>
              </li>
            ))}
          </motion.ul>
        )}
        </AnimatePresence>
        </div>
        {apiError && <div className="my-2 text-red-600 text-center text-sm font-semibold">{apiError}</div>}
        <AnimatePresence mode="wait">
          <motion.div
            key={weatherInfo.status + weatherInfo.temp}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
            className="flex flex-col items-center gap-2 bg-white bg-opacity-60 rounded-2xl shadow-lg py-10 px-4"
          >
            <motion.div className="mb-2">
              <WeatherIcon />
            </motion.div>
            <div className="text-5xl font-extrabold text-blue-700">{weatherInfo.temp}°C</div>
            <div className="text-xl font-semibold text-blue-900 capitalize">{weatherInfo.status}</div>
            <div className="text-sm text-blue-500 italic capitalize">{weatherInfo.details}</div>
            <div className="text-md mt-4 font-semibold text-blue-800">{weatherInfo.location}</div>
          </motion.div>
        </AnimatePresence>
        {/* Real animated forecast row with SVGs & real data*/}
        <motion.div layout className="flex gap-3 py-4 overflow-x-auto">
          {forecast.map((f, idx) => (
            <motion.div
              key={f.day + (f.icon||'')}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx, type: 'spring', stiffness: 80 }}
              className="flex flex-col items-center shadow-md rounded-xl px-3 py-2 min-w-[74px] bg-white bg-opacity-50"
            >
              <span className="text-2xl mb-1">
                {getForecastIcon(f)}
              </span>
              <span className="font-bold">{f.temp}&deg;</span>
              <span className="text-xs text-gray-700">{f.day}</span>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

export default App;
