import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="cardName">
          <input data-testid="name-input" type="text" id="cardName" />
        </label>
        <label htmlFor="cardDescription">
          <input data-testid="description-input" type="textarea" id="cardDescription" />
        </label>
        <label htmlFor="cardStat1">
          <input data-testid="attr1-input" type="number" id="cardStat1" />
        </label>
        <label htmlFor="cardStat2">
          <input data-testid="attr2-input" type="number" id="cardStat2" />
        </label>
        <label htmlFor="cardStat3">
          <input data-testid="attr3-input" type="number" id="cardStat3" />
        </label>
        <label htmlFor="cardImage">
          <input data-testid="image-input" type="text" id="cardImage" />
        </label>
        <label htmlFor="cardRarity">
          <select data-testid="rare-input" id="cardRarity">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="superCard">
          <input data-testid="trunfo-input" type="checkbox" id="superCard" />
          Super Trunfo
        </label>
        <button data-testid="save-button" type="button">Salvar</button>
      </>
    );
  }
}

export default Form;
