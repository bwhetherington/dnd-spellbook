import React from "react";
import styled from "styled-components";
import { Navbar, Button } from "react-bootstrap";
import Checkbox from "./Checkbox";
import SearchBar from "./SearchBar";

const Logo = styled.span`
    
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

const SpellNavbar = (props) => (
    <Navbar className="spellNavbar" fixedTop>
        {props.children}
    </Navbar>
);
// const SpellNavbar = styled(Navbar) `
//     border-radius: 0px;
//     border: 0;
//     background: #db4437;
//     padding: 10px;
//     text-align: left;
//     margin: 0px;
//     color: white;
//     ${'' /* border-bottom: 3px solid #c53023; */}
//     width: 200%;
//     margin-left: -50%;
//     margin-right: 50%;
//     box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
// `;


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

const SButton = styled(Button) `
    float: right;
`

const AdvancedButton = (props) => {
    return (
        <SButton onClick={props.handleAdvancedButtonClick} >
            Advanced
        </SButton>
    );
}

const SpellNav = (props) => {
    return (
        <SpellNavbar fixedTop>
            <NavbarLabel>Spellbook</NavbarLabel>
            <SearchBar placeholder="Spell name..." onChange={props.handleFilterTextChanged} />
            <SearchBar placeholder="Classes..." onChange={props.handleFilterClassChanged} />
            <SearchBar placeholder="Schools..." onChange={props.handleFilterSchoolChanged} />
            {/* <AdvancedButton handleAdvancedButtonClick={props.handleAdvancedButtonClick} /> */}
            <br />
            <Checkbox label="Require Ritual" onChange={props.handleFilterRitualChanged} />
            <Checkbox label="Exclude Concentration" onChange={props.handleFilterConcentrationChanged} />
            {/* <StyledCheckbox inline onChange={props.handleFilterRitualChanged} >Rituals only</StyledCheckbox>
            <StyledCheckbox inline onChange={props.handleFilterConcentrationChanged} >Exclude concentration</StyledCheckbox> */}
        </SpellNavbar>
    );
}

export default SpellNav;