import React from "react";
import { Alert, Row, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

import { readText, getSavedUrl } from "../util/io";
import Page from "./Page";
import App from "./App";

const State = {
    UNSET: 0,
    WILL_LOAD: 1,
    LOADING: 2,
    LOADED: 3
};

export default class Loader extends React.Component {
    constructor(props, context) {
        super(props, context);

        const savedUrl = getSavedUrl();
        const readyState = (savedUrl !== null && savedUrl !== undefined)
            ? State.WILL_LOAD
            : State.UNSET;

        this.state = {
            savedUrl: savedUrl,
            enteredText: "",
            readyState: readyState,
            loadedData: null,
            errorMessage: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputSave = this.handleInputSave.bind(this);
        this.renderUnset = this.renderUnset.bind(this);
        this.renderLoading = this.renderLoading.bind(this);
        this.renderLoaded = this.renderLoaded.bind(this);
        this.renderError = this.renderError.bind(this);
    }

    loadUrl(url) {
        readText(url, (data, err) => {
            let parsed;
            try {
                parsed = JSON.parse(data);
            } catch (ex) {
                // Failed to parse data.
                this.setState({
                    ...this.state,
                    loadedData: null,
                    errorMessage: `Could not parse data from ${url}.`,
                    readyState: State.UNSET
                });
                return;
            }
            window.localStorage.setItem("savedUrl", url);
            this.setState({
                ...this.state,
                loadedData: parsed,
                readyState: State.LOADED,
                errorMessage: null
            });
        }, (err) => {
            // Failed to read file.
            this.setState({
                ...this.state,
                loadedData: null,
                errorMessage: `File could not be read from ${url}.`,
                readyState: State.UNSET
            });
            return;
        });
    }

    handleInputChange(e) {
        this.setState({
            ...this.state,
            enteredText: e.target.value
        });
    }

    handleInputSave() {
        this.setState({
            ...this.state,
            savedUrl: this.state.enteredText,
            readyState: State.LOADING
        });
        this.loadUrl(this.state.enteredText);
    }

    renderError() {
        if (this.state.errorMessage) {
            return (
                <Alert bsStyle="danger">
                    {this.state.errorMessage}
                </Alert>
            );
        } else {
            return (
                <span />
            );
        }
    }

    renderUnset() {
        return (
            <Page>
                <div className="sourceEntry">
                    <form>
                        <FormGroup controlId="sourceEntry">
                            <Row>
                                <ControlLabel>Source URL</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.enteredText}
                                    placeholder="Source URL..."
                                    onChange={this.handleInputChange}
                                />
                            </Row>
                            <Button bsStyle="primary" onClick={this.handleInputSave}>Load</Button>
                        </FormGroup>
                    </form>
                    {this.renderError()}
                </div>
            </Page>
        );
    }

    renderLoading() {
        return (
            <Page>
                {/* <h1>Loading...</h1> */}
                <div className="page">
                    <div className="centerVertical">
                        <div className="centerVerticalInner">
                            <div className="sk-folding-cube">
                                <div className="sk-cube1 sk-cube"></div>
                                <div className="sk-cube2 sk-cube"></div>
                                <div className="sk-cube4 sk-cube"></div>
                                <div className="sk-cube3 sk-cube"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }

    renderLoaded() {
        return (
            <Page>
                <App spellData={this.state.loadedData} />
            </Page>
        );
    }

    render() {
        switch (this.state.readyState) {
            case State.UNSET:
                return this.renderUnset();
            case State.WILL_LOAD:
                return this.renderLoading();
            case State.LOADING:
                return this.renderLoading();
            case State.LOADED:
                return this.renderLoaded();
            // return this.renderLoading();
        }
    }

    componentDidMount() {
        if (this.state.readyState === State.WILL_LOAD) {
            this.loadUrl(this.state.savedUrl);
        }
    }
}