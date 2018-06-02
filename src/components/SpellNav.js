import React from "react";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import Checkbox from "./Checkbox";

const Logo = styled.span`
    

`;

const SearchBar = styled.input`
    background: #c53023;
    color: white;
    border: 0px;
    padding: 5px;
    border-radius: 5px;
    margin-right: 10px;

    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #ea9088;
        opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #ea9088;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
        color: #ea9088;
    }
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
    font-size: 165%;
    font-weight: bold;
    margin-right: 20px;
    font-family: "palatino linotype", palatino, serif;
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
            <NavbarLabel>Spellbook</NavbarLabel>
            <SearchBar type="text" placeholder="Spell name..." onChange={props.handleFilterTextChanged} />
            <SearchBar type="text" placeholder="Classes..." onChange={props.handleFilterClassChanged} />
            <SearchBar type="text" placeholder="Schools..." onChange={props.handleFilterSchoolChanged} />
            <br />
            <Checkbox label="Rituals Only" onChange={props.handleFilterRitualChanged} />
            <Checkbox label="Exclude Concentration" onChange={props.handleFilterConcentrationChanged} />
            {/* <StyledCheckbox inline onChange={props.handleFilterRitualChanged} >Rituals only</StyledCheckbox>
            <StyledCheckbox inline onChange={props.handleFilterConcentrationChanged} >Exclude concentration</StyledCheckbox> */}
        </SpellNavbar>
    );
}

export default SpellNav;