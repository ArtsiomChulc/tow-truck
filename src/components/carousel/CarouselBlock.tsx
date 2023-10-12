import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from "./ExampleCarouselImage";
import photo1 from '../../assets/img/carouselImg/img1.png';
import photo2 from '../../assets/img/carouselImg/img2.png';
import photo3 from '../../assets/img/carouselImg/img3.png';
import photo4 from '../../assets/img/carouselImg/img4.png';
import photo5 from '../../assets/img/carouselImg/imgTime.png';

import s from './carousel.module.scss'

const CarouselBlock = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };
    return (
        <div className={s.carouselWrap}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <ExampleCarouselImage alt={"photo"} photo={photo1} />
                    <Carousel.Caption className={s.caption}>
                        <h3>Грузоперевозки</h3>
                        <p>Грузоперевозки до 6 м и 2,5 тонн.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage alt={"photo"} photo={photo2} />
                    <Carousel.Caption className={s.caption}>
                        <h3>Перевозка малых грузовых авто</h3>
                        <p>Оперативно эвакуируем ваш автомобиль.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage alt={"photo"} photo={photo3} />
                    <Carousel.Caption className={s.caption}>
                        <h3>Перевозка легковых авто</h3>
                        <p>Оперативно эвакуируем ваш автомобиль.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage alt={"photo"} photo={photo4} />
                    <Carousel.Caption className={s.caption}>
                        <h3>Оказываем помощь  на дорогах</h3>
                        <p>
                            Автомобильная помощь, включая подкачку шин и прикуривание автомобиля.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage alt={"photo"} photo={photo5} />
                    <Carousel.Caption className={s.caption}>
                        <h3>Приедем быстро</h3>
                        <p>
                            Работаем оперативно и качественно.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default CarouselBlock;