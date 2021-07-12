import React from 'react';
import logo from "../../assets/icons/logo.png";
import Label from "../Label/Label";
import './header.css'

export default function Header({onDateChange, ...rest}) {
    const handleLast30Seconds = (e) => {
        e.preventDefault();
        onDateChange(new Date(new Date() - 600000), new Date());
    };
    const handleLastOneHour = (e) => {
        e.preventDefault();
        onDateChange(new Date(new Date() - 3600000), new Date());
    };
    return <header className={'header'}{...rest}>
        <img src={logo} alt={'logo'}/>
        <Label text="Hosgeldiniz" fontSize={36}/>
        <Label text="Tarih Araligi seciniz" fontSize={16}/>
        <button onClick={handleLastOneHour}>
            Last 1 Hour
        </button>
    </header>
}