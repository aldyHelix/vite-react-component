import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { Box, AnimeList, AnimeDetail } from './components/Main';
import './App.css';
import animesData from './data/animesData';
import Search from './components/Search';
import NumResult from './components/NumResult';


export default function App() {
	const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

	function handleSelectedAnime(id) {
		const newAnime = animes.filter((anime) => anime.mal_id === id);
		setSelectedAnime(newAnime[0]);
	}

  return (
    <>
      <Header>
        <Search>
          <NumResult animes={animes}/>
        </Search>
      </Header>
      
      <Main>
        <Box>
            <AnimeList animes={animes} onSelectedAnime={handleSelectedAnime} />
        </Box>
        <Box>
            <AnimeDetail selectedAnime={selectedAnime} />
        </Box>
      </Main>
    </>
  );
}