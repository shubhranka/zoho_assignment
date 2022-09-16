import "./index.css";
const VehicleTable = () => {
    return (
        <table className="vehicle-table">
            <thead>
                <tr>
                    <th>Vehicle Type</th>
                    <th>Vehicle Number</th>
                    <th>Date Time</th>
                    <th>Toll Name</th>
                    <th>Tarrif</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Car</td>
                    <td>KA 01 AB 1234</td>
                    <td>2020-10-10 10:10:10</td>
                    <td>Electronic City</td>
                    <td>Rs. 10</td>
                </tr>
                <tr>
                    <td>Car</td>
                    <td>KA 01 AB 1234</td>
                    <td>2020-10-10 10:10:10</td>
                    <td>Electronic City</td>
                    <td>Rs. 10</td>
                </tr>
            </tbody>
        </table>
    );
};

export default VehicleTable;
