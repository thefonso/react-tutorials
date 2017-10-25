import React from "react";

import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component {
    // state gets handles in three ways
    // state    (will use this minimally)
    // props    (will use this most often)
    // context  (advanced feature)
    // here we have an example of "state"

    // KEY IMPORTANT FEATURE:
    // react only changes the nodes with state change
    // see this working by...
    // Chrome hit "ESC"
    // check on "paint flashing"
    constructor (){
        super();
        this.state = {name: "fonso"};
    }
    render() {
        setTimeout(() => {
            this.setState({name: "Bob"});
        }, 1000);
        return(
            <div>
                {this.state.name}
                <Header />
                <Footer />
            </div>
        );
    }
}