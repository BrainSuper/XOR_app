import React, {useState} from 'react';
import styles from './../styles/Operation.module.css'
const Operation = ({operation, setOperation, children}) => {
    let defaultClass = styles.operation;
    if (operation === children) {
        defaultClass = styles.operation + ' ' + styles.active
    }
    return (
        <div className={defaultClass} onClick={() => {
            setOperation(children);

        }}>
            {children}
        </div>
    );
};

export default Operation;