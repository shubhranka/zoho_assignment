import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import Modal from "../../containers/Modal";

import "./index.css";
const AddNewToll = () => {
    return (
        <Modal headerText={"Add New Toll"} footerText={"Add Details"}>
            <form className="form-group">
                <div className="toll-name">
                    <span>
                        Toll Name<span className="astrik">*</span>
                    </span>
                    <MyInput
                        id={"toll-name"}
                        placeholder={"Toll Name"}
                        type={"text"}
                    />
                </div>
                <div className="vehicle-fare-details">
                    <div className="heading-fare-details">
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
                        />
                        <MyInput
                            id={"car-return"}
                            placeholder={"Return Journey"}
                            type={"number"}
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
                        />
                        <MyInput
                            id={"lcv-return"}
                            placeholder={"Return Journey"}
                            type={"number"}
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
                        />
                        <MyInput
                            id={"truck-return"}
                            placeholder={"Return Journey"}
                            type={"number"}
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
                        />
                        <MyInput
                            id={"heavy-return"}
                            placeholder={"Return Journey"}
                            type={"number"}
                        />
                    </div>
                </div>
                <MyButton text={"Add Details"} />
            </form>
        </Modal>
    );
};

export default AddNewToll;
