import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { tollsActions } from "../../store/reducers/tollsReducer";
const Table = ({ headers, tollsPage, filters, searchText }) => {
    const dispatch = useDispatch();
    const mappings = {
        car: "Car/Jeep/Van",
        lcv: "LCV",
        truck: "Truck/Bus",
        heavy: "Heavy Vehicle",
    };
    const logs = useSelector((state) => state.logsReducer.data);
    const tolls = useSelector((state) => state.tollsReducer);
    let headersRender;
    if (tollsPage)
        headersRender = headers.tollHeaders.map((header, index) => {
            return <th key={index}>{header}</th>;
        });
    else
        headersRender = headers.vehicleHeaders.map((header, index) => {
            return <th key={index}>{header}</th>;
        });

    let data = [];
    if (tollsPage) {
        data = Object.keys(tolls);
        if (searchText !== "")
            data = data.filter((tollName) =>
                tollName.toLowerCase().includes(searchText.toLowerCase())
            );
        data = data.map((tollName, index) => {
            return (
                <tr key={index}>
                    <td>{tollName}</td>
                    <td>
                        {tolls[tollName].tarrifs.carSingle}/
                        {tolls[tollName].tarrifs.carReturn}
                    </td>
                    <td>
                        {tolls[tollName].tarrifs.lcvSingle}/
                        {tolls[tollName].tarrifs.lcvReturn}
                    </td>
                    <td>
                        {tolls[tollName].tarrifs.truckSingle}/
                        {tolls[tollName].tarrifs.truckReturn}
                    </td>
                    <td>
                        {tolls[tollName].tarrifs.heavySingle}/
                        {tolls[tollName].tarrifs.heavyReturn}
                    </td>
                    <td
                        className="delteButton"
                        onClick={() => {
                            dispatch(tollsActions.deleteToll(tollName));
                        }}
                    >
                        <RiDeleteBin5Line />
                    </td>
                </tr>
            );
        });
    } else {
        // if (
        //     (filters.length === 0 || filters.includes(row.tollName)) &&
        //     (searchText === "" ||
        //         row.vehicleNumber.toLowerCase().includes(searchText.toLowerCase()))
        // )
        data = logs;
        // console.log(data)
        if (searchText !== "") {
            data = data.filter((log) =>
                log.vehicleNumber
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            );
        }
        if (filters.length !== 0) {
            data = data.filter((log) => filters.includes(log.tollName));
        }
        data = data.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{mappings[row.vehicleType]}</td>
                    <td>{row.vehicleNumber}</td>
                    <td>{new Date(row.dateTime).toLocaleString()}</td>
                    <td>{row.tollName}</td>
                    <td>{row.tarrif}</td>
                    <span></span>
                </tr>
            );
        });
    }
    return (
        <table className="vehicle-table">
            <thead>
                <tr>{headersRender}</tr>
            </thead>
            <tbody>
                {data.length !== 0 ? (
                    data
                ) : (
                    <div
                        style={{
                            textAlign: "center",
                            position: "absolute",
                            top: "20rem",
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontSize: "1.5rem",
                        }}
                    >
                        Not Found
                    </div>
                )}
            </tbody>
        </table>
    );
};

export default Table;
