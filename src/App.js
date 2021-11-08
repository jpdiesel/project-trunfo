import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

// essa parte foi feita graças ao link
// https://stackoverflow.com/questions/49850537/reactjs-pass-same-props-to-multiple-components

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick=""
        />
        <Card
          { ...this.state }
        />
      </>
    );
  }
}

export default App;
