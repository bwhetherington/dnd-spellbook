import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import Page from "./components/Page";
import { sorted } from "./util/list";

import './styles/index.scss';

render(<Page><App /></Page>, document.getElementById("app"));