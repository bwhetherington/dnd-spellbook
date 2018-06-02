import React from "react";
import styled from "styled-components";
import { Glyphicon } from "react-bootstrap";
import SpellList from "./SpellList";
import SpellModal from "./SpellModal";
import SpellNav from "./SpellNav";
import spells from "../util/spells";
import { filtered } from "../util/list";

const filterText = (spells, text) => filtered(spells, spell => {
    console.log(text);
    if (text) {
        if (spell.name.contains(text)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
})

const Select = styled.select`
    margin-left: 10px;
    background: #c53023;
    color: white;
    border: 0px;
    padding: 5px;
    border-radius: 5px;
`;

const DisplayedSpell = (props) => props.spell
    ? <SpellModal show={props.show} onHide={props.onHide} spell={props.spell} />
    : <span />;

const Content = styled.div`
    width: 1000px;
    margin: auto;
    padding: 20px;
    margin-top: 70px;
    background: white;
`;

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            filterText: "",
            filterRitual: false,
            filterConcentration: false,
            filterClass: "",
            filterSchool:"",
            showSpellModal: false,
            selectedSpell: null
        };
        this.hideModal = this.hideModal.bind(this);
        this.selectSpell = this.selectSpell.bind(this);
        this.handleFilterTextChanged = this.handleFilterTextChanged.bind(this);
        this.handleFilterRitualChanged = this.handleFilterRitualChanged.bind(this);
        this.handleFilterConcentrationChanged = this.handleFilterConcentrationChanged.bind(this);
        this.handleFilterClassChanged = this.handleFilterClassChanged.bind(this);
        this.handleFilterSchoolChanged = this.handleFilterSchoolChanged.bind(this);
    }

    selectSpell(spell) {
        this.setState({ ...this.state, selectedSpell: spell, showSpellModal: true });
    }

    hideModal() {
        this.setState({ ...this.state, selectedSpell: null, showSpellModal: false });
    }

    handleFilterTextChanged(event) {
        this.setState({ ...this.state, filterText: event.target.value });
        console.log(this.state);
    }

    handleFilterRitualChanged(event) {
        this.setState({ ...this.state, filterRitual: !this.state.filterRitual });
    }

    handleFilterConcentrationChanged(event) {
        this.setState({ ...this.state, filterConcentration: !this.state.filterConcentration });
    }

    handleFilterClassChanged(event) {
        this.setState({ ...this.state, filterClass: event.target.value });
    }

    handleFilterSchoolChanged(event) {
        this.setState({ ...this.state, filterSchool: event.target.value });
    }

    /**
     * Renders the App.
     */
    render() {
        return (
            <span>
                <SpellNav
                    handleFilterTextChanged={this.handleFilterTextChanged}
                    handleFilterRitualChanged={this.handleFilterRitualChanged}
                    handleFilterConcentrationChanged={this.handleFilterConcentrationChanged}
                    handleFilterClassChanged={this.handleFilterClassChanged}
                    handleFilterSchoolChanged={this.handleFilterSchoolChanged}
                />
                <Content>
                    <SpellList
                        spells={spells}
                        onSpellClick={this.selectSpell}
                        filterText={this.state.filterText}
                        filterRitual={this.state.filterRitual}
                        filterConcentration={this.state.filterConcentration}
                        filterClass={this.state.filterClass}
                        filterSchool={this.state.filterSchool}
                    />
                </Content>
                <DisplayedSpell show={this.state.showSpellModal} onHide={this.hideModal} spell={this.state.selectedSpell} />
            </span>
        );
    }
}