import React, {useState} from 'react';
import './homepage.css'
import Header from "../../components/Header/Header";
import TTFB from "../../components/TTFB/Ttfb";
import Resources from "../../components/Resources/Resources";
import Paints from "../../components/Paints/Paints";
import {getDomEvents, getPaints, getResources, getTTFB, getWindowEvents} from "../../apis";
import DOMLoad from "../../components/DOMLoad/DOMLoad";
import WindowLoad from "../../components/WindowLoad/WindowLoad";

function HomePage({...rest}) {
    const [ttfb, setTtfb] = useState({});
    const [paints, setPaints] = useState({});
    const [resources, setResources] = useState({});
    const [domEvents, setDomEvents] = useState({});
    const [windowEvents, setWindowEvents] = useState({});
    const handleDateChange = (startDate, endDate) => {
        getTTFB(startDate, endDate).then(res => setTtfb({ttfb: res, ttfbUpdated: new Date()}))
        getResources(startDate, endDate).then(res => setResources({resources: res, resourcesUpdated: new Date()}))
        getPaints(startDate, endDate).then(res => setPaints({paints: res, paintsUpdated: new Date()}))
        getDomEvents(startDate, endDate).then(res => setDomEvents({domEvents: res, domEventsUpdated: new Date()}))
        getWindowEvents(startDate, endDate).then(res => setWindowEvents({
            windowEvents: res,
            windowEventsUpdated: new Date()
        }))
    };

    return <div className="homepage" {...rest}>
        <Header onDateChange={handleDateChange}/>
        <div className="charts">
            <TTFB key={'ttfb'} className="chart" {...ttfb} />
            <Resources key={'resources'} className="chart" {...resources}/>
            <Paints key={'paints'} className="chart" {...paints}/>
            <DOMLoad key={'domLoad'} className="chart" {...domEvents}/>
            <WindowLoad key={'windowLoad'} className="chart" {...windowEvents}/>
        </div>
    </div>
}

export default React.memo(HomePage)