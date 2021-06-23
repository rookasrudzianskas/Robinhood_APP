import React, {useEffect, useState} from 'react';
import "./styles/Stats.css";
import axios from "axios";
import StatsRow from "./StatsRow";
import {db} from "../firebase";

const Stats = () => {

    const [stockData, setStockData] = useState([]);
    const [myStocks, setMyStocks] = useState([]);

    const TOKEN = 'c39f152ad3ieobuuqko0';
    const BASE_URL = 'https://finnhub.io/api/v1/quote';



    const getMyStocks = () => {
        db.collection('myStocks').onSnapshot((snapshot) => {
            let promises = [];
            let tempData = [];
            // firebase stuff to get my stocks
            snapshot.docs.map((doc) => {
                // going per all the data
                promises.push(getStockData(doc.data().ticker)
                    .then(res => {
                        tempData.push({
                            id: doc.id,
                            data: doc.data(),
                            // coming from the api call
                            info: res.data,
                        })
                    })
                )})
            Promise.all(promises).then(()=>{
                setMyStocks(tempData);
            })
        })
    }

    const getStockData = (stock) => {
        return axios.get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`).catch((error) => {
            console.log("Error", error.message);
        })
    }

    useEffect(() => {
        // stocks list
        let tempStocksData = [];
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
        getMyStocks();

        let promises = [];

        stocksList.map((stock) => {
            // goes per each stock, and pushes it to the array
            promises.push(
                getStockData(stock).then((res) => {
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
                        {myStocks.map((stock) => (
                            <StatsRow key={stock.data.ticker} name={stock.data.ticker} openPrice={stock.info.o} shares={stock.data.shares} price={stock.info.c} />
                        ))}
                    </div>
                </div>

                <div className="stats__header stats__lists">
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
                                buyItNow={"Buy it now"}
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