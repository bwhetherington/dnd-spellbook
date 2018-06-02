import React from "react";
import styled from "styled-components";
import { Table, Glyphicon} from "react-bootstrap";
import { sorted } from "../util/list";
import { formatJustLevel, capitalize } from "../util/text";
import { levelColor } from "../util/color";
import SpellModal from "./SpellModal";
import SpellTag from "./SpellTag";

const DirectionIndicatorInternal = styled.span`
    font-size: 80%;
    padding-left: 5px;
    padding-right: 5px;
    color: rgb(192, 192, 192);
`;


const DirectionIndicator = (props) => {
    if (props.show) {
        if (props.direction === Direction.DOWN) {
            return <DirectionIndicatorInternal>▲</DirectionIndicatorInternal>;
        } else {
            return <DirectionIndicatorInternal>▼</DirectionIndicatorInternal>;
        }
    } else {
        return <span />;
    }
};

const Ordering = {
    NAME: 0,
    LEVEL: 1
};

const Direction = {
    UP: false,
    DOWN: true
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

const SpellTagHolder = styled.small``;

const LevelCol = styled.td`
    text-align: center;
    color: ${props => levelColor(props.level)};
`;

const NameCol = styled.td`
    text-align: left;
`;

const SourceHolder = styled.small`
    float: right;
    color: rgb(190, 190, 190);
`;

const SpellRow = (props) => (
    <tr onClick={() => props.onSpellClick(props.spell)} >
        <LevelCol level={props.spell.level}>{capitalize(formatJustLevel(props.spell.level))}</LevelCol>
        <NameCol>{props.spell.name}<SpellTagHolder><SpellTag ritual={props.spell.ritual} concentration={props.spell.concentration} /></SpellTagHolder><SourceHolder>{props.spell.page}</SourceHolder></NameCol>
    </tr>
);

export default class SpellList extends React.Component {
    constructor(props, context) {
        super(props, context);

        const renderedSpells = this.props.spells.map(spell => ({
            name: spell.name.toLowerCase(),
            spell: spell,
            row: <SpellRow key={spell.name} onSpellClick={this.props.onSpellClick} spell={spell} />
        }));

        this.state = {
            filterOptions: createFilterOptions({}),
            orderBy: Ordering.LEVEL,
            orderDirection: Direction.DOWN,
            spells: this.props.spells,
            selectedSpell: null,
            showSpellModal: false,
            renderedSpells: renderedSpells
        };


        // this.renderSpells = this.renderSpells.bind(this);
        this.selectSpell = this.selectSpell.bind(this);
        this.handleLevelClick = this.handleLevelClick.bind(this);
        this.handleNameClick = this.handleNameClick.bind(this);
    }

    renderSpells() {
        return sorted(this.state.renderedSpells, (a, b) => {
            let cmp;
            switch (this.state.orderBy) {
                case Ordering.LEVEL:
                    cmp = a.spell.level - b.spell.level;
                    if (cmp !== 0) {
                        break;
                    } // Amazingly enough, this fallthrough is actually intended, and works.
                case Ordering.NAME:
                    cmp = a.name.localeCompare(b.name);
                    break;
            }
            switch (this.state.orderDirection) {
                case Direction.UP:
                    cmp *= -1;
                    break;
                case Direction.DOWN:
                    // Do nothing
                    break;
                default:
                    console.log("Invalid order direction: " + this.state.orderDirection);
            }

            return cmp;
        })
            .filter(spell => spell.name.indexOf(this.props.filterText.toLowerCase()) !== -1)
            .filter(spell => this.props.filterRitual ? spell.spell.ritual : true)
            .filter(spell => this.props.filterConcentration ? !spell.spell.concentration : true)
            .map(spell => spell.row);
    }

    handleClick(ordering) {
        let state;
        if (this.state.orderBy === ordering) {
            state = {
                ...this.state,
                orderDirection: !this.state.orderDirection
            };
        } else {
            state = {
                ...this.state,
                orderBy: ordering,
                orderDirection: Direction.DOWN
            };
        }
        this.setState(state);
    }

    handleNameClick() {
        this.handleClick(Ordering.NAME);
    }

    handleLevelClick() {
        this.handleClick(Ordering.LEVEL);
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
                        <th onClick={this.handleLevelClick} style={{ "text-align": "left" }}>
                            Level  <DirectionIndicator
                                show={this.state.orderBy === Ordering.LEVEL}
                                direction={this.state.orderDirection}
                            />
                        </th>
                        <th onClick={this.handleNameClick}>
                            Name  <DirectionIndicator
                                show={this.state.orderBy === Ordering.NAME}
                                direction={this.state.orderDirection}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderSpells()}
                </tbody>
            </Table>
        );
    }
}