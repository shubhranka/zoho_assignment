import MyInput from "../../../components/MyInput";

const AddNewToll = () => {
    return (
        <div className="add-new-toll">
            <div className="backdrop"></div>
            <div className="modal">
                <div className="modal-header">
                    <h4>Add New Toll</h4>
                    <span>X</span>
                </div>
                <div className="modal-body">
                    <form className="form-group">
                        <div className="toll-name">
                            <span>Toll Name</span>
                            <MyInput id={"toll-name"}/>
                        </div>
                        <div className="vehicle-fare-details">
                            <div className="first">
                                <div className="type">
                                    Car/Jeep/Van
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewToll;
