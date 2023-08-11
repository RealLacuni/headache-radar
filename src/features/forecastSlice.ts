import {createSlice} from '@reduxjs/toolkit'

const initialState: NormalizedForecastData = {
    dailyForecastList: [],
    dateToHourlyData: [],
    overallRisk: 0,
    tempRisk: 0,
    pressureRisk: 0,
    humidityRisk: 0,
    date: '',
    location: ''
}

const forecastSlice = createSlice(
    {
        name: 'forecast',
        initialState,
        reducers: {
            setForecastData: (state, action) => {
                state = action.payload;
                return state;
            },
            clearForecastData: (state) => {
                state = initialState;
                return state;
            }
        }
    })

export default forecastSlice.reducer;