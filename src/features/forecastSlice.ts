import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState: CompiledForecasts = {
    dailyForecastList: [],
    dateToHourlyData: new Map(),
    overallRisk: 0,
    tempRisk: 0,
    pressureRisk: 0,
    humidityRisk: 0,
    date: '',
    location: ''
}

export const fetchForecastData = createAsyncThunk<CompiledForecasts>(
    'forecast/fetchForecastData',
    async () => {
        const response = await fetch('/your-api-endpoint'); //TODO: replace with actual endpoint
        return response.json();
    }
)

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