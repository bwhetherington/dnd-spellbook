import React from "react";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import SpellList from "./SpellList";

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
    "name": "Animate Objects",
    "desc": "<p>Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points.</p><p>As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.</p><h4>ANIMATED OBJECT STATISTICS</h4><table><tr><th>Size</th><th>HP</th><th>AC</th><th>Attack</th><th>Str</th><th>Dex</th></tr><tr><td>Tiny</td><td>20</td><td>18</td><td>+8 to hit, 1d4 + 4 damage</td><td>4</td><td>18</td></tr><tr><td>Small</td><td>25</td><td>16</td><td>+6 to hit, 1d8 + 2 damage</td><td>8</td><td>14</td></tr><tr><td>Medium</td><td>40</td><td>13</td><td>+5 to hit, 2d6 + 1 damage</td><td>10</td><td>12</td></tr><tr><td>Large</td><td>50</td><td>10</td><td>+6 to hit, 2d10 + 2 damage</td><td>14</td><td>10</td></tr><tr><td>Huge</td><td>80</td><td>10</td><td>+8 to hit, 2d12 + 4 damage</td><td>18</td><td>6</td></tr></table><p>An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.</p><p>If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form.</p>",
    "higher_level": "<p>If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th.</p>",
    "page": "PHB 213",
    "range": "120 feet",
    "components": "V, S",
    "ritual": false,
    "duration": "Up to 1 minute",
    "concentration": true,
    "casting_time": "1 action",
    "level": 5,
    "school": "transmutation",
    "classes": [
        "bards",
        "sorcerers",
        "wizards"
    ]
}`;

const obj = JSON.parse(SPELL);
const DisplayedSpell = (props) => props.show
    ? <SpellModal show={props.show} onHide={props.onHide} spell={props.spell} />
    : <span />;

const Content = styled.div`
    width: 1000px;
    margin: auto;
`;

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showSpellModal: false,
            selectedSpell: null
        };
        this.hideModal = this.hideModal.bind(this);
    }

    hideModal() {
        this.setState({ showSpellModal: false, ...this.state });
    }

    /**
     * Renders the App.
     */
    render() {
        return (
            <div>
                <NavbarStyled />
                <Content>
                    <h1>Hello world!</h1>
                    <p>This is the D&D spellbook.</p>
                    <SpellList />
                </Content>
                <DisplayedSpell show={this.state.showSpellModal} onHide={() => { }} spell={this.state.selectedSpell} />
            </div>
        );
    }
}