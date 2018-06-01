import React from "react";
import { Table } from "react-bootstrap";
import SpellData from "./SpellData";

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

const SpellRow = (props) => (
    <tr>
        <td>{props.spell.level}</td>
        <td>{props.spell.name}</td>
    </tr>
);

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
        return this.state.spells.map(spell => <SpellRow spell={spell} />);
    }

    render() {
        return (
            <Table striped hover>
                <col width="130" />
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderSpells()};
                </tbody>
            </Table>
        );
    }
}