import React, { useState, useEffect } from "react";
import { searchTracks } from "../../utils/SpotifyApi";
import Preloader from "../Preloader/Preloader";
import "./ItemCard.css";

function ItemCard({ title, lyrics, onCardClick }) {
  const [spotifyLink, setSpotifyLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSpotifyData() {
      setIsLoading(true);
      setError(null);
      try {
        const tracks = await searchTracks(title);
        console.log("Fetched Tracks:", tracks);
        if (tracks && tracks.length > 0) {
          const randomIndex = Math.floor(Math.random() * tracks.length);
          const track = tracks[randomIndex];
          setSpotifyLink(track.id); // Save the track ID for embedding
        } else {
          setSpotifyLink(null);
        }
      } catch (err) {
        setError(
          "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
        );
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
        ) : error ? (
          <p className="item-card__error">{error}</p>
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
