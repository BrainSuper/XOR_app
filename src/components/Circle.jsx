import React, {useState} from 'react';
import styles from './../styles/Circle.module.css'

const Circle = ({id, input, setInput, status, result, not}) => {
    let resultClass = styles.circle;
    if (not) {
        resultClass = resultClass + ' ' + styles.not;
    }
    if (status) {
        resultClass = resultClass + ' ' + styles.active;
    } else {
        resultClass = resultClass;
    }
    return (
        <div onClick={() => {
            if (result || not) return;
            setInput(input.map(input => {
                if (id === input.id) {
                    return {...input, status: !status}
                } else {
                    return input
                }
            }))
            // mathNum(operation);
        }} className={resultClass}>

        </div>
    );
};

export default Circle;