import Bar from "../../containers/Bar";
import VehicleTable from "../../containers/VehicleTable";

const VehicleList = () => {
  return (
    <div>
      <div className="heading">Toll Managaement Application</div>
      <div className="line-gray"></div>
      <Bar />
      <VehicleTable />
    </div>
  );
};

export default VehicleList;
