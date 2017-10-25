import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
    render() {
        const {query} = this.props.location;
        const {date, filter} = query;
        const {article} = this.props.params;

        const Articles = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Fake Article",
            "Partial Article",
            "American Article",
            "Mexican Article",
        ].map((title, i) => <Article key={i} title={title}/> );

        return (
            <div>
                <h1>Archives</h1>
                articles: ({article}), date: {date}, filter: {filter}
                <div class="row">{Articles}</div>
            </div>
        );
    }
}