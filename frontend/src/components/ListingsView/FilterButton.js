import "./FilterButton.css";
import filterIcon from "../../assets/images/filter-icon.svg";

const FilterButton = () => {
    return (
        <div className="filter-button">
            <img src={filterIcon} alt="filter-icon" />
            <div className="filter-btn-txt">Filters</div>
        </div>
    );
}


export default FilterButton;
