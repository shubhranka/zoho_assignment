import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import Modal from "../../containers/Modal";
import { tollsActions } from "../../store/reducers/tollsReducer";

import "./index.css";
const AddNewToll = ({onCloseClick}) => {
    const tolls = useSelector((state) => state.tollsReducer);
    const [tollName,setTollName] = useState("");
    const error = tolls[tollName] !== undefined;
    const [carSingle,setCarSingle] = useState(null);
    const [carReturn,setCarReturn] = useState(null);
    const [lcvSingle,setLcvSingle] = useState(null);
    const [lcvReturn,setLcvReturn] = useState(null);
    const [truckSingle,setTruckSingle] = useState(null);
    const [truckReturn,setTruckReturn] = useState(null);
    const [heavySingle,setHeavySingle] = useState(null);
    const [heavyReturn,setHeavyReturn] = useState(null);
    const dispatch = useDispatch();
    const handleAddNewTollSubmit = (e) => {
        e.preventDefault();
        if(!error){
            const payload = {
                name:tollName,
                tarrifs:{
                    carSingle,
                    carReturn,
                    lcvSingle,
                    lcvReturn,
                    truckSingle,
                    truckReturn,
                    heavySingle,
                    heavyReturn
                }
            }
            dispatch(tollsActions.addToll(payload))
            onCloseClick();
        }    
    }
    return (
        <Modal headerText={"Add New Toll"} footerText={"Add Details"} onCloseClick={onCloseClick}>
            <form className="form-group" onSubmit={handleAddNewTollSubmit}>
                <div className="toll-name">
                    <span>
                        Toll Name<span className="astrik">*</span>
                    </span>
                    <MyInput
                        id={"toll-name"}
                        placeholder={"Toll Name"}
                        type={"text"}
                        value={tollName}
                        setValue={setTollName}
                        err={error ? "Toll Name Already Exists" : ""}
                    />
                </div>
                <div className="vehicle-fare-details">
                    <div style={{display:"block"}}>
                        Vehicle fare details
                        <span className="astrik">*</span>
                    </div>
                    <div className="first">
                        <div className="type">
                            Car/Jeep/Van
                            <span className="astrik">*</span>
                        </div>
                        <MyInput
                            id={"car-single"}
                            placeholder={"Single Journey"}
                            type={"number"}
                            value={carSingle}
                            setValue={setCarSingle}
                        />
                        <MyInput
                            id={"car-return"}
                            placeholder={"Return Journey"}
                            type={"number"}
                            value={carReturn}
                            setValue={setCarReturn}
                        />
                    </div>
                    <div className="second">
                        <div className="type">
                            LCV<span className="astrik">*</span>
                        </div>
                        <MyInput
                            id={"lcv-single"}
                            placeholder={"Single Journey"}
                            type={"number"}
                            value={lcvSingle}
                            setValue={setLcvSingle}
                        />
                        <MyInput
                            id={"lcv-return"}
                            placeholder={"Return Journey"}
                            type={"number"}
                            value={lcvReturn}
                            setValue={setLcvReturn}
                        />
                    </div>
                    <div className="third">
                        <div className="type">
                            Truck/Bus
                            <span className="astrik">*</span>
                        </div>
                        <MyInput
                            id={"truck-single"}
                            placeholder={"Single Journey"}
                            type={"number"}
                            value={truckSingle}
                            setValue={setTruckSingle}
                        />
                        <MyInput
                            id={"truck-return"}
                            placeholder={"Return Journey"}
                            type={"number"}
                            value={truckReturn}
                            setValue={setTruckReturn}
                        />
                    </div>
                    <div className="fourth">
                        <div className="type">
                            Heavy Vehicle
                            <span className="astrik">*</span>
                        </div>
                        <MyInput
                            id={"heavy-single"}
                            placeholder={"Single Journey"}
                            type={"number"}
                            value={heavySingle}
                            setValue={setHeavySingle}
                        />
                        <MyInput
                            id={"heavy-return"}
                            placeholder={"Return Journey"}
                            type={"number"}
                            value={heavyReturn}
                            setValue={setHeavyReturn}
                        />
                    </div>
                </div>
                <MyButton text={"Add Details"} disabled={error}/>
            </form>
        </Modal>
    );
};

export default AddNewToll;
