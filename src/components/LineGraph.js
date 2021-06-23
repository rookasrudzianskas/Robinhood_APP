import React from 'react';
import "./styles/LineGraph.css";
import { Line } from "react-chartjs-2";

const LineGraph = () => {

    const data =
        [{
        x: 10,
        y: 20
    }, {
        x: 50,
        y: 10
    }, {
        x: 20,
        y: 4
    }];

    return (
        <div>
            <Line
                data={{
                    datasets: [
                        {
                            type:"line",
                            data: data,
                            backgroundColor: "black",
                            borderColor: "#5AC53B",
                            borderWidth: 2,
                            pointBorderColor: 'rgba(0, 0, 0, 0)',
                            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                            pointHoverBackgroundColor: '#5AC53B',
                            pointHoverBorderColor: '#000000',
                            pointHoverBorderWidth: 4,
                            pointHoverRadius: 6,
                        }
                    ]
                }}

                options={{
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        mode: "index",
                        intersect: false,
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                display: false
                            }
                        }]
                    }
                }}
            />
        </div>
    );
};

export default LineGraph;
