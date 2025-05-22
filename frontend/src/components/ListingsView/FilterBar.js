import React from "react";
import "./FilterBar.css"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import {filters} from "../../data/filters"
import Arrow from "./Arrow.tsx"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import FilterButton from "./FilterButton";

const FilterBar = () => {

    const [items, setItems] = React.useState(filters)

    return (
      <div className="filter-bar-container">
        <div className="container-filter">
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            className="scroll-menu-container"
          >
            {items.map(({ name, icon }) => (
                <Card key={name} name={name} icon={icon} />
            ))}
          </ScrollMenu>
        </div>
        <FilterButton />
      </div>
    );
        }

    function LeftArrow() {
      const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);

      return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
          <IoIosArrowBack color="black" className="left-arrow"/>
        </Arrow>
      );
    }

  function RightArrow() {
      const { isLastItemVisible, scrollNext } =
        React.useContext(VisibilityContext);

      return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
          <IoIosArrowForward color="black" className="right-arrow"/>
        </Arrow>
      );
}

function Card({ name, icon }) {
  return (
    <div
      style={{
        width: "70px",
        margin: "13px",
      }}
      tabIndex={0}
    >
      <div className="card">
        <div><img src={icon} className="filter-icon"/></div>
        <div className="filter-name">{name}</div>
      </div>
    </div>
  );
}


export default FilterBar
