import React from "react";
import "./ItemCard.css"; // Import CSS for styling

function ItemCard({ title, lyrics, onCardClick }) {
  const handleCardClick = () => {
    onCardClick();
  };

  return (
    <div className="item-card" onClick={handleCardClick}>
      <div className="item-card__header">
        <h3 className="item-card__title">{title}</h3>
      </div>
      <div className="item-card__content">
        <p className="item-card__lyrics">{lyrics}</p>
      </div>
    </div>
  );
}

export default ItemCard;
