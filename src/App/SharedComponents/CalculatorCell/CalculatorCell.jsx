import React from 'react';
import './CalculatorCell.scss'

const CalculatorCell = (props) => {
  const [digit] = React.useState({
    digit: props.digit.toString()
  });

  return (
    <div id = {'Cell_' + digit.digit} className = 'CalculatorCell' onClick = {() => props.onDigitClick(digit.digit)}>
      {digit.digit}
    </div>
  )
}

export default CalculatorCell;