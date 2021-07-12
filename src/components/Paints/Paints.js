import React from 'react';
import usePaints from "../../hooks/usePaints";
import ChartCard from "../ChartCard/ChartCard";
import {checkTooltipLabelLength} from "../../utils";

function Paints({startDate, endDate, ...rest}) {
    const [state] = usePaints(startDate, endDate);
    return <ChartCard title={"Paints"} updatedAt={state?.paintsUpdated} data={{
        labels: state?.paints?.map(n => checkTooltipLabelLength(n?.name)),
        datasets: [
            {
                data: state?.paints?.map(n => n.startTime?.toFixed(2) ?? 0),
                label: 'Paints',
                backgroundColor: 'rgb(0, 255, 120)',
                borderColor: 'rgba(0, 0, 255, 0.2)',
            }
        ]
    }} {...rest} />
}

export default React.memo(Paints);