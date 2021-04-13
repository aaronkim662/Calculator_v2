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
    <div className = {setClasses(digit.digit)} onClick = {() => props.onDigitClick(digit.digit)}>
      <div className = {'Cell' + digit.digit}>
        {digit.digit}
      </div>
    </div>
  )
}

export default CalculatorCell;