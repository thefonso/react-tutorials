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

    render() {
        const title = "Welcome Alfonso!"; //creating prop on line 26. value gets passed to Header.js

        return(
            <div>
                <Header title={title} />
                <Footer />
            </div>
        );
    }
}