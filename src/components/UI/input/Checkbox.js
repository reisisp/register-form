import React from 'react';
import styles from './Checkbox.module.scss';


export const Checkbox = ({ children, ...props }) => {
    return (
        <div className={styles.elem}>
            <input
                {...props}
                type='checkbox'
                className={styles.elem__checkbox}
            />
            <label
                htmlFor={props.id}
                className={styles.elem__label}
            >
                {children}
            </label>
        </div>
    );
};
