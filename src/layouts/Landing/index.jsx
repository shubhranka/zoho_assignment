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
        filters:[],
        searchText:"",
        filterMenu:false,
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

    setFilters = (f)=>{
        const filters = this.state.filters;
        const ind = filters.indexOf(f);
        if(ind === -1){
            filters.push(f);
        }else{
            filters.splice(ind,1);
        }
        this.setState({
            filters
        })
    }
    filterMenuHandler = (e) => {
        // console.log(e)
        if(!e.path.map(ele=>ele.className).includes("my-select")){
            this.setFilterMenu();
        }
    }
    setFilterMenu = () => {
        if(!this.state.filterMenu){
            this.setState({
                filterMenu:true
            });
            setTimeout(()=>{
                window.addEventListener("click",this.filterMenuHandler);
            },50);
        }else{
            this.setState({
                filterMenu:false
            });
            window.removeEventListener("click",this.filterMenuHandler);
        }
    }
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
                    filters={this.state.filters}
                    setFilters={this.setFilters}
                    filterMenu={this.state.filterMenu}
                    setFilterMenu={this.setFilterMenu}
                    searchText={this.state.searchText}
                    setSearchText={(text)=>this.setState({searchText:text})}
                />
                <Table
                    searchText={this.state.searchText}
                    filters={this.state.filters}
                    headers={{
                        vehicleHeaders: this.state.vehicleHeaders,
                        tollHeaders: this.state.tollHeaders,
                    }}
                    tollsPage={this.state.tollPage}
                />
                {this.state.newToll && (
                    <AddNewToll onCloseClick={this.setNewTollFalse} />
                )}
                {this.state.newVehicle && (
                    <AddNewVehicle onCloseClick={this.setNewVehicleFalse} />
                )}
            </div>
        );
    }
}

export default Landing;
