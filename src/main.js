import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { sorted } from "./util/list";
import Page from "./components/Page";
import Loader from "./components/Loader";

import './styles/index.scss';

render(<Loader />, document.getElementById("app"));