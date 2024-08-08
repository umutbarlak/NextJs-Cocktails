import { IoMdClose } from "react-icons/io";

const Modal = ({ onConfirm, onClose, show, theme }) => {
  const text =
    theme === "add"
      ? "Are you sure you want to add to cart?"
      : theme === "del"
      ? "Are you sure you want to remove from cart?"
      : "Are you sure you want to do this?";

  return (
    show && (
      <div className="modal-wrapper">
        <div className="modal-inner">
          <div className="top">
            <IoMdClose onClick={onClose} />
          </div>

          <p>{text}</p>

          <div className="buttons">
            <button onClick={onClose}>Close</button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
