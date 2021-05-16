import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainComponent from "./components/MainComponent";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());
    setTopAnime(temp.top.slice(0, 5));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());
    setAnimeList(temp.results);
  };

  useEffect(() => {
    getTopAnime();
  }, []);
  return (
    <div>
      <Navbar />
      <Sidebar topAnime={topAnime} />
      <MainComponent
        setSearch={setSearch}
        animeList={animeList}
        search={search}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default App;
