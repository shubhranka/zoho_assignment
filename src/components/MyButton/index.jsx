import "./index.css";
const MyButton = ({text,onClick,disabled}) => {
    const className = disabled ? "myButton disabled" : "myButton";
    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    );
}

export default MyButton;