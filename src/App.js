import React, { Component } from 'react';
import './App.css';
import DisplayQuote from './DisplayQuote'
import GenerateQuote from './GenerateQuote'


const sampleQuote = {
  quote: 'Shoplifting is a victimless crime, like punching someone in the dark.',
  character : 'Nelson Muntz',
  image : 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185'
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      quotes:  sampleQuote,
    };
  };

    getQuote(){
      fetch ("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then(response  =>  response.json())
        .then(data => {
          this.setState({
            quotes: data[0],
          });
        });
    };

  render() {
    return (
      <div>
        <GenerateQuote selectQuote = { () => this.getQuote()} />
        <DisplayQuote  quotes = {this.state.quotes} />
      </div>
      );
  };
  };


export default App;
