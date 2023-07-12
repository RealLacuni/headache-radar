import {createSlice, createSelector} from '@reduxjs/toolkit'
import {RootState} from "../store/store.ts";

const initialState: FullForecast = {
    dailyForecast: null,
    hourlyData: []
}

const forecastSlice = createSlice(
    {
        name: 'forecast',
        initialState,
        reducers: {
            setDailyForecast: (state, action) => {
                state.dailyForecast = action.payload.dailyForecast;
            },
            setHourlyForecast: (state, action) => {
                state.hourlyData = action.payload.hourlyData;
            }
        }
    }
)

const selectForecast = (state: RootState) => state.forecast;
const selectDailyForecast = createSelector(selectForecast, (forecast) => forecast.dailyForecast);
const selectHourlyData = createSelector(selectForecast, (forecast) => forecast.hourlyData);

export const forecastSelectors = {selectDailyForecast, selectHourlyData};
export const {setDailyForecast, setHourlyForecast} = forecastSlice.actions;
export default forecastSlice.reducer;