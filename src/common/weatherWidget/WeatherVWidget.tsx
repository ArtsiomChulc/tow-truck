import React, {useEffect, useState} from 'react';
import icon1 from '../../assets/icons/weatherIcon/icon1.png';
import icon2 from '../../assets/icons/weatherIcon/icon2.png';
import icon3 from '../../assets/icons/weatherIcon/icon3.png';
import iconDefault from '../../assets/icons/weatherIcon/iconDefault.png';
import Loader from "../loader/Loader";

type WeatherWidgetProps = {
    apiKey: string;
    city?: string;
    callBack: (town: string | undefined) => void
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
            description: string | undefined
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
        speed: number | undefined
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

const WeatherWidget: React.FC<WeatherWidgetProps> = ({apiKey, callBack}) => {

    const [weatherTemp, setWeatherTemp] = useState<number>(0);
    const [windSpeed, setWindSpeed] = useState<number | undefined>(0);
    const [weatherDesc, setWeatherDesc] = useState<string | undefined>('');
    const [weatherIcon, setWeatherIcon] = useState<string>('');

    const callBack1 = (town: string | undefined) => {
        callBack(town)
    }

    useEffect(() => {

        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    // `https://api.openweathermap.org/data/2.5/weather?lat=52.8923&lon=30.0378&lang=ru&appid=${apiKey}&units=metric` // Жлобин
                    `https://api.openweathermap.org/data/2.5/weather?lat=54,5081&lon=30,4172&lang=ru&appid=${apiKey}&units=metric` // Орша
                );
                const data: WeatherDataType = await response.json();

                const townWeather = data.name;
                const temp = data.main?.temp;
                const wind = data.wind?.speed
                const desc = data.weather?.map(el => el.description);
                const icon = data.weather?.map(el => el.main)


                if (temp != null) {
                    setWeatherTemp(Math.round(temp));
                }
                if (typeof wind === "number") {
                    setWindSpeed(Math.round(wind) / 1000 * 3600)
                }
                // @ts-ignore
                setWeatherDesc(desc)

                // @ts-ignore
                setWeatherIcon(icon)

                callBack1(townWeather)

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
            <p>Ветер: {windSpeed} км/ч</p>
        </div>
    );
};

export default WeatherWidget;