import React from 'react';
import s from './App.module.scss';
import Header from "../header/Header";
import CarouselBlock from "../carousel/CarouselBlock";
import Services from "../services/Services";
import {DB} from "../services/DB";
import PriceBlock from "../priceBlock/PriceBlock";
import Footer from "../footer/Footer";
import Loader from "../../common/loader/Loader";
import SubFooter from "../subFooter/SubFooter";

function App() {

    const apiKey = 'c39a3fbf0f043f86edd27f336fe90be3';

    const servicesMap = DB.map(el => {
        return (
            <Services key={el.id} alt={el.alt} path={el.src} title={el.title} subtitle={el.subtitle}/>
        )
    })

    return (
        <div className={s.App}>
            <Header/>

            <CarouselBlock/>

            <div className={s.servicesWrap}>
                {servicesMap}
            </div>

            <div className={s.PriceBlockWrap}>
                <PriceBlock/>
            </div>

            <Footer apiKey={apiKey}/>

            <SubFooter/>

        </div>
    );
}

export default App;
