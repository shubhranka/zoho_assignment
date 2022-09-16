import React, { Component } from "react";
import Bar from "../../components/Bar";
import Table from "../../containers/Table";
import AddNewToll from "../AddNewToll";
import AddNewVehicle from "../AddNewVehicle";

class Landing extends Component {
    state = {
        vehiclePage: true,
        tollPage: false,
        newToll: false,
        newVehicle: false,
        vehicleHeaders: [
            "Vehicle Type",
            "Vehicle Number",
            "Date/Time",
            "Toll Name",
            "Tariff",
        ],
        tollHeaders: [
            "Toll Name",
            "Car/Jeep/Van",
            "LCV",
            "Truck/Bus",
            "Heavy Vehicle",
        ],
    };

    setNewToll = () => {
        if (!this.state.newToll && !this.state.newVehicle)
            this.setState({
                newToll: true,
                newVehicle: false,
            });
    };

    setNewVehicle = () => {
        if (!this.state.newToll && !this.state.newVehicle)
            this.setState({
                newToll: false,
                newVehicle: true,
            });
    };

    setPage = () => {
        this.setState({
            vehiclePage: !this.state.vehiclePage,
            tollPage: !this.state.tollPage,
        });
    };

    setNewVehicleFalse = () => {
        this.setState({
            newVehicle: false,
        });
    };

    setNewTollFalse = () => {
        this.setState({
            newToll: false,
        });
    };

    render() {
        return (
            <div>
                <div className="heading">Toll Managaement Application</div>
                <div className="line-gray"></div>
                <Bar
                    addVehicleClick={this.setNewVehicle}
                    addNewTollClick={this.setNewToll}
                    tollPage={this.state.tollPage}
                    tollClick={this.setPage}
                />
                {this.state.vehiclePage && (
                    <Table headers={this.state.vehicleHeaders} />
                )}
                {this.state.tollPage && (
                    <Table headers={this.state.tollHeaders} />
                )}
                {this.state.newToll && <AddNewToll onCloseClick={this.setNewTollFalse}/>}
                {this.state.newVehicle && <AddNewVehicle onCloseClick={this.setNewVehicleFalse}/>}
            </div>
        );
    }
}

export default Landing;
