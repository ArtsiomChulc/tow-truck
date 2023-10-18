import React, {useState} from 'react';
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

    const [town, setTown] = useState<string | undefined>('')

    const callBack = (town: string | undefined) => {
        setTown(town)
    }

    return (
        <footer className={s.footerBlock}>
            <div className={s.footerCard}>
                {/*<h5 className={s.title}>Эвакуатор-Жлобин</h5>*/}
                <h5 className={s.title}>Эвакуатор-Город</h5>
                <span className={s.subtitle}>Круглосуточная служба эвакуации автомобилей и мотоциклов.</span>
                {/*<a href="tel:+375256444333">+375256444333</a>*/}
                <a href="">Номер телефона</a>
            </div>
            <div className={s.footerCard}>
                <h5 className={s.title}>Мы в социальных сетях</h5>
                <ul className={s.socialBlock}>
                    {/*<li><a target={'_blank'} href="viber://chat?number=%2B375296924577"><img src={viberIcon} alt="viberIcon"/></a></li>*/}
                    {/*<li><a target={'_blank'} href="https://wa.me/+375296924577"><img src={whatsAppIcon} alt="whatsAppIcon"/></a></li>*/}
                    {/*<li><a target={'_blank'} href="https://www.instagram.com/evakuatorzhlobin/"><img src={instagramIcon} alt="instagramIcon"/></a></li>*/}
                    {/*<li><a target={'_blank'} href="https://vk.com/evakuatorzhlobin375256444333"><img src={vkIcon} alt="vkIcon"/></a></li>*/}
                    {/*<li><a target={'_blank'} href="https://t.me/Pavel_kuzniatou"><img src={telegramIcon} alt="telegramIcon"/></a></li>*/}
                    <li><a target={'_blank'} href=""><img src={viberIcon} alt="viberIcon"/></a></li>
                    <li><a target={'_blank'} href=""><img src={whatsAppIcon} alt="whatsAppIcon"/></a></li>
                    <li><a target={'_blank'} href=""><img src={instagramIcon} alt="instagramIcon"/></a></li>
                    <li><a target={'_blank'} href=""><img src={vkIcon} alt="vkIcon"/></a></li>
                    <li><a target={'_blank'} href=""><img src={telegramIcon} alt="telegramIcon"/></a></li>
                </ul>
            </div>
            <div className={s.footerCard}>
                <h5 className={s.title}>КОНТАКТНАЯ ИНФОРМАЦИЯ</h5>
                <span className={s.subtitle}>г. Город ул. Такаято дом ТАКОЙТО</span>
            </div>
            <div className={s.footerCard}>
                {/*<h5 className={s.title}>Погода в Жлобине</h5>*/}
                <h5 className={s.title}>Погода в г. {town}</h5>
                <WeatherVWidget apiKey={apiKey} callBack={callBack} />
            </div>
        </footer>
    );
};

export default Footer;