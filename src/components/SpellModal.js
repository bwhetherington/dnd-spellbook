import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import { SpellTags } from "./App";

import { formatLevelAndSchool, formatLevel, formatClasses } from "../util/text";

const LeftColumn = styled.div`
    float: left;
    text-align: center;
    width: 50%;
`;

const RightColumn = styled.div`
    float: left;
    text-align: center;
    width: 50%;
`;

const Row = styled.div`
    &:after {
        content: "";
        display: table;
        clear: both;
    }
`;

const materialComponents = (material) => material
    ? ` (${material})`
    : "";

const HigherLevel = (props) => props.higherLevel
    ? <span><b><i>At Higher Levels.</i></b> {ReactHtmlParser(props.higherLevel)}</span>
    : <span />;

// const RITUAL_TAG = "Ritual";
// const RitualTag = (props) => props.ritual
//     ? <span> <Label bsStyle="primary">{RITUAL_TAG}</Label></span>
//     : <span />;

// const CONCENTRATION_TAG = "Concentration";
// const ConcentrationTag = (props) => props.concentration
//     ? <span> <Label bsStyle="danger">{CONCENTRATION_TAG}</Label></span>
//     : <span />;

const TagHolderModal = styled.span`
    float: right;
`;

// const SpellTags = (props) => (
//     <TagHolder>
//         <RitualTag ritual={props.ritual} />
//         <ConcentrationTag concentration={props.concentration} />
//     </TagHolder>
// );

const Left = styled.div`
    float: left;
`;

const Right = styled.div`
    float: right;
`;

const SpellModal = (props) => {
    const spell = props.spell;
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header>
                <Modal.Title>
                    <span className="really-big">{spell.name}</span><small><SpellTags ritual={spell.ritual} concentration={spell.concentration} TagHolder={TagHolderModal} /></small>
                    <br />
                    <small><i>{formatLevelAndSchool(spell.level, spell.school)}</i></small>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <LeftColumn>
                        <strong>Casting Time</strong>
                        <br />
                        {spell.casting_time}
                        <br />
                        <br />
                        <strong>Components</strong>
                        <br />
                        {spell.components}{materialComponents(spell.material)}
                    </LeftColumn>
                    <RightColumn>
                        <strong>Range</strong>
                        <br />
                        {spell.range}
                        <br />
                        <br />
                        <strong>Duration</strong>
                        <br />
                        {spell.duration}
                    </RightColumn>
                </Row>
                <hr />
                <div className="spellDesc">
                    {ReactHtmlParser(spell.desc)}
                    <HigherLevel higherLevel={spell.higher_level} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Row>
                    <LeftColumn style={{ "text-align": "left" }}>
                        <strong>Available To</strong><br />{formatClasses(spell.classes)}
                    </LeftColumn>
                    <RightColumn style={{ "text-align": "right" }}>
                        <strong>Source</strong><br />{spell.page}
                    </RightColumn>
                </Row>
            </Modal.Footer>
        </Modal>
    );
};

export default SpellModal;