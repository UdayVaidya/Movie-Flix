import SideBar from "./components/SideBar/SideBar";
import HeroBanner from "./components/Herobanner/HeroBanner";
import Section from "./components/Section/Section";
import SearchBar from "./components/SearchBar/SearchBar";
import './App.css'
import { useState, useMemo } from "react";
import moviesData from './Data/movieData'

// Shuffle function to randomize array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Create shuffled versions of the data (only once on mount)
  const continueWatchingData = useMemo(() => shuffleArray(moviesData), []);
  const youMightLikeData = useMemo(() => shuffleArray(moviesData), []);
  const trendingNowData = useMemo(() => shuffleArray(moviesData), []);

  return (
    <div className="app">
      <SideBar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="main-content">
        <SearchBar onMenuClick={() => setSidebarOpen(true)} />
        <HeroBanner />
        <Section title="Continue Watching" data={continueWatchingData} />
        <Section title="You Might Like" data={youMightLikeData} />
        <Section title="Trending Now" data={trendingNowData} />
      </main>
    </div>
  );
}
export default App;
