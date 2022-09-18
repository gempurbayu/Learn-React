import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
    render() {
        return(
            <div>
                <h2>List component</h2>
                <h2>props children : {this.props.children}</h2>
                <h3>value property / props : {this.props.name}</h3>
                <h3>value props book : {this.props.book}</h3>
                <ListItem/>
            </div>
        )
    }
}

export default List