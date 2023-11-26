import { useState } from "react";

export default function main({children}) {
	return ( <main className="main">
		{ children }
      </main>
	);
}

export function Box({ children }){
	const [isOpen, setIsOpen] = useState(true);

	return (<div className="box">
	<button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
	  {isOpen ? '–' : '+'}
	</button>
	{isOpen && children }
  </div>);
}


export function AnimeList({animes, onSelectedAnime}) {
	return (
		<ul className="list list-anime">
			{animes?.map((anime) => (
				<Anime key={anime.mal_id} anime={anime} onSelectedAnime={onSelectedAnime}/>
			))}
		</ul>
	);
}

function Anime({anime, onSelectedAnime}) {
	return (
		<li onClick={() => onSelectedAnime(anime.mal_id)}>
			<img src={anime.image} alt={`${anime.title} cover`} />
			<h3>{anime.title}</h3>
			<div>
			<p>
				<span>{anime.year}</span>
			</p>
			</div>
		</li>
	);
}

export function AnimeDetail({selectedAnime}){
	return (
		<div className="details">
				<header>
				<img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />
				<div className="details-overview">
					<h2>{selectedAnime.title}</h2>
					<p>
					{selectedAnime.year} &bull; {selectedAnime.score}
					</p>
				</div>
				</header>
				<section>
				<p>
					<em>{selectedAnime.synopsis}</em>
				</p>
				</section>
			</div>
	);
}