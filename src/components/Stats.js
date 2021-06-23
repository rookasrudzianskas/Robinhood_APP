import React, {useEffect, useState} from 'react';
import "./styles/Stats.css";
import axios from "axios";

const Stats = () => {

    const [stockData, setStockData] = useState([]);
    const TOKEN = 'c39f152ad3ieobuuqko0';
    const BASE_URL = 'https://finnhub.io/api/v1/quote';

    const getStockData = (stock) => {
        return axios.get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`).catch((error) => {
            console.log("Error", error.message);
        })
    }

    useEffect(() => {
        // stocks list
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

        let promises = [];

        stocksList.map((stock) => {
            promises.push(
                getStockData(stock).then((res) => {
                    testData.push({
                        name: stock,
                        ...res.data
                    });
                })
            )
        });

    }, []);


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