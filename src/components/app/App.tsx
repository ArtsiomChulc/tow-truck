import React, {useState} from 'react';
import s from './App.module.scss';
import Header from "../header/Header";
import CarouselBlock from "../carousel/CarouselBlock";
import Services from "../services/Services";
import {DB} from "../services/DB";
import PriceBlock from "../priceBlock/PriceBlock";
import Footer from "../footer/Footer";
import SubFooter from "../subFooter/SubFooter";

function App() {

    const [isMenuOpen, toggleMenuMode] = useState(false)

    const apiKey = 'c39a3fbf0f043f86edd27f336fe90be3';

    const servicesMap = DB.map(el => {
        return (
            <Services key={el.id} alt={el.alt} path={el.src} title={el.title} subtitle={el.subtitle}/>
        )
    })

    return (
        <div id={'main'} className={`${s.App} ${isMenuOpen ? s.overflow : ''}`}>
            <Header isMenuOpen={isMenuOpen} toggleMenuMode={toggleMenuMode}/>

            {/*{!isMenuOpen && <><CarouselBlock/>*/}
            {/*    <div className={s.servicesWrap}>*/}
            {/*        {servicesMap}*/}
            {/*    </div>*/}
            {/*    <div className={s.PriceBlockWrap}>*/}
            {/*        <PriceBlock/>*/}
            {/*    </div>*/}
            {/*    <div style={{width: '100%'}}>*/}
            {/*        <Footer apiKey={apiKey}/><SubFooter/>*/}
            {/*    </div>*/}
            {/*</>}*/}

            <CarouselBlock/>
            <div id={'ourServices'} className={s.servicesWrap}>
                {servicesMap}
            </div>
            <div id={'price'} className={s.PriceBlockWrap}>
                <PriceBlock/>
            </div>
            <div id={'contacts'} style={{width: '100%'}}>
                <Footer apiKey={apiKey}/><SubFooter/>
            </div>


        </div>
    );
}

export default App;
