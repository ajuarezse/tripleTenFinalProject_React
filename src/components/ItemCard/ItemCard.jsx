import React from "react";
import "./ItemCard.css"; // Import CSS for styling

function ItemCard({ title, lyrics, onLike, isLiked }) {
  return (
    <div className="item-card">
      <div className="item-card__header">
        <h3 className="item-card__title">{title}</h3>
      </div>
      <div className="item-card__content">
        <p className="item-card__lyrics">{lyrics}</p>
      </div>
      <div className="item-card__actions">
        <button
          className={`item-card__like-button ${isLiked ? "liked" : ""}`}
          onClick={onLike}
        >
          {isLiked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
