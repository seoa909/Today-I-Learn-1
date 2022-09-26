# useWeather.tsx
```
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState({
    temp: 0,
    condition: "",
  });
  useEffect(() => {
    getLocation();
  }, []);
  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const locationData = await Location.getCurrentPositionAsync();
      const latitude = locationData["coords"]["latitude"];
      const longitude = locationData["coords"]["longitude"];
      const API_KEY = `${process.env.Weather_Key}`;
      const result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

      const temp = result.data.main.temp;
      const condition = result.data.weather[0].main;
      setWeather({
        temp,
        condition,
      });
    } catch (error) {
      Alert.alert("위치를 찾을 수 없습니다. 재시작 해주세요.");
    }
  };
  return weather;
};

export default Weather;

```

# Usage
```
const weather = useWeather();
```
