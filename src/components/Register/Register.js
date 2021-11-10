import React, { useEffect, useState } from 'react';
import { Btn } from '../UI/btn/Btn';
import { Checkbox } from '../UI/input/Checkbox';
import { RegInput } from '../UI/input/RegInput';
import { LangSelect } from '../UI/selector/LangSelect';
import cn from 'classnames';
import styles from './Register.module.scss';


export const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        telephone: '',
        lang: '',
        agreement: false
    });
    const [formValid, setFormValid] = useState(false);

    const [touchName, setTouchName] = useState(false);
    const [touchEmail, setTouchEmail] = useState(false);
    const [touchTel, setTouchTel] = useState(false);
    const [emailErr, setEmailErr] = useState('Email не может быть пустым');
    const [nameErr, setNameErr] = useState('Имя не может быть пустым');
    const [telErr, setTelErr] = useState('Телефон не может быть пустым');

    useEffect(() => {
        if (emailErr || nameErr || telErr || !user.lang || !user.agreement) {
            setFormValid(false)
        } else (
            setFormValid(true)
        )
    }, [emailErr, nameErr, telErr, user.lang, user.agreement])

    const blurHandler = (e) => {
        switch (e.target.id) {
            case 'email':
                setTouchEmail(true);
                break;
            case 'name':
                setTouchName(true);
                break;
            case 'tel':
                setTouchTel(true);
                break;
        }
    }

    const nameHandler = (e) => {
        setUser({ ...user, name: e.target.value })
        const re = /^[а-яё]*(\s*-?[а-яё]*)?$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameErr('Некорректные имя')
        } else {
            setNameErr('');
        }
    }
    const emailHandler = (e) => {
        setUser({ ...user, email: e.target.value });
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailErr('Некорректный Email')
        } else {
            setEmailErr('');
        }
    }
    const telHandler = (e) => {
        setUser({ ...user, telephone: e.target.value })
        const re = /^((8|\+7)[\- ]?)(\(?\d{3}\)?[\- ]?)[\d\- ]{7}$/;
        if (!re.test(String(e.target.value))) {
            setTelErr('Некорректный номер телефона')
        } else {
            setTelErr('');
        }
    }
    const langHandler = (e) => {
        setUser({ ...user, lang: e.currentTarget.textContent })
    }
    const agreementHandler = (e) => {
        if (e.target.checked) {
            setUser({ ...user, agreement: e.target.checked })
        }
    }

    const register = () => {
        console.log(user)
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.regbox}>
                    <div className={styles.reg__header}>
                        <h1 className={styles.reg__heading}>Регистрация</h1>
                        <p className={styles.reg__redirect}>Уже есть аккаунт?&nbsp;<a
                            href="#"
                            className={cn(styles.reg__link, styles.reg__redirect_link)}
                        >Войти</a></p>
                    </div>
                    <div className={styles.reg__form}>
                        <div className={styles.reg__errbox}>
                            <RegInput onBlur={e => blurHandler(e)} onChange={e => nameHandler(e)}
                                value={user.name} type='text' placeholder='Введите ваше имя' id='name' name='Имя' />
                            {(touchName && nameErr) && <div className={styles.reg__err}>{nameErr}</div>}
                        </div>
                        <div className={styles.reg__errbox}>
                            <RegInput onBlur={e => blurHandler(e)} onChange={e => emailHandler(e)}
                                value={user.email} type='email' placeholder='Введите ваш email' id='email' name='Email' />
                            {(touchEmail && emailErr) && <div className={styles.reg__err}>{emailErr}</div>}
                        </div>
                        <div className={styles.reg__errbox}>
                            <RegInput onBlur={e => blurHandler(e)} onChange={e => telHandler(e)}
                                value={user.telephone} type='tel' placeholder='Введите номер телефона' id='tel' name='Номер телефона' />
                            {(touchTel && telErr) && <div className={styles.reg__err}>{telErr}</div>}
                        </div>
                        <LangSelect onChange={e => langHandler(e)} />
                        <Checkbox onChange={e => agreementHandler(e)}
                            name='agreement' id='agreement'>
                            <span className={styles.reg__checkbox}>Принимаю <a className={cn(styles.reg__checkbox, styles.reg__checkbox_link)} href="#">условия</a> использования</span>
                        </Checkbox>
                        <Btn onClick={register} disabled={!formValid} type='submit'>Зарегистрироваться</Btn>
                    </div>
                </div>
            </div>
        </div>
    );
};
