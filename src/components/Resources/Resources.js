import React from 'react';
import ChartCard from "../ChartCard/ChartCard";
import {checkTooltipLabelLength} from "../../utils";

function Resources({resources, resourcesUpdated, ...rest}) {
    return <ChartCard title={"Network Timings"} updatedAt={resourcesUpdated} data={{
        labels: resources?.map(n => `${n.initiatorType}  \n${checkTooltipLabelLength(n?.name)}\n${new Date(n.createdAt).toLocaleString()}`),
        datasets: [
            {
                data: resources?.map(n => (n?.responseEnd - n?.responseStart)?.toFixed(2) ?? 0),
                label: 'Resources',
                backgroundColor: 'rgb(0, 0, 132)',
                borderColor: 'rgba(0, 0, 132, 0.2)',
            }
        ]
    }} {...rest} />
}

export default React.memo(Resources)