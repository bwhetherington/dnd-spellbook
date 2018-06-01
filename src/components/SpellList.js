import React from "react";
import { Table } from "react-bootstrap";

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

export default class SpellList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            filterOptions: createFilterOptions({}),
            orderBy: Ordering.LEVEL
        };
    }

    render() {
        return (
            <Table>
            </Table>
        );
    }
}