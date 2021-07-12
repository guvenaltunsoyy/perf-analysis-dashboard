import React from 'react';
import useResources from "../../hooks/useResources";
import ChartCard from "../ChartCard/ChartCard";
import {checkTooltipLabelLength} from "../../utils";

function Resources({startDate, endDate, ...rest}) {
    const [state] = useResources(startDate, endDate);
    return <ChartCard title={"Network Timings"} updatedAt={state?.resourcesUpdated} data={{
        labels: state?.resources?.map(n => `${n.initiatorType}  \n${checkTooltipLabelLength(n?.name)}\n${new Date(n.createdAt).toLocaleString()}`),
        datasets: [
            {
                data: state?.resources?.map(n => (n?.responseEnd - n?.responseStart)?.toFixed(2) ?? 0),
                label: 'Resources',
                backgroundColor: 'rgb(0, 0, 132)',
                borderColor: 'rgba(0, 0, 132, 0.2)',
            }
        ]
    }} {...rest} />
}

export default React.memo(Resources)