import React, { Component } from 'react';
class ResultComponent extends Component {
    render() {
        console.log('ResultComponent props', this.props);
        let {result} = this.props;
        console.log('REsult value', result)
        return(
            <div className='result'>
            <p>{result}</p>
            </div>
        )
    }
  }
  export default ResultComponent;