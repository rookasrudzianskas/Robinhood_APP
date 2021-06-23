import React, {useState} from 'react';
import "./styles/NewsFeed.css";
import LineGraph from "./LineGraph";
import TimeLine from "./TimeLine";
import {Avatar, Chip} from "@material-ui/core";



const NewsFeed = () => {


    const [popularTopics, setTopics] = useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "China",
        "Pharma",
    ]);

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
                        {popularTopics.map((index, topic) => (
                            // loop per each topic
                            // this goes to the api to get the avatar
                            <Chip
                                // key={index}
                                className="topic__badge"
                                variant="outlined"
                                label={topic}
                                avatar={<Avatar
                                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                                />}
                            />
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default NewsFeed;
