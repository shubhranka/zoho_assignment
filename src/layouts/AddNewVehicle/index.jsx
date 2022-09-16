import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import Modal from "../../containers/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logsActions } from "../../store/reducers/logsReducer";
import { vehicleActions } from "../../store/reducers/vehicleReducer";
const AddNewVehicle = ({ onCloseClick }) => {
    const mappings = {
        "car": "Car/Jeep/Van",
        "lcv": "LCV",
        "truck": "Truck/Bus",
        "heavy": "Heavy Vehicle",
    }
    const tolls = useSelector((state) => state.tollsReducer);
    const tollNames = Object.keys(tolls);
    const vehicles = useSelector((state) => state.vehicleReducer);
    const [vehicleNumber, setVehicleNumber] = useState("");
    const validVehicleNumber = vehicleNumber.match(
        /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/
    );
    const typeDefault =
        validVehicleNumber && vehicles[vehicleNumber] !== undefined;
    console.log(tolls, typeDefault, vehicles);
    const [tollName, setTollName] = useState(tollNames[0]);
    const [vehicleType, setVehicleType] = useState(
        typeDefault ? vehicles[vehicleNumber].type : "car"
    );

    let tarrif = "";
    const dispatch = useDispatch();
    if (validVehicleNumber) {
        if (typeDefault && vehicles[vehicleNumber].tolls[tollName]) {
            const currentTime = new Date();
            const preTime = new Date(vehicles[vehicleNumber].tolls[tollName]);
            const timeDiff = currentTime.getTime() - preTime.getTime();
            const minDiff = timeDiff / (1000 * 60);
            if (minDiff <= 60) {
                tarrif = tolls[tollName].tarrifs[vehicleType + "Return"];
            } else tarrif = tolls[tollName].tarrifs[vehicleType + "Single"];
        } else {
            tarrif = tolls[tollName].tarrifs[vehicleType + "Single"];
        }
    }
    console.log(typeDefault,vehicleType,"typeDefault");
    const handleAddNewVehicleSubmit = (e) => {
        e.preventDefault();
        // console.log(vehicleNumber, tollName, vehicleType,tarrif,new Date());
        let dateTime = new Date();
        let payloadVehicle = null;
        let tarrif = "";
        if (typeDefault && vehicles[vehicleNumber].tolls[tollName]) {
            const currentTime = dateTime;
            const preTime = new Date(vehicles[vehicleNumber].tolls[tollName]);
            const timeDiff = currentTime.getTime() - preTime.getTime();
            const minDiff = timeDiff / (1000 * 60);
            if (minDiff <= 60) {
                tarrif = tollNames[tollName].tarrifs[vehicleType + "Return"];
            } else tarrif = tolls[tollName].tarrifs[vehicleType + "Single"];

        } else {
            tarrif = tolls[tollName].tarrifs[vehicleType + "Single"];
        }
        dateTime = dateTime.toString();
        payloadVehicle = {
            vehicleNumber,
            tollName,
            dateTime,
            vehicleType,
        };
        const payload = {
            vehicleNumber,
            tollName,
            dateTime,
            tarrif,
        }
        dispatch(logsActions.addLog(payload));
        dispatch(vehicleActions.addVehicle(payloadVehicle));
        onCloseClick();
    };

    return (
        <Modal headerText={"Add New Entry"} onCloseClick={onCloseClick}>
            <form className="form-group" onSubmit={handleAddNewVehicleSubmit}>
                <div className="toll-name">
                    <div>
                        Select Toll Name<span className="astrik">*</span>
                    </div>
                    <select
                        name="toll-name"
                        id="toll-name"
                        onChange={(e) => setTollName(e.target.value)}
                    >
                        {tollNames.map((tollName, index) => (
                            <option key={index} value={tollName}>
                                {tollName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="vehicle-type">
                    <div>
                        Select Vehicle Type<span className="astrik">*</span>
                    </div>
                    {typeDefault ? (
                        <MyInput
                            id={"tariff"}
                            disabled={true}
                            value={mappings[vehicles[vehicleNumber].type]}
                        />
                    ) : (
                        <select name="type" id="type" onChange={(e)=>{
                            setVehicleType(e.target.value);
                            console.log(e.target.value,"e.target.value");
                        }}>
                            <option value="car">Car/Jeep/Van</option>
                            <option value="lcv">LCV</option>
                            <option value="truck">Truck/Bus</option>
                            <option value="heavy">Heavy Vehicle</option>
                        </select>
                    )}
                </div>
                <div className="vehicle_number">
                    <div>
                        Vehicle Number<span className="astrik">*</span>
                    </div>
                    <MyInput
                        id={"vehicle-number"}
                        regex={"[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}"}
                        value={vehicleNumber}
                        setValue={setVehicleNumber}
                    />
                </div>
                <div className="tariff">
                    <div>
                        Tariff<span className="astrik">*</span>
                    </div>
                    <MyInput id={"tariff"} disabled={true} value={tarrif} />
                </div>
                <MyButton text={"Add Entry"} />
            </form>
        </Modal>
    );
};

export default AddNewVehicle;
