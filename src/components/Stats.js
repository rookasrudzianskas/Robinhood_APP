import React, {useEffect, useState} from 'react';
import "./styles/Stats.css";
import axios from "axios";
import StatsRow from "./StatsRow";

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
        let tempStocksData = [];
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

        let promises = [];

        stocksList.map((stock) => {
            // goes per each stock, and pushes it to the array
            promises.push(
                getStockData(stock).then((res) => {
                    console.log(res);
                    tempStocksData.push({
                        name: stock,
                        ...res.data
                    });
                })
            )
        });

        // here we are waiting for all the promises to come up
        // we have to wait to get each single stock, after that push to the state

        Promise.all(promises).then(()=>{
            // here we put everything to the one array, and get back to the state
            setStockData(tempStocksData);
            console.log(tempStocksData);
        })

    }, []);


    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>

                <div className="stats__content">
                    <div className="stats__rows">
                        {/*{stockData.map((stock) => (*/}
                        {/*    <StatsRow key={stock.data.ticker} name={stock.data.ticker} openPrice={stock.data.o} volume={stock.data.share} price={stock.info.c} />*/}
                        {/*))}*/}
                    </div>
                </div>

                <div className="stats__header">
                    <p>Lists</p>
                </div>

                <div className="stats__content">
                    <div className="stats__rows">
                        {/* for each stock we create another component statsRow*/}
                        {stockData.map((stock) => (
                            <StatsRow
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Stats;


// c39f152ad3ieobuuqko0 finnhub