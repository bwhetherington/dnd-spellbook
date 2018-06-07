import React from "react";
import styled from "styled-components";
import { Modal, ButtonGroup, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import Triplebox from "./Triplebox";

const ComponentButtons = (props) => {
    return (
        <ButtonGroup>
            <Button> V </Button>
            <Button> S </Button>
            <Button> M </Button>
        </ButtonGroup>
    );
}

class AdvancedModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterRegex: ""
        };

        this.updateFilter = this.updateFilter.bind(this);
    }

    updateFilter(props) {
        this.props.handleFilterRegexChanged(props);
        this.setState({filterRegex: props.target.value});
    };

    render() {
        return (
        <div className="modalWrapper">
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header>
                    <Modal.Title>
                        Advanced
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Search descriptions <SearchBar
                        placeholder="Regex search..."
                        onChange={this.updateFilter}
                        initialText={this.state.filterRegex}
                    />
                    <br />
                    Components <ComponentButtons />
                    <br />
                    test <Triplebox />
                </Modal.Body>
            </Modal>
        </div>);
    }
}

export default AdvancedModal;