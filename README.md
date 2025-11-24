Weather App (React + Python FastAPI)

This project is a simple full-stack weather application built using React for the frontend and Python (FastAPI) for the backend.
It retrieves real-time weather data for any city using the OpenWeatherMap API and displays key information such as temperature, humidity, wind speed, and weather conditions.

Features

Search weather by city name

Real-time weather data using OpenWeatherMap

Temperature, humidity, and wind speed display

Clean and simple UI

FastAPI backend serving weather data

CORS enabled for frontend-backend communication

Technologies Used
Frontend

React.js

JavaScript

Fetch API

HTML/CSS

Backend

Python

FastAPI

Requests library

Uvicorn (server)

Project Structure
weather_full_project/
│
├── backend/
│   └── main.py
│
└── frontend/
    ├── App.js
    └── Weather.js

Setup Instructions
1. Backend Setup (Python + FastAPI)

Navigate to the backend folder:

cd backend


Install required dependencies:

pip install fastapi uvicorn requests


Add your OpenWeather API key inside main.py:

API_KEY = "YOUR_OPENWEATHER_API_KEY"


Run the FastAPI backend server:

uvicorn main:app --reload --port 8000


Your backend API will be available at:

http://localhost:8000/weather/<city>

2. Frontend Setup (React)

Navigate to the frontend folder:

cd frontend


Install React dependencies:

npm install


Start the React development server:

npm start


The frontend will be available at:

http://localhost:3000

How It Works

The user enters a city name in the React interface.

React sends a request to the FastAPI backend.

The backend communicates with the OpenWeatherMap API to fetch data.

The backend returns the processed data to the frontend.

The frontend displays the weather details to the user.

API Endpoint

GET /weather/{city}
Returns weather data for the specified city.

Example Response:

{
  "city": "London",
  "temperature": 15,
  "humidity": 82,
  "wind": 3.5,
  "description": "light rain"
}

Possible Improvements

Add weather icons

Add 7-day forecast

Add background images based on weather

Improve UI styling

Error handling enhancements

License

This project is open-source and available for educational and learning purposes.
