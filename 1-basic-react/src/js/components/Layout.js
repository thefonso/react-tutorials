import React from "react";

import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component {
    // state gets handles in three ways
    // state    (will use this minimally)
    //          "state" gets used ONLY if change is specific to THIS component
    //          else use "props"
    // props    (will use this most often)
    // context  (advanced feature)
    // here we have an example of "state"

    // KEY IMPORTANT FEATURE:
    // react only changes the nodes with state change
    // see this working by...
    // Chrome hit "ESC"
    // check on "paint flashing"

    constructor(){
        super();
        this.state = {
            title: "Welcome",
        };
    }

    render() {
        setTimeout(() => {
            this.setState({title: "Welcome Fonso"})
        }, 2000);

        return(
            <div>
                <Header title={this.state.title} />
                <Header title={"Other Title"} />
                <Footer />
            </div>
        );
    }
}