import { BsFilterRight } from "react-icons/bs";
import { useSelector } from "react-redux";

import SideButton from "../../components/SideButton";
import CircleInput from "../CircleInput";
import MySelect from "../MySelect";
import "./index.css";
const Bar = ({
    addVehicleClick,
    addNewTollClick,
    tollPage,
    tollClick,
    filters,
    setFilters,
    filterMenu,
    setFilterMenu,
    setSearchText,
    searchText
}) => {
    const tollNames = useSelector((state) => state.logsReducer.data.map(log=>log.tollName));
    return (
        <div className="bar">
            <div className="left">
                <h4>{!tollPage ? "Toll entries/Vehicle" : "Toll Gate List"}</h4>
                {!tollPage && (
                    <span style={{ position: "relative" }}>
                        <BsFilterRight
                            size={"1.4rem"}
                            color={"#999"}
                            onClick={setFilterMenu}
                        />
                        {filterMenu && (
                            <MySelect
                                filters={filters}
                                options={tollNames}
                                setFilters={setFilters}
                            />
                        )}
                    </span>
                )}
                <CircleInput
                    value={searchText}
                    setValue={setSearchText}
                    placeholder={tollPage ? "Search a toll" : "Search Vehicles"}
                />
            </div>
            <div className="right">
                <SideButton text={"Add new toll"} onClick={addNewTollClick} />
                <SideButton
                    text={"Add vehicle entry"}
                    onClick={addVehicleClick}
                />
                <SideButton
                    text={tollPage ? "Back to vehicle logs" : "View all tolls"}
                    onClick={()=>{ setSearchText(""); tollClick()}}
                />
            </div>
        </div>
    );
};

export default Bar;
