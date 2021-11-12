import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <>
        <label htmlFor="cardName">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>
        <label htmlFor="cardStat1">
          Primeiro Status
          <input
            data-testid="attr1-input"
            type="number"
            id="cardStat1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
          />
        </label>
        <label htmlFor="cardStat2">
          Segundo Status
          <input
            data-testid="attr2-input"
            type="number"
            id="cardStat2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
          />
        </label>
        <label htmlFor="cardStat3">
          Terceiro Status
          <input
            data-testid="attr3-input"
            type="number"
            id="cardStat3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
          />
        </label>
        <label htmlFor="cardImage">
          <input
            data-testid="image-input"
            type="text"
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>
        <label htmlFor="cardRarity">
          Raridade
          <select
            data-testid="rare-input"
            id="cardRarity"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        {hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <label htmlFor="superCard">
              <input
                data-testid="trunfo-input"
                type="checkbox"
                id="superCard"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                name="cardTrunfo"
              />
              Super Trunfo
            </label>)}
        {// o requisito acima foi feito com base no código do Victor Baun no GitHub. Eu já havia implementedo minha função, porém o ESLINT estava dando um erro
        // que eu não consegui resolver sozinho e nem com a thread do Slack, então resolvi ir atrás de alguém que tinha feito um código similar
        // para poder comparar e resolver o problema
        }
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
  cardTrunfo: propTypes.bool,
  hasTrunfo: propTypes.bool,
  isSaveButtonDisabled: propTypes.bool,
  onInputChange: propTypes.func,
  onSaveButtonClick: propTypes.func,
}.isRequired;

export default Form;
