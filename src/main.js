import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import Page from "./components/Page";
import { sorted } from "./util/list";

render(<Page><App /></Page>, document.getElementById("app"));