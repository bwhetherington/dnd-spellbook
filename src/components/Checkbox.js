import React from "react";

class Checkbox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            checked: this.props.checked | false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        console.log("Toggle?");
        this.setState({ ...this.state, checked: !this.state.checked });
        this.props.onChange(this.state.checked);
    }

    render() {
        return (
            <span className="cbContainer">
                <label>{this.props.label}</label>
                <input type="checkbox" checked={this.state.checked} />
                <span className="checkmark" onClick={this.toggle} />
            </span>
        );
    }
}

export default Checkbox;