import React, { useRef } from "react";
import "./ItemModal.css";
import closeButton from "../../assets/closeButton.png";

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
        <h2 className="modal__title">{title}</h2>
        <div className="modal__lyrics">
          {verses.length > 0 ? (
            verses.map((verse) => (
              <p key={verse.id} className="modal__verse">
                {verse.text}
              </p>
            ))
          ) : (
            <p className="modal__no-lyrics">
              No verses available for this song.
            </p>
          )}
          {choruses.length > 0 ? (
            choruses.map((chorus) => (
              <p key={chorus.id} className="modal__chorus">
                {chorus.text}
              </p>
            ))
          ) : (
            <p className="modal__no-lyrics">
              No choruses available for this song.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
