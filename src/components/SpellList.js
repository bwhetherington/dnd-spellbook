import React from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import { SpellTags } from "./App";
import { sorted } from "../util/list";
import { formatJustLevel, capitalize } from "../util/text";
import { levelColor } from "../util/color";
import SpellModal from "./SpellModal";

const Ordering = {
    NAME: 0,
    LEVEL: 1
};

const createFilterOptions = ({
    text = "",
    classes = [],
    schools = [],
    ritual = false,
    concentration = false
}) => ({
    text: text,
    classes: classes,
    schools: schools,
    ritual: ritual,
    concentration: concentration
});

const TagHolderList = styled.span``;

const LevelCol = styled.td`
    text-align: center;
    color: ${props => levelColor(props.level)}
`;

const NameCol = styled.td`
    text-align: left;
`;

const SpellRow = (props) => (
    <tr onClick={() => props.onSpellClick(props.spell)} >
        <LevelCol level={props.spell.level}>{capitalize(formatJustLevel(props.spell.level))}</LevelCol>
        <NameCol>{props.spell.name}<small><SpellTags ritual={props.spell.ritual} concentration={props.spell.concentration} TagHolder={TagHolderList} /></small></NameCol>
    </tr>
);

// Deprecated
const levelCMP = (spellA, spellB) => spellA.level - spellB.level === 0
    ? spellA.name.localeCompare(spellB.name)
    : spellA.level - spellB.level;

const levelCMPRow = (rowA, rowB) => rowA.spell.level - rowB.spell.level === 0
    ? rowA.spell.name.localeCompare(rowB.spell.name)
    : rowA.spell.level - rowB.spell.level;

export default class SpellList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            filterOptions: createFilterOptions({}),
            orderBy: Ordering.LEVEL,
            spells: this.props.spells,
            selectedSpell: null,
            showSpellModal: false,
        };

        
        this.renderSpells = this.renderSpells.bind(this);
        this.selectSpell = this.selectSpell.bind(this);
    }
    
    renderSpells() {
        // return sorted(this.props.spellRows, levelCMPRow);
        return sorted(this.props.spells, levelCMP).map(spell => <SpellRow key={spell.name} onSpellClick={this.props.onSpellClick} spell={spell} />);
        // return this.state.spells.map(spell => <SpellRow spell={spell} />);
    }

    selectSpell(spell) {
        this.setState({ selectedSpell: spell, showSpellModal: true, ...this.state });
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                <col width="80" />
                <thead>
                    <tr>
                        <th style={{ "text-align": "center" }}>Level</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderSpells()}
                </tbody>
            </Table>
        );
    }
}