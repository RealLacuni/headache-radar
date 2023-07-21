import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState: FullForecast = {
    dailyForecastList: null,
    hourlyDataList: null,
    overallRisk: 0,
    tempRisk: 0,
    pressureRisk: 0,
    humidityRisk: 0,
    date: '',
    location: ''
}

export const fetchForecastData = createAsyncThunk<FullForecast>(
    'forecast/fetchForecastData',
    async () => {
        const response = await fetch('/your-api-endpoint');
        return response.json();
    }
)
const forecastSlice = createSlice(
    {
        name: 'forecast',
        initialState,
        reducers: {}
    })

export default forecastSlice.reducer;