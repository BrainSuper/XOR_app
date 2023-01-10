import './App.css';
import React, {useEffect, useState} from "react";
import Input from "./components/Input";
import Operation from "./components/Operation";
import {checkInput} from "./utils/math";

function App() {
    const [operation, setOperation] = useState('AND')
    const [firstInput, setFirstInput] = useState([
        {id: 1, status: false},
        {id: 2, status: false},
        {id: 3, status: false},
        {id: 4, status: false},
        {id: 5, status: false},
        {id: 6, status: false},
        {id: 7, status: false},
        {id: 8, status: false}
    ])
    const [secondInput, setSecondInput] = useState([
        {id: 1, status: false},
        {id: 2, status: false},
        {id: 3, status: false},
        {id: 4, status: false},
        {id: 5, status: false},
        {id: 6, status: false},
        {id: 7, status: false},
        {id: 8, status: false}
    ])
    const [resultInput, setResultInput] = useState([
        {id: 1, status: false},
        {id: 2, status: false},
        {id: 3, status: false},
        {id: 4, status: false},
        {id: 5, status: false},
        {id: 6, status: false},
        {id: 7, status: false},
        {id: 8, status: false}
    ])
    const [not, setNot] = useState(false)

    useEffect(() => {
        if (operation === 'NOT') {
            setNot(true);
        } else {
            setNot(false)
        }
        checkInput(setResultInput, resultInput, operation, firstInput, secondInput);
    }, [firstInput, secondInput, operation])


  return (
    <div className="App">
        <h1 className={'title'}>BITWISE OPERATION</h1>
        <Input operation={operation} input={firstInput} setInput={setFirstInput}/>
        <div className={'operation__wrapper'}>
            <Operation setOperation={setOperation} operation={operation}>AND</Operation>
            <Operation setOperation={setOperation} operation={operation}>OR</Operation>
            <Operation setOperation={setOperation} operation={operation}>XOR</Operation>
            <Operation setOperation={setOperation} operation={operation}>NOT</Operation>
        </div>
        <Input operation={operation} not={not} input={secondInput} setInput={setSecondInput} />
        <h1 className={'result'}>Result</h1>
        <Input input={resultInput} result={true} setInput={setResultInput}/>
    </div>
  );
}

export default App;
