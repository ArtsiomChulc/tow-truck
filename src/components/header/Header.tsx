import React, {useEffect, useRef, useState} from 'react';
import logoIcon from '../../assets/icons/headerIcons/logo.png'

import s from './header.module.scss'

const Header = () => {

    const [isMenuOpen, toggleMenuMode] = useState(false)
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
                        <li><a href="">Главная</a></li>
                        <li><a href="">Наши услуги</a></li>
                    </ul>
                    <span className={s.logo}>
                    <img src={logoIcon} alt="logo"/>
                    <p className={s.title}>
                        Эвакуатор
                        <span className={s.subTitle}>эвакуация авто - Жлобин</span>
                    </p>
                    </span>
                    <ul className={s.headerInfoListRight}>
                        <li><a href="">Цены</a></li>
                        <li><a href="">Контакты</a></li>
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
                <li><a href="">Главная</a></li>
                <li><a href="">Наши услуги</a></li>
                <li><a href="">Цены</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
        </div>
    )
}