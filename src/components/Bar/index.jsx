import {BsFilterRight} from 'react-icons/bs';

import SideButton from '../../components/SideButton';
import CircleInput from '../CircleInput';
import "./index.css";
const Bar = ({addVehicleClick,addNewTollClick,tollPage,tollClick}) => {
    return (
        <div className="bar">
            <div className="left">
                <h4>{!tollPage?"Toll entries/Vehicle":"Toll Gate List"}</h4>
                {!tollPage && <span><BsFilterRight size={"1.4rem"} color={"#999"}/></span>}
                <CircleInput/>
            </div>
            <div className="right">
                <SideButton text={"Add new toll"} onClick={addNewTollClick}/>
                <SideButton text={"Add vehicle entry"} onClick={addVehicleClick}/>
                <SideButton text={tollPage?"Back to vehicle logs":"View all tolls"} onClick={tollClick} />
            </div>
        </div>
    );
}

export default Bar;