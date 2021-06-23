import React, {useState} from 'react';
import "./styles/Stats.css";

const Stats = () => {

    const [stockData, setStockData] = useState([]);


    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>

                <div className="stats__content">
                    <div className="stats__rows">

                    </div>
                </div>

                <div className="stats__header">
                    <p>Lists</p>
                </div>

                <div className="stats__content">
                    <div className="stats__rows">

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Stats;


// c39f152ad3ieobuuqko0 finnhub