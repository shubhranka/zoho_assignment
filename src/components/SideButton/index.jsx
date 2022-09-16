import "./index.css"
const SideButton = ({onClick,text}) => {
    return (
        <div className="side-button" onClick={onClick}>
            {text}
        </div>
    );
};

export default SideButton;