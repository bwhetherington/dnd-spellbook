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

const AdvancedModal = (props) => {
    return (
        <div className="modalWrapper">
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header>
                    <Modal.Title>
                        Advanced
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Search descriptions <SearchBar placeholder="Regex search..." onChange={props.handleFilterRegexChanged} />
                    <br />
                    Components <ComponentButtons />
                    <br />
                    test <Triplebox />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AdvancedModal;