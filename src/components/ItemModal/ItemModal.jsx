import React, { useRef } from "react";
import "./ItemModal.css";
import closeButton from "../../assets/closeButton.png";
import BookmarkButton from "../BookmarkButton/BookmarkButton";

function ItemModal({
  activeModal,
  onClose,
  song,
  handleOverlayClick,
  likedSongs,
  handleBookmarkSaved,
}) {
  if (!song || activeModal !== "view") return null;

  const { title, verses = [], choruses = [] } = song;
  const modalContentRef = useRef(null);

  return (
    <div
      className={`modal modal__opened`}
      onClick={(e) => handleOverlayClick(e, modalContentRef.current)}
    >
      <div className="modal__content" ref={modalContentRef}>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeButton}
            alt="close button"
            className="modal__close_button"
          />
        </button>
        <h2 className="modal__title">Lyrics for:</h2>
        <h2 className="modal__title-song">{title}</h2>
        <div className="modal__lyrics">
          <h3 className="modal__lyrics-subtitle">Verses:</h3>
          {verses.length > 0 ? (
            verses.map((verse) => (
              <div key={verse.id} className="modal__lyric-container">
                <p className="modal__verse">{verse.text}</p>
                <BookmarkButton
                  isSaved={likedSongs[verse.id] || false}
                  onToggle={() => handleBookmarkSaved(verse.id)}
                />
              </div>
            ))
          ) : (
            <p className="modal__no-lyrics">
              No verses available for this song.
            </p>
          )}
          {choruses.length > 0 && (
            <>
              <h3 className="modal__lyrics-subtitle">Choruses:</h3>
              {choruses.map((chorus) => (
                <div key={chorus.id} className="modal__lyric-container">
                  <p className="modal__chorus">{chorus.text}</p>
                  <BookmarkButton
                    isSaved={likedSongs[chorus.id] || false}
                    onToggle={() => handleBookmarkSaved(chorus.id)}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
