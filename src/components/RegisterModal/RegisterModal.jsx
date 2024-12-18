import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose }) => {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign Up"
      buttonText="Sign Up"
    >
      <label htmlFor="register-name">
        Name*
        <input
          type="text"
          name="name"
          id="register-name"
          placeholder="Name"
          className="modal__input"
        />
      </label>
      <label htmlFor="register-email">
        Email*
        <input
          type="email"
          //ref={emailRef}
          name="email"
          id="register-email"
          placeholder="Email"
          //value={userEmail}
          className="modal__input"
        />
      </label>
      <label htmlFor="register-password">
        Password*
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="Password"
          className="modal__input"
        />
      </label>
      <label htmlFor="register-confirm-password">
        Confirm Password*
        <input
          type="password"
          name="confirm-password"
          id="register-confirm-password"
          placeholder="Confirm Password"
          className="modal__input"
        />
      </label>
      <div className="modal__button-container">
        <button className="modal__submit" type="submit">
          Sign Up
        </button>
        <button className="modal__switch-button" type="button">
          or Log In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
