import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

// essa parte foi feita graças ao link
// https://stackoverflow.com/questions/49850537/reactjs-pass-same-props-to-multiple-components

class App extends React.Component {
  render() {
    const cardProps = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    return (
      <>
        <Form
          { ...cardProps }
          onInputChange=""
          onSaveButtonClick=""
        />
        <Card
          { ...cardProps }
        />
      </>
    );
  }
}

export default App;
