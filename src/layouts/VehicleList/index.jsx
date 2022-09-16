import Bar from "../../components/Bar";
import VehicleTable from "../../containers/VehicleTable";
import AddNewToll from "../AddNewToll";
import AddNewVehicle from "../AddNewVehicle";

const VehicleList = () => {
  return (
    <div>
      <div className="heading">Toll Managaement Application</div>
      <div className="line-gray"></div>
      <Bar />
      <VehicleTable />
      {/* <AddNewToll/> */}
        {/* <AddNewVehicle/> */}
    </div>
  );
};

export default VehicleList;
