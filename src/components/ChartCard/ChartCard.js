import React from 'react';
import Label from "../Label/Label";
import LineChart from "../charts/LineChart";
import './chartCard.css'

function ChartCard({title, updatedAt, data, ...rest}) {
    return <div  {...rest}>
        <div className={"chartCardTitle"}>
            <Label text={title}/>
            <Label
                text={`updated: ${updatedAt?.toLocaleTimeString(window?.navigator?.language)} - ${data?.datasets[0]?.data?.length} records`}
                color={'var(--gray)'} fontSize={12}/>
        </div>
        <LineChart data={data}/>

    </div>
}

export default React.memo(ChartCard)