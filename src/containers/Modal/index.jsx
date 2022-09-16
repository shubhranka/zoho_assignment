import MyButton from "../../components/MyButton";
import "./index.css";
const Modal = ({ children, headerText, footerText }) => {
    return (
        <div className="modal-container">
            <div className="backdrop"></div>
            <div className="modal">
                <div className="modal-header">
                    <h4>{headerText}</h4>
                    <span className="close-X">X</span>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
