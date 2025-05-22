import { RiSearch2Line } from "react-icons/ri";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="Anywhere-text">Anywhere</div>
      <div className="Anyweek-text">Any week</div>
      <div className="guest-text">Add guests</div>
      <RiSearch2Line className="search-btn" />
    </div>
  );
};

export default SearchBar;
