import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";

const AdvancedModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header>
                hello wold!
            </Modal.Header>
            <Modal.Body>
                something Header
            </Modal.Body>
            
        </Modal>
    );
}

export default AdvancedModal;