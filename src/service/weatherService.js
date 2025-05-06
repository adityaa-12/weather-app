const baseurl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const getByName = async (query, setWeatherData) => {
  try {
    let req = await fetch(`${baseurl}/current.json?key=${apiKey}&q=${query}`);
    let res = await req.json();
    const data = {
      temp: res.current.temp_c,
      temp_desc: res.current.condition.text,
      icon_url: res.current.condition.icon,
      dew_point: res.current.dewpoint_c,
      humidity: res.current.humidity,
      feelslike: res.current.feelslike_c,
      pressure: res.current.pressure_mb,
      uv: res.current.uv,
      wind: res.current.wind_kph,
      country: res.location.country,
      city: res.location.name,
      date: res.location.localtime,
    };
    setWeatherData(data);
  } catch (error) {
    alert("Internal Server Error!");
  }
};
