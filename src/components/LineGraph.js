import React from 'react';
import "./styles/LineGraph.css";
import {Line} from 'react-chartjs-js';

const LineGraph = () => {
    return (
        <div className="lineGraph">
            <Line
                data={{
                    datasets: [
                        {
                            type:"line",
                            data: data
                        }
                    ]
                }}
                type="line"
            />
        </div>
    );
};

export default LineGraph;
