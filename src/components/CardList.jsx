import React from 'react';
import PropTypes from 'prop-types';

export default class CardList extends React.Component {
  render() {
    const {
      cardList,
    } = this.props;
    return (
      <>
        {cardList.map((card, index) => (
          <li key={ index }>
            <p>{card.cardNam}</p>
            <img src={ card.cardImg } alt={ card.cardNam } />
            <p>{ card.cardDesc }</p>
            <p>{ card.cardStts1 }</p>
            <p>{ card.cardStts2 }</p>
            <p>{ card.cardStts3 }</p>
            <p>{ card.cardRarity }</p>
            {card.cardTrun ? <p>Super Trunfo</p> : null}
          </li>))}
      </>
    );
  }
}

CardList.propTypes = {
  cardComp: PropTypes.object,
}.isRequired;
