import React, {useEffect, useRef, useState} from 'react';
import logoIcon from '../../assets/icons/headerIcons/logo.png'

import s from './header.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";

type HeaderPropsType = {
    isMenuOpen: boolean
    toggleMenuMode: (x: boolean) => void
}

const Header = (props: HeaderPropsType) => {

    const {isMenuOpen, toggleMenuMode} = props

    const menuRef = useRef<HTMLDivElement>(null);

    const onClickHandler = () => {
        toggleMenuMode(!isMenuOpen)
    }

    const handleOutsideClick = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            toggleMenuMode(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <header className={s.Header}>
                <div className={s.headerInfo}>
                    <ul className={s.headerInfoListLeft}>
                        <li><Link to={'main'} smooth={true} duration={500}>Главная</Link></li>
                        <li><Link to={'ourServices'} smooth={true} duration={500}>Наши услуги</Link></li>
                    </ul>
                    <span className={s.logo}>
                    <img src={logoIcon} alt="logo"/>
                    <p className={s.title}>
                        Эвакуатор
                        <span className={s.subTitle}>эвакуация авто - Жлобин</span>
                    </p>
                    </span>
                    <ul className={s.headerInfoListRight}>
                        <li><Link to={'price'} smooth={true} duration={500}>Цены</Link></li>
                        <li><Link to={'contacts'} smooth={true} duration={500}>Контакты</Link></li>
                    </ul>
                    <div
                        ref={menuRef}
                        className={`${s.burgerBlock} ${isMenuOpen ? s.active : ''}`}
                        aria-label="Открыть главное меню"
                        onClick={onClickHandler}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <Menu isMenuOpen={isMenuOpen}/>
            </header>
            <SubHeader/>
        </>
    );
};

export default Header;

export const SubHeader = () => {
    return (
        <section className={s.subHeader}>
            <div className={s.speedTime}>
                ПРИБЫТИЕ ЗА <span style={{fontWeight: 'bold'}}>45 МИНУТ</span>
            </div>
            <div className={s.phoneContact}>
                <a href="tel:+375256444333">+375256444333</a>
            </div>
            <div className={s.timeWork}>
                РАБОТАЕМ ДЛЯ ВАС <span style={{fontWeight: 'bold'}}>24/7</span>
            </div>
        </section>
    )
}

type MenuPropsType = {
    isMenuOpen: boolean;
}

export const Menu = (props: MenuPropsType) => {
    return (
        <div>
            <ul className={`${s.appBar} ${props.isMenuOpen ? s.visible : ''}`}>
                <li><Link to={'main'} smooth={true} duration={500}>Главная</Link></li>
                <li><Link to={'ourServices'} smooth={true} duration={500}>Наши услуги</Link></li>
                <li><Link to={'price'} smooth={true} duration={500}>Цены</Link></li>
                <li><Link to={'contacts'} smooth={true} duration={500}>Контакты</Link></li>
            </ul>
        </div>
    )
}