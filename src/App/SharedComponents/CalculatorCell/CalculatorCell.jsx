import React from 'react';
import './CalculatorCell.scss'

const CalculatorCell = (props) => {
  const [digit] = React.useState({
    digit: props.digit.toString()
  });

  const setClasses = (value) => {
    const numbers = '0123456789';
    let classes = 'CalculatorCell'
    if(numbers.includes(value)){
      classes += ' CellNumbers'
    }
    if(value === '(' || value === ')' || value === " " || value === 'AC' || value === '*' || value === '/' || value === '-' || value === '+'){
      classes += ' CellUpperLevel'
    }
    if(value === '='){
      classes += ' CellEquals'
    }
    if(value === '.'){
      classes += ' CellDecimal'
    }
    return classes
  }

  return (
    <div id = {'Cell_' + digit.digit} className = 'CalculatorCell' onClick = {() => props.onDigitClick(digit.digit)}>
      {digit.digit}
    </div>
  )
}

export default CalculatorCell;