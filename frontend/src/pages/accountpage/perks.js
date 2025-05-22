
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";
import { IoTvOutline } from "react-icons/io5";
import { GiHollowCat } from "react-icons/gi";
import { BsDoorClosed } from "react-icons/bs";

const Perks = ({selected, onChange}) => {
    return (
        <div className="perks-container">
            <label className="perks-label">
                <input type="checkbox" />
                <AiOutlineWifi />
                <span>Wifi</span>
            </label>
            <label className="perks-label">
                <input type="checkbox" />
                <AiOutlineCar />
                <span>Free parking spot</span>
            </label>
            <label className="perks-label">
                <input type="checkbox" />
                <IoTvOutline />
                <span>TV</span>
            </label>
            <label className="perks-label">
                <input type="checkbox" />
                <GiHollowCat />
                <span>Pets</span>
            </label>
            <label className="perks-label">
                <input type="checkbox" />
                <BsDoorClosed />
                <span>Private entrance</span>
            </label>
        </div>
    )
}


export default Perks;
