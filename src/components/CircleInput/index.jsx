import { BsSearch } from "react-icons/bs";

import "./index.css"; 

const CircleInput = ({placeholder,value,setValue}) => {    
    return (
        <div className="circle-input">
            <span className="search-icon"><BsSearch/></span>
            <input
            className="circle-input-field"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            />  
        </div>
    );
}

export default CircleInput;