import React from "react";
import { render } from "react-dom";

const App = (props) => (
    <div>
        <h1>Hello world!</h1>
        <p>This is the D&D spellbook.</p>
    </div>
);

render(<App />, document.getElementById("app"));