import React from "react";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";

import SpellModal from "./SpellModal";

const NavbarStyled = styled(Navbar) `
    border-radius: 0px;
    border: 0;
    background: rgb(64, 64, 64);
    text-align: center;
    margin: 0px;
`;

const SPELL = `
{ 
    "name":"Control Weather",
    "desc":"<p>You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early.</p><p>When you cast the spell, you change the current weather conditions, which are determined by the DM based on the climate and season. You can change precipitation, temperature, and wind. It takes 1d4 x 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal.</p><p>When you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction.</p><h4>PRECIPITATION</h4><table><tr><th>Stage</th><th>Condition</th></tr><tr><td>1</td><td>Clear</td></tr><tr><td>2</td><td>Light clouds</td></tr><tr><td>3</td><td>Overcast or ground fog</td></tr><tr><td>4</td><td>Rain, hail, or snow</td></tr><tr><td>5</td><td>Torrential rain, driving hail, or blizzard</td></tr></table><h4>TEMPERATURE</h4><table><tr><th>Stage</th><th>Condition</th></tr><tr><td>1</td><td>Unbearable heat</td></tr><tr><td>2</td><td>Hot</td></tr><tr><td>3</td><td>Warm</td></tr><tr><td>4</td><td>Cool</td></tr><tr><td>5</td><td>Cold</td></tr><tr><td>6</td><td>Arctic cold</td></tr></table><h4>WIND</h4><table><tr><th>Stage</th><th>Condition</th></tr><tr><td>1</td><td>Calm</td></tr><tr><td>2</td><td>Moderate wind</td></tr><tr><td>3</td><td>Strong wind</td></tr><tr><td>4</td><td>Gale</td></tr><tr><td>5</td><td>Storm</td></tr></table>",
    "page":"phb 228",
    "range":"Self",
    "components":"V, S, M",
    "material":"burning incense and bits of earth and wood mixed in water.",
    "ritual":false,
    "duration":"Up to 8 hours",
    "concentration":true,
    "casting_time":"10 minutes",
    "level":8,
    "school":"transmutation",
    "class":"Cleric, Druid, Wizard"
  }`;

const obj = JSON.parse(SPELL);

export default class App extends React.Component {
    /**
     * Renders the App.
     */
    render() {
        return (
            <div>
                <NavbarStyled />
                <h1>Hello world!</h1>
                <p>This is the D&D spellbook.</p>
                <SpellModal show={true} onHide={() => { }} spell={obj} />
            </div>
        );
    }
}