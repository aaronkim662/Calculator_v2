PAGE =
  getResult: (input, result) ->
    cy.get('.CalculatorInput').clear().type input
    cy.get('.CellEquals').click()
    cy.get('.CalculatorInput').should 'have.value', result

describe 'Calculator', ->
  before ->
    cy.visit '/'

  context 'Does Operations', ->
    it 'Adds Numbers', ->
      PAGE.getResult('2+3', '5')

    it 'Subtracts Numbers', ->
      PAGE.getResult('10-5', '5')

    it 'Divides Numbers', ->
      PAGE.getResult('10/5', '2')

    it 'Multiplies Numbers', ->
      PAGE.getResult('10*5', '50')

    it 'Handles Parenthesis Multiplication', ->
      PAGE.getResult('(9+3)(-10*2)', '-240')
      PAGE.getResult('9+5(1+4)', '34')
      PAGE.getResult('(1 + 3)10', '40')

    it 'Handes Decimals', ->
      PAGE.getResult('1 + 34.2 / 2', '18.1')
      PAGE.getResult('1 + 2.5 * 30', '76')


    it 'Returns Number if there is only a Number', ->
      PAGE.getResult('950', '950')

    it 'Returns Result for Quoted Input', ->
      PAGE.getResult('"1 + 2"', '3')

  context 'Handles Errors', ->
    error = 'Syntax Error'
    it 'Returns an Error For Letters', ->
      PAGE.getResult('1 + 2 + abc', error)

    it 'Returns an Error for Edge Cases', ->
      edgeCases = ['++', '+/', '/+', '+*', '*+', '-*', '-/', '**', '*/', '/*', '**', '//', '-+', '..', '()']
      edgeCases.forEach (edge) =>
        PAGE.getResult("1 + 2 + 3 #{edge} 5 *9", error)

    it 'Returns an Error for Operations at the Beginning and End', ->
      operations = ['+', '/', '*']
      operations.forEach (op) =>
        PAGE.getResult("#{op} 1 + 5", error)
        PAGE.getResult("1 + 5 #{op}", error)
        PAGE.getResult('1 + 5 -', error)

    it 'Returns an Error for Multiple Decimals', ->
      PAGE.getResult('1 + 2 + 2.42.4', error)

  context 'Example Test Cases', ->
    it 'Returns 3', ->
      PAGE.getResult('1 + 2', '3')

    it 'Returns 10', ->
      PAGE.getResult('4*5/2', '10')

    it 'Returns 9', ->
      PAGE.getResult('-5+-8--11*2', '9')

    it 'Returns -0.64', ->
      PAGE.getResult('-.32       /.5', '-0.64')

    it 'Returns 7', ->
      PAGE.getResult('(4-2)*3.5', '7')

    it 'Returns Syntax Error (or similar)', ->
      PAGE.getResult('2+-+-4', 'Syntax Error')

    it 'Returns Syntax Error (or similar)', ->
      PAGE.getResult('19 + cinnamon', 'Syntax Error')