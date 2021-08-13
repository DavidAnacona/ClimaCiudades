import React from 'react';
import Picture from 'Components/picture';

const CardCities = ({City}) => {
    return (
        <div className="conteiner">
            <h2>{City.name}</h2>
            {City.sys && <p>{City.sys.country}</p>}
            <p>{City?.main?.temp}</p>
            <p>{City?.main?.humidity}%</p>
            <p>{City?.wind?.speed}km/h</p>
            {City.weather && <Picture  url={City?.weather[0]?.icon} id={City?.id} />}
        </div>
    );
};

export default CardCities;