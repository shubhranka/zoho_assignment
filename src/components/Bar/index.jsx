import {BsFilterRight} from 'react-icons/bs';

import SideButton from '../../components/SideButton';
import CircleInput from '../CircleInput';
import "./index.css";
const Bar = () => {
    return (
        <div className="bar">
            <div className="left">
                <h4>Toll entries/Vehicle</h4>
                <span><BsFilterRight size={"1.4rem"} color={"#999"}/></span>
                <CircleInput/>
            </div>
            <div className="right">
                <SideButton text={"Add new toll"}/>
                <SideButton text={"Add vehicle entry"}/>
                <SideButton text={"View all tolls"}/>
            </div>
        </div>
    );
}

export default Bar;