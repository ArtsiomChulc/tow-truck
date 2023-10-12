import React, {useState} from 'react';
import logoIcon from '../../assets/icons/headerIcons/logo.png'

import s from './header.module.scss'

const Header = () => {

    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    const onClickHandler = () => {
        setIsOpenMenu(!isOpenMenu)
    }
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
                        className={`${s.burgerBlock} ${isOpenMenu ? s.active : ''}`}
                        aria-label="Открыть главное меню"
                        onClick={onClickHandler}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
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