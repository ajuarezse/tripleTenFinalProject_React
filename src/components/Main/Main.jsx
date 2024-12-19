import React from "react";
import "./Main.css";
import { mockLyrics } from "../../data/mockLyrics";
import ItemCard from "../ItemCard/ItemCard"; // Import ItemCard component

function Main({ likedSongs, onLike, handleCardClick }) {
  return (
    <main className="main">
      <h1>All Songs</h1>
      <div className="main__songs-list">
        {mockLyrics.map((song) => (
          <ItemCard
            key={song.id}
            title={song.title}
            lyrics={song.verses[0].text} // Display first verse as preview
            isLiked={!!likedSongs[song.id]} // Check if the song is liked
            onLike={() => onLike(song.id)} // Pass like handler
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
