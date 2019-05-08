import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import SpellTag from './SpellTag';

import { formatLevelAndSchool, formatLevel, formatClasses } from '../util/text';

const Wrapper = props => <div className="modalWrapper">{props.children}</div>;
const LeftColumn = styled.div`
  float: left;
  text-align: center;
  width: 50%;
`;

const RightColumn = styled.div`
  float: left;
  text-align: center;
  width: 50%;
`;

const Row = styled.div`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const SpellTagHolder = styled.small`
  float: right;
`;

const Left = styled.div`
  float: left;
`;

const Right = styled.div`
  float: right;
`;

const Break = styled.div`
  height: 10px;
`;

const materialComponents = material =>
  material ? ` (${ReactHtmlParser(material)})` : '';

const HigherLevel = props =>
  props.higherLevel ? (
    <span>
      <b>At Higher Levels.</b> {ReactHtmlParser(props.higherLevel)}
    </span>
  ) : (
    <span />
  );

const renderSources = sources => {
  if (sources instanceof Array) {
    return sources.join(', ');
  } else {
    return sources;
  }
};

const SpellModal = props => {
  const spell = props.spell;
  console.log(spell);
  return (
    <Wrapper>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header>
          <Modal.Title>
            <span className="really-big">{spell.name}</span>
            <SpellTagHolder>
              <SpellTag
                ritual={spell.ritual}
                concentration={spell.concentration}
              />
            </SpellTagHolder>
            <div />
            <small>
              <i>{formatLevelAndSchool(spell.level, spell.school)}</i>
            </small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <LeftColumn>
              <strong>Casting Time</strong>
              <br />
              {ReactHtmlParser(spell.casting_time)}
            </LeftColumn>
            <RightColumn>
              <strong>Range</strong>
              <br />
              {ReactHtmlParser(spell.range)}
            </RightColumn>
          </Row>
          <br />
          <Row>
            <LeftColumn>
              <strong>Components</strong>
              <br />
              {ReactHtmlParser(spell.components)}
              {materialComponents(spell.material)}
            </LeftColumn>
            <RightColumn>
              <strong>Duration</strong>
              <br />
              {ReactHtmlParser(spell.duration)}
            </RightColumn>
          </Row>
          <hr />
          <div className="spellDesc">
            {ReactHtmlParser(spell.desc)}
            <HigherLevel higherLevel={spell.higher_level} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <LeftColumn style={{ 'text-align': 'left' }}>
              <strong>Available To</strong>
              <br />
              {formatClasses(spell.classes)}
            </LeftColumn>
            <RightColumn style={{ 'text-align': 'right' }}>
              <strong>Source</strong>
              <br />
              {renderSources(spell.sources)}
            </RightColumn>
          </Row>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  );
};

export default SpellModal;
