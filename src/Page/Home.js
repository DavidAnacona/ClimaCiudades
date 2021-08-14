import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "Components/settings";
import Card from "Components/Card/index";
import CardCities from "Components/CardCities/index";
import "./style.css";

const Home = () => {
  const [Bogota, setBogota] = useState(null);
  const [Paris, setParis] = useState(null);
  const [Barcelona, setBarcelona] = useState(null);
  const [days, setDays] = useState(null);

  const fetchOperation = async (url, set) => {
    try {
      const responsive = await fetch(url);
      const data = await responsive.json();
      set(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (days?.list) setDia(new Date(days.list[0].dt_txt).getDate());
  }, [days]);
  ///13
  const [dia, setDia] = useState(new Date().getDate());

  const dia1 = days?.list?.filter(
    (i) => new Date(i.dt_txt).getDate() === dia
  )[0];
  const dia2 = days?.list?.filter(
    (i) => new Date(i.dt_txt).getDate() === dia + 1
  )[0];
  const dia3 = days?.list?.filter(
    (i) => new Date(i.dt_txt).getDate() === dia + 2
  )[0];

  useEffect(() => {
    fetchOperation(`${API_URL}Bogota&appid=${API_KEY}&units=metric`, setBogota);
    fetchOperation(
      `${API_URL}Paris,FR&appid=${API_KEY}&units=metric`,
      setParis
    );
    fetchOperation(
      `${API_URL}Barcelona&appid=${API_KEY}&units=metric`,
      setBarcelona
    );
    fetchOperation(
      `https://api.openweathermap.org/data/2.5/forecast?q=bogota&units=metric&appid=${API_KEY}`,
      setDays
    );
  }, []);

  return (
    <>
      {days && Bogota && Barcelona && Paris ? (
        <div>
          {dia1?.weather && <h1>{dia1.weather[0].description}</h1>}
          <Card City={Bogota} />
          <CardCities City={Paris} />
          <CardCities City={Barcelona} />
        </div>
      ) : (
        <div className="papa">
          <div class="lds-circle">
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
