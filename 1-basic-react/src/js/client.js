import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
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

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
