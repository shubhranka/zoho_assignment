import "./index.css";
import { useSelector } from "react-redux";
const Table = ({ headers }) => {
    return (
        <table className="vehicle-table">
            <thead>
                <tr>
                    {headers.map((header, index) => {
                        return <th key={index}>{header}</th>;
                    })}
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

export default Table;
