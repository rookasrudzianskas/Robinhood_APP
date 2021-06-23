import React from 'react';
import "./styles/StatsRow.css";
import {db} from "../firebase";

const StatsRow = (props) => {

    const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;

    const buyStock = () => {
        db.collection('myStocks').where("ticker", "==", props.name).get().then((querySnapshot) => {
            // this checks if there is such in the firebase
            if(!querySnapshot.empty) {

                querySnapshot.forEach(function (doc) {
                    console.log(doc.id, " => ", doc.data);

                    // update the record here

                    db.collection('myStocks').doc(doc.id).update({
                        shares: doc.data().shares += 1,
                    })

                });
            } else {

                // add a new record to the database
                console.log("Not available");
            }
        })
    }


    return (
        <div className="row" onClick={buyStock}>
            <div className="row__intro">
                <h1>{props.name}</h1>
                <p>{props.shares && (props.shares) + " shares"}</p>
                <p>{props.buyItNow}</p>
            </div>
            <div className="row__chart">
                <img src="https://raw.githubusercontent.com/CleverProgrammers/robinhood-clone/69f8244e276928c04fffbd3324ee21c6c82d28e6/src/stock.svg" height={16}/>
            </div>
            <div className="row__numbers">
                <p className="row__price">{props.price}</p>
                <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
            </div>
        </div>
    );
};

export default StatsRow;

// https://raw.githubusercontent.com/CleverProgrammers/robinhood-clone/69f8244e276928c04fffbd3324ee21c6c82d28e6/src/stock.svg

// https://raw.githubusercontent.com/CleverProgrammers/robinhood-clone/69f8244e276928c04fffbd3324ee21c6c82d28e6/src/stock2.svg

// negative 👇

// https://raw.githubusercontent.com/CleverProgrammers/robinhood-clone/69f8244e276928c04fffbd3324ee21c6c82d28e6/src/negStock.svg