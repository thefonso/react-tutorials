import React from "react";

export default class Layout extends React.Component {
    // example of invoking constructor methods
    constructor(){
        super();
        this.name = "fonso"
    }

    render() {
        return(
            <h1>It's {this.name}!</h1>
        );
    }
}