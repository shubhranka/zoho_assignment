import { useState } from "react";
import { BsSearch } from "react-icons/bs";

import "./index.css"; 

const CircleInput = () => {
    const [value, setValue] = useState("");
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    return (
        <div className="circle-input">
            <span className="search-icon"><BsSearch/></span>
            <input
            className="circle-input-field"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Search Vehicle"
            />  
        </div>
    );
}

export default CircleInput;