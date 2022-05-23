import axios from "axios";
import { useEffect, useState } from "react";

export const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (x) => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${x.coords.latitude}&lon=${x.coords.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  //render nothing if there is no data
  if (!data) {
    return;
  }

  return (
    <div className="flex-center weather-icon">
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather"
      />
      <div>
        <h3>{Math.floor(data.main.temp)} &deg;C</h3>
        <p>{data.name}</p>
      </div>
    </div>
  );
};
