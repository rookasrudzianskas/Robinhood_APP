import React, {useEffect, useState} from 'react';
import "./styles/LineGraph.css";
import { Line } from "react-chartjs-2";

const LineGraph = () => {

    const [ graphData, setGraphData ] = useState([]);

    // test data
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

    const createMocData = () => {
        // we are creating new data
        let data = [];
        let value = 50;
        // loop per all the days
        for(let i = 0; i < 366; i++){
            let date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(i);
            value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
            // pushing the graph data to the data array
            data.push({x: date, y: value});
        }
        setGraphData(data)
    }

    useEffect(() => {
        createMocData();
    }, []);

    return (
        <div className="linegraph">
            <Line
                data={{
                    datasets: [
                        {
                            type: 'line',
                            backgroundColor: "black",
                            borderColor: "#5AC53B",
                            borderWidth: 2,
                            pointBorderColor: 'rgba(0, 0, 0, 0)',
                            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                            pointHoverBackgroundColor: '#5AC53B',
                            pointHoverBorderColor: '#000000',
                            pointHoverBorderWidth: 4,
                            pointHoverRadius: 6,
                            data: graphData,
                        },
                    ],
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
                        xAxes: [
                            {
                                type: "time",
                                time: {
                                    format: "MM/DD/YY",
                                    tooltipFormat: "ll",
                                },
                                ticks: {
                                    display: false
                                }
                            },
                        ],
                        yAxes: [
                            {
                                gridLines: {
                                    display: false,
                                },
                                ticks: {
                                    display: false,
                                },
                            },
                        ],
                    }
                }}
            />
        </div>
    );
};

export default LineGraph;
