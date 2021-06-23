import React from 'react';
import "./styles/NewsFeed.css";

const NewsFeed = () => {
    return (
        <div className="newsFeed">
            <div className="newsFeed__container">
                <div className="newsFeed__chartSection">
                    <div className="newsFeed__portfolio">
                        <h1>$114,3432</h1>
                        <p>+$44.34 (+0.04%) Today</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsFeed;
