import React from "react";

const State = {
    INDETERMINATE: 0,
    UNCHECKED: 1,
    CHECKED: 2
};

class Triplebox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            checked: State.INDETERMINATE // todo: make settable on initialization
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ ...this.state, checked: (this.state.checked === State.CHECKED ? State.INDETERMINATE : (this.state.checked === State.INDETERMINATE ? State.UNCHECKED : State.CHECKED)) });
        // this.props.onChange(this.state.checked);
        console.log("Triple Toggle?" + this.state.checked);
    }

    render() {
        return (
            <span className="cbContainer">
                <label>{this.props.label}</label>
                {/* <input type="checkbox" checked={this.state.checked} /> */}
                <span className="checkmark" tabIndex="0" onClick={this.toggle} />
            </span>
        );
    }
}

export default Triplebox;