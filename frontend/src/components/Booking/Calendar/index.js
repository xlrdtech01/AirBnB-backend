import { useState } from 'react'
import "./index.css"
import { format, isAfter, isBefore, isValid, parse } from "date-fns";
import { DayPicker, DateRange, SelectRangeEventHandler } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Calendar = () =>{

const [selectedRange, setSelectedRange] = useState();
const [fromValue, setFromValue] = useState('');
const [toValue, setToValue] = useState('');
const [isPopperOpen, setIsPopperOpen] = useState(false);
const [totalGuests, setTotalGuests] = useState(1);



  const css = `
  .my-selected:not([disabled]) {
    font-weight: bold;
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) {
    color: black;
    background-color: white;
  }
  .rdp-day_range_start:not([disabled]) {
    border-color: black;
    border-radius: 50%;
    color: white;
    background-color: black;
  }
  .rdp-day_range_end:not([disabled]) {
    border-color: black;
    border-radius: 50%;
    color: white;
    background-color: black;
    }
  .rdp-day_range_middle:not([disabled]) {
    background-color: none;
    border-color: lightgray;
    background-color: lightgray;
  }

  .rdp:not([dir='rtl']) .rdp-day_range_start:not(.rdp-day_range_end):not([disabled]) {
    border-radius: 50%;
  }

  .rdp:not([dir='rtl']) .rdp-day_range_end:not(.rdp-day_range_start):not([disabled]) {
    border-radius: 50%;
    }

.rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: #e6e6e6;
    }
`;

  const handleFromChange = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined });
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date });
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to });
    }
  };

  const handleToChange = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());

    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined });
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from });
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date });
    }
  };

  // this may need a tweak
  const handleRangeSelect = (range= undefined) => {
    setSelectedRange(range);
    if (range?.from) {
      setFromValue(format(range.from, 'y-MM-dd'));
    } else {
      setFromValue('');
    }
    if (range?.to) {
      setToValue(format(range.to, 'y-MM-dd'));
    } else {
      setToValue('');
    }
  };



  return (
    <div>
      <form className="ma2">
        <div className="date-selector-container">
          <div className="start-date-container">
            <label htmlFor="input-start-date">CHECK-IN</label>
            <input
              size={10}
              placeholder="Add Date"
              value={fromValue}
              onChange={handleFromChange}
              className="input-start-date"
            />
          </div>
          <div className="end-date-container">
            <label htmlFor="input-end-date">CHECK-OUT</label>
            <input
              size={10}
              placeholder="Add Date"
              value={toValue}
              onChange={handleToChange}
              className="input-end-date"
            />
          </div>
        </div>
        <div className="guest-add-container">
          <label htmlFor="add-guest">GUESTS</label>
          <div className="add-guest-input">
            <div className="add-guest">1 Guest</div>
            <MdKeyboardArrowDown />
          </div>
        </div>
        {
          
        }
      </form>
      {isPopperOpen && (
        <div>
          <style>{css}</style>
          <DayPicker
            numberOfMonths={2}
            mode="range"
            onSelect={handleRangeSelect}
            selected={selectedRange}
            modifiersClassNames={{
              selected: "my-selected",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Calendar
