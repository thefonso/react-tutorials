import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
        // works like ruby
        const name = "fonso";
        return(
            <div>
                <h1>It's Working</h1>
                <h1>It's {name}</h1>
                <h1>It's {3 * 2}</h1>
                <h1>It's {(function () {return 3; })()}</h1>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
