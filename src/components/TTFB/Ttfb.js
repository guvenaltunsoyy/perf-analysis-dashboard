import React from 'react';
import ChartCard from "../ChartCard/ChartCard";
import {checkTooltipLabelLength} from "../../utils";

function Ttfb({ttfb, ttfbUpdated, ...rest}) {
    return <ChartCard title={"TTFB"} updatedAt={ttfbUpdated} data={{
        labels: ttfb?.map(n => `${n.initiatorType} ${n.type ? `\n${n.type}` : ''} \n${checkTooltipLabelLength(n?.name)}\n${new Date(n.createdAt).toLocaleString()}`),
        datasets: [
            {
                data: ttfb?.map(n => n.ttfb?.toFixed(2) ?? 0),
                label: 'TTFB',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            }
        ]
    }} {...rest} />
}

export default React.memo(Ttfb);