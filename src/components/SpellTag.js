import React from "react";
import styled from "styled-components";
import { Label } from "react-bootstrap";

const TagWrapperInternal = styled.span`
    margin-right: 5px;
`;

const TagWrapperExternal = styled.span`
    margin-left: 10px;
`;

const RITUAL_TAG = "Ritual";
const RitualTag = (props) => props.ritual
    ? <TagWrapperInternal><Label bsStyle="primary">{RITUAL_TAG}</Label></TagWrapperInternal>
    : <span />;

const CONCENTRATION_TAG = "Concentration";
const ConcentrationTag = (props) => props.concentration
    ? <TagWrapperInternal><Label bsStyle="danger">{CONCENTRATION_TAG}</Label></TagWrapperInternal>
    : <span />;

const SpellTag = (props) => (
    <TagWrapperExternal>
        <RitualTag ritual={props.ritual} />
        <ConcentrationTag concentration={props.concentration} />
    </TagWrapperExternal>
);

export default SpellTag;