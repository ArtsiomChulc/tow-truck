import React from 'react';
import viberIcon from '../../assets/icons/footerIcon/viber_color_icon.svg';
import whatsAppIcon from '../../assets/icons/footerIcon/whatsapp_color_icon.svg';
import instagramIcon from '../../assets/icons/footerIcon/ig_instagram_icon.svg';
import vkIcon from '../../assets/icons/footerIcon/vk_icon.svg';
import telegramIcon from '../../assets/icons/footerIcon/telegram_icon.svg';

import s from './footer.module.scss';
import WeatherVWidget from "../../common/weatherWidget/WeatherVWidget";


type PropsType = {
    apiKey: string
}

const Footer: React.FC<PropsType> = ({apiKey}) => {
    return (
        <footer className={s.footerBlock}>
            <div className={s.footerCard}>
                <h5 className={s.title}>Эвакуатор-Жлобин</h5>
                <span className={s.subtitle}>Круглосуточная служба эвакуации автомобилей и мотоциклов.</span>
                <a href="tel:+375256444333">+375256444333</a>
            </div>
            <div className={s.footerCard}>
                <h5 className={s.title}>Мы в социальных сетях</h5>
                <ul className={s.socialBlock}>
                    <li><a href=""><img src={viberIcon} alt="viberIcon"/></a></li>
                    <li><a href=""><img src={whatsAppIcon} alt="whatsAppIcon"/></a></li>
                    <li><a href=""><img src={instagramIcon} alt="instagramIcon"/></a></li>
                    <li><a href=""><img src={vkIcon} alt="vkIcon"/></a></li>
                    <li><a href=""><img src={telegramIcon} alt="telegramIcon"/></a></li>
                </ul>
            </div>
            <div className={s.footerCard}>
                <h5 className={s.title}>КОНТАКТНАЯ ИНФОРМАЦИЯ</h5>
                <span className={s.subtitle}>г. Жлобин ул. Такаято дом ТАКОЙТО</span>
            </div>
            <div className={s.footerCard}>
                <h5 className={s.title}>Погода в Жлобине</h5>
                <WeatherVWidget apiKey={apiKey} />
            </div>
        </footer>
    );
};

export default Footer;