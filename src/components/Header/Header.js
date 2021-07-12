import React, {useState} from 'react';
import logo from "../../assets/icons/logo.png";
import Label from "../Label/Label";
import './header.css'
import Picker from "../Picker/Picker";

export default function Header({onDateChange, ...rest}) {
    const [selectedStartDate, setSelectedStartDate] = useState(new Date(new Date() - 1800000));
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    const handleDateChange = (startDate, endDate) => {
        setSelectedStartDate(startDate);
        setSelectedEndDate(endDate);
        onDateChange(startDate, endDate)
    };
    const handleLastOneHour = (e) => {
        e.preventDefault();
        handleDateChange(new Date(new Date() - 3600000), new Date());
    };
    const handleLast30minutes = (e) => {
        e.preventDefault();
        handleDateChange(new Date(new Date() - 1800000), new Date());
    };
    const handleLast10minutes = (e) => {
        e.preventDefault();
        handleDateChange(new Date(new Date() - 600000), new Date());
    };
    const handleLast1minutes = (e) => {
        e.preventDefault();
        handleDateChange(new Date(new Date() - 60000), new Date());
    };
    return <header className={'header'}{...rest}>
        <img src={logo} alt={'logo'}/>
        <div className="date-container">
            <div className="buttons">
                <Label text="Date Range:" fontSize={16}/>
                <button onClick={handleLast1minutes}>
                    Last 1 Minutes
                </button>
                <button onClick={handleLast10minutes}>
                    Last 10 Minutes
                </button>
                <button onClick={handleLast30minutes}>
                    Last 30 Minutes
                </button>
                <button onClick={handleLastOneHour}>
                    Last 1 hour
                </button>
                <Picker onDateChange={handleDateChange}/>
            </div>
            <Label fontSize={14}>
                {`Selected: ${selectedStartDate.toLocaleDateString(window?.navigator?.language)}: 
                ${selectedStartDate.toLocaleTimeString(window?.navigator?.language)} - 
                ${selectedEndDate.toLocaleDateString(window?.navigator?.language)}: 
                ${selectedEndDate.toLocaleTimeString(window?.navigator?.language)}`}
            </Label>
            <Label fontSize={14}>
                Difference: {(selectedEndDate - selectedStartDate) / 1000 / 60}m
            </Label>
        </div>


    </header>
}