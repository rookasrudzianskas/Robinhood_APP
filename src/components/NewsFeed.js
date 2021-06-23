import React from 'react';
import "./styles/NewsFeed.css";
import LineGraph from "./LineGraph";
import TimeLine from "./TimeLine";

const NewsFeed = () => {
    return (
        <div className="newsFeed">
            <div className="newsFeed__container">
                <div className="newsFeed__chartSection">
                    <div className="newsFeed__portfolio">
                        <h1>$114,3432</h1>
                        <p>+$44.34 (+0.04%) Today</p>
                    </div>

                    <div className="newsFeed__chart">
                        <LineGraph />
                        <TimeLine />
                    </div>
                </div>

                <div className="newsFeed__buying__section">
                    <h2>Buying Power</h2>
                    <h2> $4.11</h2>
                </div>

                <div className="newsFeed__market__section">
                    <div className="newsFeed__market__box">
                        <p>Markets Closed</p>
                        <h1>Happy Thanksgiving</h1>
                    </div>
                </div>

                <div className="newsFeed__popularLists__section">
                    <div className="newsFeed__popularLists__intro">
                        <h1>Popular lists</h1>
                        <p>Show More</p>
                    </div>
                    <div className="newsFeed_popularLists_badges">
                        {/*{popularTopics.map((topic) => (*/}
                        {/*    <Chip*/}
                        {/*        className="topic__badge"*/}
                        {/*        variant="outlined"*/}
                        {/*        label={topic}*/}
                        {/*        avatar={<Avatar*/}
                        {/*            src={`https://avatars.dicebear.com/api/human/${topic}.svg`}*/}
                        {/*        />}*/}
                        {/*    />*/}
                        {/*))}*/}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default NewsFeed;
