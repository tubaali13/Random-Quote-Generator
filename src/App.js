import React, {Component} from 'react';
import './App.css';
import QuoteDisplay from './QuoteDisplay';




class App extends Component {
  constructor(){
    super();
    this.state = {
      quotes: [],
      text: '',
      author: '',
      color: '#a269ce'
          }
    this.selector = this.selector.bind(this);
  }

   componentDidMount() {
            fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then((quotes) => {
              this.setState({
                quotes: quotes,
                text: quotes[0].text,
                author: quotes[0].author

              });
             
              console.log(quotes);
              })
        }
 randomQuote() {
    const randomNumber = Math.floor(Math.random() * this.state.quotes.length);
    return this.state.quotes[randomNumber];
    
  }
  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      text: generateRandomQuote.text,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(this.state.quotes);
    this.randomColor();
  };

  randomColor() {
    const bgColor = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    this.setState({
      color: bgColor
    })
  }
    

  render(){
  return (
    <div>
         <QuoteDisplay
         color = {this.state.color}
         handleClick = {this.handleClick} 
         text = {this.state.text}
         author = {this.state.author}/>

    </div>
  )
}
}

export default App;
