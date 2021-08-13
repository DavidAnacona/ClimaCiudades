import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from 'Components/settings';
import Card from 'Components/Card/index'
import CardCities from 'Components/CardCities/index';

const Home = () => {

    const [Bogota, setBogota] = useState([])
    const [Paris, setParis] = useState([])
    const [Barcelona, setBarcelona] = useState([])

    useEffect(()=>{

        const fromApiResponseBogota = async () =>{
            try {
                const responsive =  await fetch(`${API_URL}Bogota&appid=${API_KEY}&units=metric`)
                const data = await responsive.json();
                console.log(data)
                setBogota(data)
            } catch (e) {
                console.log(e)
            }
        };

        const fromApiResponseParis = async () =>{
            try {
                const responsive =  await fetch(`${API_URL}Paris,FR&appid=${API_KEY}&units=metric`)
                const data = await responsive.json();
                console.log(data)
                setParis(data)
            } catch (e) {
                console.log(e)
            }
        };

        const fromApiResponseBarcelona = async () =>{
            try {
                const responsive =  await fetch(`${API_URL}Barcelona&appid=${API_KEY}&units=metric`)
                const data = await responsive.json();
                console.log(data)
                setBarcelona(data)
            } catch (e) {
                console.log(e)
            }
        };

        fromApiResponseBogota();
        fromApiResponseParis();
        fromApiResponseBarcelona();
        
    }, [])

    
    return (
        <div>
            <Card City={Bogota} />
            <CardCities City={Paris} />
            <CardCities City={Barcelona} />
        </div>
    )
};

export default Home;