import React from "react";
import "./Main.css";
import { mockLyrics } from "../../data/mockLyrics";
import ItemCard from "../ItemCard/ItemCard";

function Main({ likedSongs, onLike, handleCardClick }) {
  return (
    <main className="main">
      <h1 className="main__title">Welcome to the Son Jarocho Songbook!</h1>
      <h2 className="main__subtitle">
        Click on a card below and browse the lyrics!
      </h2>
      <div className="main__songs-list">
        {mockLyrics.map((song) => (
          <ItemCard
            key={song.id}
            title={song.title}
            lyrics={song.verses[0].text} // Display first verse as preview
            isLiked={!!likedSongs[song.id]}
            onLike={() => onLike(song.id)}
            onCardClick={() => handleCardClick(song)}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
