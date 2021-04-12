import React from 'react';
import './App.css';
import Calculator from './Utils/calculator';
import CalculatorCell from './App/SharedComponents/CalculatorCell/CalculatorCell';

const App = () => {
  let [input, setInput] = React.useState()

  const onDigitClick = (value) => {
    setInput(value)
    console.log(value)
  }

  const cells = (row) => {
    const list = row.map((number) =>
      <CalculatorCell digit={number} key = {'Cell_' +number} onClick={() => onDigitClick(number)} />
      )
    return (
      <div className = 'CalculatorRow' >{list}</div>
    )
  }

  return (
    <div className="App">
      <div>Calculator</div>
      <input></input>
      <div className = 'Calculator'>
        {cells(['(', ')', '' , 'AC'])}
        {cells([7,8,9, '/'])}
        {cells([4,5,6, '*'])}
        {cells([1,2,3, '-'])}
        {cells([0,'.','=', '+'])}
      </div>
    </div>
  );
}

export default App;
