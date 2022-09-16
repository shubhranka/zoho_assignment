import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./index.css"; 
const MyInput = () => {
    const [value, setValue] = useState("");
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    return (
        <div className="myinput">
            <span className="search-icon"><BsSearch/></span>
            <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Search Vehicle"
            />  
        </div>
    );
}

export default MyInput;