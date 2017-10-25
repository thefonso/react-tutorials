import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    // example of invoking class methods 
    getVal(){
        return "fonso";
    }

    render() {
        return(
                <h1>It's {this.getVal()}!</h1>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
