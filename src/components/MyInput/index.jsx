import "./index.css";
const MyInput = ({id,placeholder,type,regex,disabled}) => {
    return (
        <div className="myInput">
            <input type={type?type:"text"} placeholder={placeholder} id={id} required pattern={regex?regex:null} disabled={disabled?disabled:false}/>
        </div>
    );
}

export default MyInput;