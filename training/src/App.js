import React, { Component } from 'react';
import KeyPadComponent from './components/KeyPadComponent';
import ResultComponent from './components/ResultComponent';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      result: ''
    }
  }
  onClick = (button) => {
    if(button === '=') {
      this.calculate()
    }
    else if(button ==='C'){
      this.reset()
    }
    else if(button === 'CE'){
      this.backspace()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };
  calculate = () => {
    var checkResult = '';
    if(this.state.result.includes('--')){
      checkResult = this.state.result.replace('--', '+')
      console.log('----------Check Result', checkResult);
    }
    else {
      checkResult = this.state.result
      console.log('Else checkResult', checkResult);
    }
    try {
      this.setState({
        result: (eval(checkResult) || '') + ''
      })
      console.log(this.state);
    } catch(e) {
      this.setState({
        result: 'error'
      })
    }
  };
   reset = () => {
     this.setState({
       result: ''
     })
     console.log('-------reset state', this.state.result);
   };
   backspace = () => {
     this.setState({
     result: this.state.result.substring(0, -1)
    })
    console.log('******* in Back space', this.state);
   };
   render () {
     return(
       <div>
         <div className='calculator-body'>
         <h1>Simple Calculator</h1>
         <ResultComponent result={this.state.result} />
         <KeyPadComponent onClick={this.onClick} />
         </div>
       </div>
     );
   }

}

export default App;
