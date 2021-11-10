import React from 'react';
import styles from './RegInput.module.scss';


export const RegInput = (props) => {
    return (
        <div className={styles.elem}>
            <label className={styles.elem__label} htmlFor={props.id}>{props.name}</label>
            <input {...props} className={styles.elem__input} />
        </div>
    );
};
