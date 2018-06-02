import React from 'react';
import styled from "styled-components";
import RSelect from "react-select";

const style = {
    // "background": "#c53023",
    // "border": "0px",
    // "border-radius": "0px",
    // "color": "white"
};

const rowStyle = {
    // "background": "#c53023",
    // "border": "0px",
    // "border-radius": "0px",
    // "color": "white"
};

class Select extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: []
        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(value) {
        this.setState({ value });
        this.props.onChange(value);
    }

    render() {
        const options = this.props.options
            .map(option => ({
                ...option,
                style: rowStyle
            }));
        return (
            <RSelect
                closeOnSelect={true}
                disabled={false}
                multi
                onChange={this.handleSelectChange}
                options={options}
                placeholder="Select classes..."
                removeSelected={true}
                rtl={false}
                simpleValue
                value={this.state.value}
                style={style}
                menuStyle={style}
            />
        );
    }
};

export default Select;
