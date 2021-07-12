import React from 'react';
import ChartCard from "../ChartCard/ChartCard";
import {checkTooltipLabelLength} from "../../utils";

function Paints({paints, paintsUpdated, ...rest}) {
    return <ChartCard title={"Paints"} updatedAt={paintsUpdated} data={{
        labels: paints?.map(n => checkTooltipLabelLength(n?.name)),
        datasets: [
            {
                data: paints?.map(n => n.startTime?.toFixed(2) ?? 0),
                label: 'Paints',
                backgroundColor: 'rgb(0, 255, 120)',
                borderColor: 'rgba(0, 0, 255, 0.2)',
            }
        ]
    }} {...rest} />
}

export default React.memo(Paints);