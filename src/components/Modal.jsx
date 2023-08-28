import ESC from "../images/x.png"

function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div className="modal-background">       
          <div className="modal-style">
            <div className="icon-content">
                <img src={ESC} alt="" onClick={setModalOpen} className="icon-modal"/>
            </div>
            <div>
                {children}
            </div>
          </div>
      </div>
    );
    return null
  }
}

export default Modal;
