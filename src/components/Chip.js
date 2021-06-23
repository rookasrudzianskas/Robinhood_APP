import React from 'react';

const Chip = (props) => {
    return (
        <div className="chip">
            <div className="chip__avatar">
                <img src={props.image} width={10} height={10} alt=""/>
            </div>

            <div className="chip__label">
                <span>{props.label}</span>
            </div>
        </div>
    );
};

export default Chip;
