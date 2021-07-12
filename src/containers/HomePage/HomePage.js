import React from 'react';
import './homepage.css'
import Header from "../../components/Header/Header";
import TTFB from "../../components/TTFB/Ttfb";
import Resources from "../../components/Resources/Resources";
import Paints from "../../components/Paints/Paints";

function HomePage({...rest}) {
    const [dates, setDates] = React.useState({})
    const handleDateChange = (startDate, endDate) => {
        console.count('date change')
        setDates({startDate, endDate});
        //dispatch({type: 'click', startDate, endDate})
    };
    console.count('home')

    return <div className="homepage" {...rest}>
        <Header onDateChange={handleDateChange}/>
        <div className="charts">
            <TTFB key={'ttfb'} className="chart" startDate={dates?.startDate} endDate={dates?.endDate}/>
            <Resources key={'resources'} className="chart" startDate={dates?.startDate} endDate={dates?.endDate}/>
            <Paints key={'paints'} className="chart" startDate={dates?.startDate} endDate={dates?.endDate}/>
        </div>
    </div>
}

export default React.memo(HomePage)