import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
    render() {
        return(
            <div>
                <h2>List component</h2>
                <ListItem/>
            </div>
        )
    }
}

export default List