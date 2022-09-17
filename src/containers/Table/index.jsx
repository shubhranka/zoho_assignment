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
        data = Object.keys(tolls).map((tollName, index) => {
            if (
                searchText === "" ||
                tollName.toLowerCase().includes(searchText.toLowerCase())
            )
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
                return null;
        });
    } else {
        data = logs.map((row, index) => {
            if (
                (filters.length === 0 || filters.includes(row.tollName)) &&
                (searchText === "" ||
                    row.vehicleNumber.toLowerCase().includes(searchText.toLowerCase()))
            )
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
            return null;
        });
    }
    return (
        <table className="vehicle-table">
            <thead>
                <tr>{headersRender}</tr>
            </thead>
            <tbody>{data}</tbody>
        </table>
    );
};

export default Table;
