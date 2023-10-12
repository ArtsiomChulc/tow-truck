import React from 'react';

import s from './services.module.scss'


type PropsType = {
    path: string
    alt: string
    title: string
    subtitle: string
}

const Services = (props: PropsType) => {
    const {path, alt, title, subtitle} = props
    return (
        <section className={s.ServicesBlock}>
            <span className={s.servicesIcon}>
                <img src={path} alt={alt}/>
            </span>
            <h3 className={s.title}>{title}</h3>
            <p className={s.subtitle}>{subtitle}</p>
        </section>
    );
};

export default Services;