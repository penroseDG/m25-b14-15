import React from 'react';
import axios from 'axios';

const WeatherPage = ({ weather }) => {
  return (
    <div>
      <h1>Thông Tin Thời Tiết</h1>
      <p><strong>Nhiệt độ:</strong> {weather.temperature}°C</p>
      <p><strong>Tình trạng thời tiết:</strong> {weather.weathercode}</p>
    </div>
  );
};

// Sử dụng getServerSideProps để lấy dữ liệu SSR
export async function getServerSideProps() {
  try {
    // API Open-Meteo yêu cầu latitude và longitude
    const latitude = 35.6895;  
    const longitude = 139.6917;

    const res = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude,
        longitude,
        current_weather: true,
      },
    });

    const weatherData = res.data.current_weather;

    return {
      props: {
        weather: {
          temperature: weatherData.temperature,
          weathercode: weatherData.weathercode, // Weather code có thể được map thành tình trạng thời tiết cụ thể nếu cần
        },
      },
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return {
      props: {
        weather: null,
      },
    };
  }
}

export default WeatherPage;