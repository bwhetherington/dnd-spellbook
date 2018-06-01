import React from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import SpellData from "./SpellData";
import { SpellTags } from "./App";
import { sorted } from "../util/list";

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

const SpellRow = (props) => (
    <tr>
        <td style={{ "text-align": "center" }}>{props.spell.level}</td>
        <td style={{ "text-align": "left" }}>{props.spell.name}<small><SpellTags ritual={props.spell.ritual} concentration={props.spell.concentration} TagHolder={TagHolderList} /></small></td>
    </tr>
);

const levelCMP = (spellA, spellB) => spellA.level - spellB.level === 0
? spellA.name.localeCompare(spellB.name)
: spellA.level - spellB.level;

export default class SpellList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            filterOptions: createFilterOptions({}),
            orderBy: Ordering.LEVEL,
            spells: SpellData
        };

        this.renderSpells = this.renderSpells.bind(this);
    }

    renderSpells() {
        return sorted(this.state.spells, levelCMP).map(spell => <SpellRow spell={spell} />);
        // return this.state.spells.map(spell => <SpellRow spell={spell} />);
    }

    render() {
        return (
            <Table striped hover>
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