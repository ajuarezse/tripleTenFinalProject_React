import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose, handleRegisterModal, onLogIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogIn();
  };
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Log In"
      buttonText="Log In"
      onSubmit={handleSubmit}
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
          required
        />
      </label>
      <div className="modal__button-container">
        <button className="modal__submit" type="submit">
          Log In
        </button>
        <button
          className="modal__switch-button"
          onClick={handleRegisterModal}
          type="button"
        >
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
