import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
    render() {
        const Articles = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
        ].map((title, i) => <Article key={i} title={title}/> );

        const adText = [
            "Ad spot #ONE",
            "Ad spot #TWO",
            "Ad spot #THREE",
            "Ad spot #FOUR",
            "Ad spot #FIVE",
        ];

        const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
        console.log("featured");
        return (
            <div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="well text-center">
                            {randomAd}
                        </div>
                    </div>
                </div>

                <div class="row">{Articles}</div>
            </div>
        );
    }
}