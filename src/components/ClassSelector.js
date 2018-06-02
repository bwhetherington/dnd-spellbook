import React from "react";
import { capitalize } from "../util/text";

const StyledButton = styled.button`

`;

class ClassButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            ...this.state,
            selected: !this.state.selected
        });
        this.props.onChange(this.state.selected);
    }

    render() {
        const name = capitalize(this.props.dndClass.name);
        return (
            <StyledButton onClick={this.toggle} type="button">{name}</StyledButton>
        );
    }
}

class ClassSelector extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedClasses: []
        };
    }

    handleChange(dndClass, selected) {
        if (selected && this.state.selectedClasses.indexOf(dndClass) !== -1) {
            this.setState({
                ...this.state,
                selectedClasses: []
                    .concat(this.state.selectedClasses)
                    .concat(dndClass)
            });
        }
    }
}

const ClassSelector = (props) => {
    return (
        <div>
            {props.classes.map(dndClass => (
                <ClassButton dndClass={dndClass} />
            ))}
        </div>
    );
}