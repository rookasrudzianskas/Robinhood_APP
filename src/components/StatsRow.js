import React from 'react';
import "./styles/StatsRow.css";

const StatsRow = (props) => {
    return (
        <div className="row">
            <div className="row__intro">
                <h1>{props.name}</h1>
                <p>{props.shares && (props.shares) + " shares"}</p>
            </div>
            <div className="row__chart">
                <img src="https://raw.githubusercontent.com/CleverProgrammers/robinhood-clone/69f8244e276928c04fffbd3324ee21c6c82d28e6/src/stock.svg" height={16}/>
            </div>
            <div className="row__numbers">
                <p className="row__price">$200</p>
                <p className="row__percentage"> +200%</p>
            </div>
        </div>
    );
};

export default StatsRow;

// https://raw.githubusercontent.com/CleverProgrammers/robinhood-clone/69f8244e276928c04fffbd3324ee21c6c82d28e6/src/stock.svg

// https://raw.githubusercontent.com/CleverProgrammers/robinhood-clone/69f8244e276928c04fffbd3324ee21c6c82d28e6/src/stock2.svg

// negative 👇

// https://raw.githubusercontent.com/CleverProgrammers/robinhood-clone/69f8244e276928c04fffbd3324ee21c6c82d28e6/src/negStock.svg