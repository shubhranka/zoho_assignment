import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import Modal from "../../containers/Modal";
const AddNewVehicle = () => {
    return (
        <Modal headerText={"Add New Entry"}>
            <form className="form-group">
                <div className="toll-name">
                    <div>Select Toll Name<span className="astrik">*</span></div>
                    <select name="toll-name" id="toll-name">
                        <option value="toll1">Toll 1</option>
                        <option value="toll2">Toll 2</option>
                    </select>
                </div>
                <div className="vehicle-type">
                    <div>Select Vehicle Type<span className="astrik">*</span></div>
                    <select name="type" id="type">
                        <option value="car">Car/Jeep/Van</option>
                        <option value="lcv">LCV</option>
                        <option value="truck">Truck/Bus</option>
                        <option value="heacy">Heavy Vehicle</option>
                    </select>
                </div>
                <div className="vehicle_number">
                    <div>Vehicle Number<span className="astrik">*</span></div>
                    <MyInput id={"vehicle-number"} regex={"[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}"} />
                </div>
                <div className="tariff">
                    <div>Tariff<span className="astrik">*</span></div>
                    <MyInput id={"tariff"} disabled={true}/>
                </div>
                <MyButton text={"Add Entry"} />
            </form>
        </Modal>
    );
}

export default AddNewVehicle