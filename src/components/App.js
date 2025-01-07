import React from "react";
import styled from "styled-components";
import { Glyphicon } from "react-bootstrap";
import SpellList from "./SpellList";
import SpellModal from "./SpellModal";
import SpellNav from "./SpellNav";
import AdvancedModal from "./AdvancedModal";
import { filtered } from "../util/list";

const filterText = (spells, text) =>
  filtered(spells, (spell) => {
    console.log(text);
    if (text) {
      if (spell.name.contains(text)) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  });

const DisplayedSpell = (props) =>
  props.spell ? (
    <SpellModal show={props.show} onHide={props.onHide} spell={props.spell} />
  ) : (
    <span />
  );

// const Content = styled.div`
//     width: 1000px;
//     margin: auto;
//     padding: 20px;
//     margin-top: 70px;
//     background: white;
// `;

const ContentInner = (props) => (
  <div className="contentInner">{props.children}</div>
);

const Content = (props) => (
  <div className="content">
    <ContentInner>{props.children}</ContentInner>
  </div>
);

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      filterText: "",
      filterRitual: false,
      filterConcentration: false,
      filterClass: "",
      filterSchool: "",
      showSpellModal: false,
      selectedSpell: null,
      showAdvancedModal: false,
      filterRegex: "",
    };

    // SpellList events
    this.hideModal = this.hideModal.bind(this);
    this.selectSpell = this.selectSpell.bind(this);

    // SpellNav events
    this.handleFilterTextChanged = this.handleFilterTextChanged.bind(this);
    this.handleFilterRitualChanged = this.handleFilterRitualChanged.bind(this);
    this.handleFilterConcentrationChanged =
      this.handleFilterConcentrationChanged.bind(this);
    this.handleFilterClassChanged = this.handleFilterClassChanged.bind(this);
    this.handleFilterSchoolChanged = this.handleFilterSchoolChanged.bind(this);

    // AdvancedModal events
    this.openAdvancedModal = this.openAdvancedModal.bind(this);
    this.hideAdvancedModal = this.hideAdvancedModal.bind(this);
    this.handleFilterRegexChanged = this.handleFilterRegexChanged.bind(this);
  }

  selectSpell(spell) {
    this.setState({
      ...this.state,
      selectedSpell: spell,
      showSpellModal: true,
    });
  }

  hideModal() {
    this.setState({
      ...this.state,
      selectedSpell: null,
      showSpellModal: false,
    });
  }

  handleFilterTextChanged(event) {
    this.setState({ ...this.state, filterText: event.target.value });
    console.log(this.state);
  }

  handleFilterRitualChanged(event) {
    this.setState({ ...this.state, filterRitual: !this.state.filterRitual });
  }

  handleFilterConcentrationChanged(event) {
    this.setState({
      ...this.state,
      filterConcentration: !this.state.filterConcentration,
    });
  }

  handleFilterClassChanged(event) {
    this.setState({ ...this.state, filterClass: event.target.value });
  }

  handleFilterSchoolChanged(event) {
    this.setState({ ...this.state, filterSchool: event.target.value });
  }

  openAdvancedModal() {
    this.setState({ ...this.state, showAdvancedModal: true });
  }

  hideAdvancedModal() {
    this.setState({ ...this.state, showAdvancedModal: false });
  }

  handleFilterRegexChanged(event) {
    this.setState({ ...this.state, filterRegex: event.target.value });
  }

  /**
   * Renders the App.
   */
  render() {
    return (
      <div className="slide-up-fade-in">
        <SpellNav
          handleFilterTextChanged={this.handleFilterTextChanged}
          handleFilterRitualChanged={this.handleFilterRitualChanged}
          handleFilterConcentrationChanged={
            this.handleFilterConcentrationChanged
          }
          handleFilterClassChanged={this.handleFilterClassChanged}
          handleFilterSchoolChanged={this.handleFilterSchoolChanged}
          handleAdvancedButtonClick={this.openAdvancedModal}
        />
        <Content>
          <SpellList
            spells={this.props.spellData.spells}
            onSpellClick={this.selectSpell}
            filterText={this.state.filterText}
            filterRitual={this.state.filterRitual}
            filterConcentration={this.state.filterConcentration}
            filterClass={this.state.filterClass}
            filterSchool={this.state.filterSchool}
            filterRegex={this.state.filterRegex}
          />
        </Content>
        <DisplayedSpell
          show={this.state.showSpellModal}
          onHide={this.hideModal}
          spell={this.state.selectedSpell}
        />
        <AdvancedModal
          show={this.state.showAdvancedModal}
          onHide={this.hideAdvancedModal}
          handleFilterRegexChanged={this.handleFilterRegexChanged}
        />
      </div>
    );
  }
}
