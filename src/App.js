import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './style';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('');
    setFirstNumber('');
    setOperation('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => prev + number);
  };

  const handleOperation = (operator) => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation(operator);
    } else {
      handleEquals();
      setOperation(operator);
    }
  };

  const handleEquals = () => {
    let result = '';
    if (operation !== '' && currentNumber !== '') {
      switch (operation) {
        case '+':
          result = String(parseFloat(firstNumber) + parseFloat(currentNumber));
          break;
        case '-':
          result = String(parseFloat(firstNumber) - parseFloat(currentNumber));
          break;
        case '*':
          result = String(parseFloat(firstNumber) * parseFloat(currentNumber));
          break;
        case '/':
          result = String(parseFloat(firstNumber) / parseFloat(currentNumber));
          break;
        default:
          break;
      }
    }
    setCurrentNumber(result);
    setFirstNumber('');
    setOperation('');
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber || '0'} />
        <Row>
          <Button label="x" onClick={() => handleOperation('*')} />
          <Button label="/" onClick={() => handleOperation('/')} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="C" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
