import React from "react";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import Checkbox from "./Checkbox";

const SearchBar = styled.input`
    background: #c53023;
    color: white;
    border: 0px;
    padding: 5px;
    border-radius: 5px;
`;

// const Select = styled.select`
//     margin-left: 10px;
//     background: #c53023;
//     color: white;
//     border: 0px;
//     padding: 5px;
//     border-radius: 5px;
// `;

const NavbarLabel = styled.span`
    color: white;
    font-size: 150%;
    font-weight: bold;
    margin-right: 20px;
`;

const SpellNavbar = styled(Navbar) `
    border-radius: 0px;
    border: 0;
    background: #db4437;
    padding: 10px;
    text-align: left;
    margin: 0px;
    color: white;
    border-bottom: 3px solid #c53023;
`;

const StyledCheckbox = styled(Checkbox) `
    border-radius: 0px;
    background-color: black;

    &:checked {
        background-color: blue;
    }
`;

const SCheckbox = (props) => (
    // <label class="container">One
    //     <input type="checkbox" checked="checked" />
    //     <span class="checkmark"></span>
    // </label>
    <span inline className="container">
        {props.label}
        <input type="checkbox" checked={props.checked} />
        <span className="checkmark" />
    </span>
);

const SpellNav = (props) => {
    return (
        <SpellNavbar fixedTop>
            <NavbarLabel>D&D Spellbook</NavbarLabel>
            <SearchBar type="text" onChange={props.handleFilterTextChanged} />
            <SearchBar type="text" onChange={props.handleFilterClassChanged} />
            <SearchBar type="text" onChange={props.handleFilterSchoolChanged} />
            <br />
            <Checkbox label="Rituals Only" onChange={props.handleFilterRitualChanged} />
            <Checkbox label="Exclude Concentration" onChange={props.handleFilterConcentrationChanged} />
            {/* <StyledCheckbox inline onChange={props.handleFilterRitualChanged} >Rituals only</StyledCheckbox>
            <StyledCheckbox inline onChange={props.handleFilterConcentrationChanged} >Exclude concentration</StyledCheckbox> */}
        </SpellNavbar>
    );
}

export default SpellNav;