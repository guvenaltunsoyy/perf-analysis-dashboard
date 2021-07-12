import React from 'react';
import {Line} from "react-chartjs-2";
import './lineChart.css'

const options = {
    responsive: true,
    scales: {
        x: {
            ticks: {
                display: false
            }
        },
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            padding: 10,
            intersect: false,
            borderWidth: 1,
            borderColor: '#eee',
            boxShadow: '0 1px 2px 0 rgba(63, 63, 68, 0.15), 0 0 0 1px rgba(63, 63, 68, 0.05);',
            backgroundColor: 'white',
            bodyColor: '#16325c',
            bodyFont: {
                size: 12,
                weight: 500
            },
            titleColor: '#77909c',
            titleFont: {
                weight: 'bold',
            },
            callbacks: {
                title: (d) => {
                    return d[0].label;
                },
                label: (tooltipItem, d) => {
                    return `${tooltipItem.dataset?.data[tooltipItem.dataIndex]} ms`;
                },
            },
        },
    },
    animations: {
        tension: {
            duration: 1500,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: false
        }
    },

};

function LineChart({data, title}) {
    return <div className="lineChart"><Line data={data} options={options}/></div>
}

export default React.memo(LineChart)