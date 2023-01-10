import React from 'react';
import Circle from "./Circle";
import styles from './../styles/Input.module.css'

const Input = ({input, setInput, result, mathNum, operation, not}) => {

    return (
        <div className={styles.input}>
            {input.map(elem => <Circle id={elem.id} not={not} operation={operation}  input={input} result={result} setInput={setInput} status={elem.status}/>)}
        </div>
    )
};

export default Input;