import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Log In"
      buttonText="Log In"
    >
      <label htmlFor="login-email">
        Email
        <input
          type="email"
          name="email"
          id="login-email"
          required
          className="modal__input"
          placeholder="Email"
        />
      </label>
      <label htmlFor="login-password">
        Password
        <input
          type="password"
          name="password"
          id="login-password"
          className="modal__input"
          placeholder="Password"
        />
      </label>
      <div className="modal__button-container">
        <button className="modal__submit" type="submit">
          Log In
        </button>
        <button className="modal__switch-button" type="button">
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
