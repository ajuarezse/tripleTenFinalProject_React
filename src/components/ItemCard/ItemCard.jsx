import React, { useState, useEffect } from "react";
import { searchTracks } from "../../utils/SpotifyApi";
import Preloader from "../Preloader/Preloader";
import "./ItemCard.css";

function ItemCard({ title, lyrics, onCardClick }) {
  const [spotifyLink, setSpotifyLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchSpotifyData() {
      try {
        setIsLoading(true);
        const tracks = await searchTracks(title);
        console.log("Fetched Tracks:", tracks);
        if (tracks && tracks.length > 0) {
          const randomIndex = Math.floor(Math.random() * tracks.length);
          const track = tracks[randomIndex];
          setSpotifyLink(track.id); // Save the track ID for embedding
        }
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSpotifyData();
  }, [title]);

  return (
    <div className="item-card" onClick={onCardClick}>
      <div className="item-card__header">
        <h3 className="item-card__title">{title}</h3>
      </div>
      <div className="item-card__content">
        <p className="item-card__lyrics">{lyrics}</p>
        {isLoading ? (
          <Preloader />
        ) : spotifyLink ? (
          <iframe
            src={`https://open.spotify.com/embed/track/${spotifyLink}`}
            width="300"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
            title={`Spotify player for ${title}`}
            className="item-card__player"
          ></iframe>
        ) : (
          <p>No track available</p>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
