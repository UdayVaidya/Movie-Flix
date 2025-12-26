import SideBar from "./components/SideBar/SideBar";
import HeroBanner from "./components/Herobanner/HeroBanner";
import Section from "./components/Section/Section";
import SearchBar from "./components/SearchBar/SearchBar";
import './App.css'
import { useState } from "react";
import moviesData from './Data/movieData'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="app">
      <SideBar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="main-content">
        <SearchBar onMenuClick={() => setSidebarOpen(true)} />
        <HeroBanner />
        <Section title="Continue Watching" data={moviesData}/>
        <Section title="Trending" data={moviesData}/>
        <Section title="You Might Like" data={moviesData}/>
      </main>
    </div>
  );
}
export default App;
