import React, { useState } from 'react';
import cn from 'classnames';
import styles from './LangSelect.module.scss';


export const LangSelect = (props) => {
    const languages = [
        { id: 1, name: 'Русский' },
        { id: 2, name: 'Английский' },
        { id: 3, name: 'Китайский' },
        { id: 4, name: 'Испанский' },
    ];
    const [visible, setVisible] = useState(false);
    const [lang, setLang] = useState('');

    const showLanguages = () => {
        setVisible(!visible);
    }

    const selectLang = (event) => {
        props.onChange(event);
        setLang(event.currentTarget.textContent);
    }

    return (
        <div className={styles.selectbox}>
            <h1 className={styles.select__heading}>Язык</h1>
            <div className={visible === true
                ? cn(styles.select, styles.isactive)
                : styles.select} onClick={showLanguages}
            >
                <div className={styles.select__header}>
                    <span className={lang != false
                        ? styles.select__selected
                        : styles.select__current
                    }>
                        {lang || 'Язык'}
                    </span>
                    <div className={styles.select__icon}></div>
                </div>
                <div className={styles.select__body}>
                    {languages.map((language, index) =>
                        <div key={index} className={styles.select__item} onClick={selectLang}>{language.name}</div>
                    )}
                </div>
            </div>
        </div>
    );
};
