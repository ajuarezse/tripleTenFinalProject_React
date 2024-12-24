import React, { useState, useContext } from "react";
import "./BookmarkButton.css";
import bookmark from "../../assets/bookmark.svg";
import bookmarkHover from "../../assets/bookmarkHover.svg";
import bookmarkSaved from "../../assets/bookmarkSaved.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function BookmarkButton({ isSaved, onToggle }) {
  const currentUser = useContext(CurrentUserContext);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!currentUser) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowTooltip(false);
  };

  const handleClick = () => {
    if (!currentUser) {
      setShowTooltip(true);
      return;
    }
    if (onToggle) {
      onToggle();
    }
  };

  const getIcon = () => {
    if (isSaved) return bookmarkSaved;
    return isHovered ? bookmarkHover : bookmark;
  };

  return (
    <div
      className="bookmark-button-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="bookmark-button" onClick={handleClick}>
        <img src={getIcon()} alt="Bookmark" className="bookmark-icon" />
      </button>
      {showTooltip && !currentUser && (
        <span className="bookmark-tooltip">Log in to bookmark</span>
      )}
    </div>
  );
}

export default BookmarkButton;
