interface ModalProps {
    modalOpen: boolean;
    closeModal: () => void;
    children: React.ReactNode;
  }
  
  const Modal: React.FC<ModalProps> = ({ modalOpen, closeModal, children }) => {
    return (
      <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className='modal-box relative'>
          <label
            onClick={() => closeModal()}
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  