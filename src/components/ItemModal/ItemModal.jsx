import React, { useRef } from "react";
import "./ItemModal.css";
import closeButton from "../../assets/closeButton.png";
import bookmark from "../../assets/bookmark.svg";
import bookmarkHover from "../../assets/bookmarkHover.svg";
import bookmarkSaved from "../../assets/bookmarkSaved.svg";

function ItemModal({ activeModal, onClose, song, handleOverlayClick }) {
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
        <h2 className="modal__title">Lyrics for: {title}</h2>
        <div className="modal__lyrics">
          <h3 className="modal__lyrics-subtitle">Verses:</h3>
          {verses.length > 0 ? (
            verses.map((verse) => (
              <div key={verse.id} className="modal__lyric-container">
                <p className="modal__verse">{verse.text}</p>
                <button className="modal__bookmark-button">
                  <img
                    src={bookmark}
                    alt="bookmark"
                    className="modal__bookmark-icon"
                  />
                </button>
              </div>
            ))
          ) : (
            <p className="modal__no-lyrics">
              No verses available for this song.
            </p>
          )}
          <h3 className="modal__lyrics-subtitle">Choruses:</h3>
          {choruses.length > 0 ? (
            choruses.map((chorus) => (
              <p key={chorus.id} className="modal__chorus">
                {chorus.text}
              </p>
            ))
          ) : (
            <p className="modal__no-lyrics">This song doesn't have a chorus.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
