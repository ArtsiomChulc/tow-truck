import React from 'react';
import s from './carousel.module.scss';

type PropsType = {
    photo: any
    alt: string
}

const ExampleCarouselImage = (props: PropsType) => {
    const {photo, alt} = props
    return (
        <div className={s.carousel}>
            <img src={photo} alt={alt}/>
        </div>
    );
};

export default ExampleCarouselImage;