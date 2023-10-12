import React, {useEffect, useState} from 'react';
import icon1 from '../../assets/icons/weatherIcon/icon1.png';
import icon2 from '../../assets/icons/weatherIcon/icon2.png';
import icon3 from '../../assets/icons/weatherIcon/icon3.png';
import iconDefault from '../../assets/icons/weatherIcon/iconDefault.png';
import Loader from "../loader/Loader";

type WeatherWidgetProps = {
    apiKey: string;
    city?: string;
}

type WeatherDataType = {
    coord?: {
        lon?: number
        lat?: number
    },
    weather?: [
        {
            id?: number
            main?: string
            description: string
            icon?: string
        }
    ],
    base?: string
    main?: {
        temp: number
        feels_like?: number
        temp_min?: number
        temp_max?: number
        pressure?: number
        humidity?: number
        sea_level?: number
        grnd_level?: number
    },
    visibility?: number
    wind?: {
        speed?: number
        deg?: number
        gust?: number
    },
    rain?: {
        '1h'?: number
    },
    clouds?: {
        all?: number
    },
    dt?: number
    sys?: {
        type?: number
        id?: number
        country?: string
        sunset?: number
    },
    timezone?: number
    id?: number
    name?: string
    cod?: number
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({apiKey}) => {
    const [weatherTemp, setWeatherTemp] = useState<number>(0);
    const [weatherDesc, setWeatherDesc] = useState<string>('');
    const [weatherIcon, setWeatherIcon] = useState<string>('');

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=52.8923&lon=30.0378&lang=ru&appid=${apiKey}&units=metric`
                );
                const data: WeatherDataType = await response.json();

                const temp = data.main?.temp;
                const desc = data.weather?.map(el => el.description);
                const icon = data.weather?.map(el => el.main)

                // @ts-ignore
                setWeatherTemp(Math.round(temp));
                // @ts-ignore
                setWeatherDesc(desc)
                // @ts-ignore
                setWeatherIcon(icon)

            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [apiKey]);


    if (!weatherTemp) {
        return <Loader/>
    }


    return (
        <div style={{color: '#787878', marginTop: '40px'}}>

            <img
                src={
                weatherIcon[0] === 'Clouds' ?
                    icon1 : weatherIcon[0] === 'Drizzle' || 'Rain'
                    ? icon2 : weatherIcon[0] === 'Clear' ? icon3 : iconDefault}
                alt="icon weather"/>

            <p>Температура: {weatherTemp} °C</p>
            <p>Описание: {weatherDesc}</p>
        </div>
    );
};

export default WeatherWidget;