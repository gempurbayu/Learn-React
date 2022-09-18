import React from "react";
import propTypes from "prop-types";

class Button extends React.Component {

    change = () => {
        alert("OK")
    }
    
    render() {
        return(
            <div>
                <button onClick={this.change}>{this.props.color}</button>
            </div>
        )
    }
}

//untuk check props, memberi warning
Button.propTypes = {
    color : propTypes.string.isRequired
}

Button.defaultProps = {
    color : "hijau"
}

export default Button;