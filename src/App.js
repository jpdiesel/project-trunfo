import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

const highestStat = 91;
const totalSum = 211;

// essa parte foi feita graças ao link
// https://stackoverflow.com/questions/49850537/reactjs-pass-same-props-to-multiple-components

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.disabledBttn = this.disabledBttn.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  disabledBttn = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const notEmptyInput = [cardName, cardDescription, cardImage]
      .every((card) => card !== '');
    const validNum = [cardAttr1, cardAttr2, cardAttr3]
      .every((stat) => stat >= 0 && stat < highestStat);
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) < totalSum;
    if (notEmptyInput && validNum && sum) {
      return false;
    } return true;
  }

  saveCard = () => {
    const { cardTrunfo } = this.state;
    this.setState(
      cardTrunfo
        ? {
          cardName: '',
          cardDescription: '',
          cardImage: '',
          cardAttr1: 0,
          cardAttr2: 0,
          cardAttr3: 0,
          cardRare: 'normal',
          cardTrunfo: false,
          hasTrunfo: true,
        }
        : {
          cardName: '',
          cardDescription: '',
          cardImage: '',
          cardAttr1: 0,
          cardAttr2: 0,
          cardAttr3: 0,
          cardRare: 'normal',
          cardTrunfo: false,
          hasTrunfo: false,
        },
    );
  }

  render() {
    return (
      <>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.disabledBttn() }
          onSaveButtonClick={ this.saveCard }
        />
        <Card
          { ...this.state }
        />
        <CardList
          { ...this.state }
        />
      </>
    );
  }
}

export default App;
