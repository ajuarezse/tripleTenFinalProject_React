import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Log In"
      buttonText="Log In"
    ></ModalWithForm>
  );
};

export default LoginModal;
