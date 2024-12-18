import React, { useEffect, useRef } from "react";
import "./ModalWithForm.css";
import closeButton from "../../assets/closeButton.png";

function ModalWithForm({ isOpen, onClose, title, children, onSubmit }) {
  const modalContentRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
        document.activeElement.blur();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target)
    ) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div
      className={`modal ${isOpen && "modal__opened"}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content" ref={modalContentRef}>
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeButton}
            alt="close button"
            className="modal__close_button"
          />
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
