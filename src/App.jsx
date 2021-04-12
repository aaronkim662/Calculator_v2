import React from 'react';
import './App.css';
import Calculator from './Utils/calculator';
import CalculatorCell from './App/SharedComponents/CalculatorCell/CalculatorCell';

const App = () => {
  const [input, setInput] = React.useState({
    input: ''
  })

  const [clearInput, setClearInput] = React.useState({
    reset: false
  })

  const onDigitClick = async (value) => {
    if(clearInput.reset){
      setInput({input: value})
      setClearInput({reset: false})
    }
    if(value === '='){
      calculate(input.input)
    }else if(value === 'AC'){
      setInput({input: ''})
    }else if(!clearInput.reset){
      setInput(prevState => ({
        input: prevState.input + value,
      }))
    }
  }

  const calculate = (calcInput) => {
    setClearInput({reset:true})
    let data = Calculator(calcInput);
    setInput({input: data});
    return data
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      calculate(input.input)
    }
  }

  const handleChange = (event) => {
    event.preventDefault();
    setInput(
      {input: event.target.value}
    )
  }

  const cells = (row) => {
    const list = row.map((number) =>
      <CalculatorCell digit={number} key = {'Cell_' +number} onDigitClick={onDigitClick} />
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
