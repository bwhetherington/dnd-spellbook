import React from "react";
import styled from "styled-components";
import { Glyphicon, Navbar } from "react-bootstrap";
import SpellList from "./SpellList";
import SpellModal from "./SpellModal";
import SpellData from "./SpellData";
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

const SearchBar = styled.input`
    background: #c53023;
    color: white;
    border: 0px;
    padding: 5px;
    border-radius: 5px;
`;

const Select = styled.select`
    margin-left: 10px;
    background: #c53023;
    color: white;
    border: 0px;
    padding: 5px;
    border-radius: 5px;
`;

const NavbarLabel = styled.span`
    color: white;
    font-size: 150%;
    font-weight: bold;
    margin-right: 20px;
`;

const NavbarStyled = styled(Navbar) `
    border-radius: 0px;
    border: 0;
    background: #db4437;
    padding: 10px;
    text-align: left;
    margin: 0px;
    color: white;
    border-bottom: 3px solid #c53023;
`;

const DisplayedSpell = (props) => props.spell
    ? <SpellModal show={props.show} onHide={props.onHide} spell={props.spell} />
    : <span />;

const Content = styled.div`
    width: 1000px;
    margin: auto;
    padding: 20px;
    margin-top: 50px;
    background: white;
`;

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            filterText: "",
            showSpellModal: false,
            selectedSpell: null
        };
        this.hideModal = this.hideModal.bind(this);
        this.selectSpell = this.selectSpell.bind(this);
        this.handleFilterTextChanged = this.handleFilterTextChanged.bind(this);
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

    /**
     * Renders the App.
     */
    render() {
        return (
            <span>
                <NavbarStyled fixedTop>
                    <NavbarLabel>D&D Spellbook</NavbarLabel>
                    <SearchBar type="text" onChange={this.handleFilterTextChanged} />
                </NavbarStyled>
                <Content>
                    {/* we should make the spell names all lowercase, and capitalize them only once for the row */}
                    <SpellList spells={SpellData} onSpellClick={this.selectSpell} filterText={this.state.filterText} />
                </Content>
                <DisplayedSpell show={this.state.showSpellModal} onHide={this.hideModal} spell={this.state.selectedSpell} />
            </span>
        );
    }
}