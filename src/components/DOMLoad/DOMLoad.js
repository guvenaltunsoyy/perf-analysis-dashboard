import React from 'react';
import ChartCard from "../ChartCard/ChartCard";
import {checkTooltipLabelLength} from "../../utils";

function DOMLoad({domEvents, domEventsUpdated, ...rest}) {
    return <ChartCard title={"DOM Load"} updatedAt={domEventsUpdated} data={{
        labels: domEvents?.map(n => `${n.initiatorType} ${n.type ? `\n${n.type}` : ''} \n${checkTooltipLabelLength(n?.name)}\n${new Date(n.createdAt).toLocaleString()}`),
        datasets: [
            {
                data: domEvents?.map(n => n.ttfb?.toFixed(2) ?? 0),
                label: 'Dom Load',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            }
        ]
    }} {...rest} />
}

export default React.memo(DOMLoad);