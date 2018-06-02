import React from "react";
import styled from "styled-components";
import { Label } from "react-bootstrap";

const RITUAL_TAG = "Ritual";
const RitualTag = (props) => props.ritual
    ? <span> <Label bsStyle="primary">{RITUAL_TAG}</Label></span>
    : <span />;

const CONCENTRATION_TAG = "Concentration";
const ConcentrationTag = (props) => props.concentration
    ? <span> <Label bsStyle="danger">{CONCENTRATION_TAG}</Label></span>
    : <span />;

const SpellTag = (props) => (
    <span>
        <RitualTag ritual={props.ritual} />
        <ConcentrationTag concentration={props.concentration} />
    </span>
);

export default SpellTag;