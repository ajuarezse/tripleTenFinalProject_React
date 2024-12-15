import "./ModalWithForm.css";
import closeButton from "../../assets/closeButton";

function ModalWithForm() {
  return (
    <div className="modal_opened">
      <div className="modal__content">
        <h2 className="modal__title">Modal</h2>
        <button className="modal__close">
          <img
            src={closeButton}
            alt="close button"
            className="modal__close_button"
          />
        </button>
        <form className="modal__form"></form>
      </div>
    </div>
  );
}

export default ModalWithForm;
