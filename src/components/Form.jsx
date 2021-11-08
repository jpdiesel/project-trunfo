import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     onSaveButtonClick: false,
  //   };
  // }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    // const { onSaveButtonClick } = this.state;
    return (
      <>
        <label htmlFor="cardName">
          <input
            data-testid="name-input"
            type="text"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDescription">
          <input
            data-testid="description-input"
            type="textarea"
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardStat1">
          <input
            data-testid="attr1-input"
            type="number"
            id="cardStat1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardStat2">
          <input
            data-testid="attr2-input"
            type="number"
            id="cardStat2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardStat3">
          <input
            data-testid="attr3-input"
            type="number"
            id="cardStat3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardImage">
          <input
            data-testid="image-input"
            type="text"
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardRarity">
          <select
            data-testid="rare-input"
            id="cardRarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="superCard">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="superCard"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trunfo
        </label>
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string,
  cardDescription: propTypes.string,
  cardAttr1: propTypes.string,
  cardAttr2: propTypes.string,
  cardAttr3: propTypes.string,
  cardImage: propTypes.string,
  cardRare: propTypes.string,
  cardTrunfo: propTypes.boolean,
  hasTrunfo: propTypes.boolean,
  isSaveButtonDisabled: propTypes.boolean,
  onInputChange: propTypes.func,
  onSaveButtonClick: propTypes.func,
}.isRequired;

export default Form;
