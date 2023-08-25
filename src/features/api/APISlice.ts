import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_BASE_URL}/api`,
    }),
    endpoints: (builder) => ({
        getCurrentForecast: builder.query<NormalizedForecastData, { location: string; date: string }>({
            query: ({ location, date }) => `/forecast/retrieve?location=${location}&date=${date}`,
            transformResponse: (response: RawForecastData): NormalizedForecastData => {
                // Transform the dateToHourlyData field
                const transformedDateToHourlyData = Object.entries(response.dateToHourlyData).map(([date, hourlyDatum]) => ({
                    date,
                    hourlyData: hourlyDatum,
                }));
                // console.log(transformedDateToHourlyData);

                return {
                    ...response,
                    dateToHourlyData: transformedDateToHourlyData
                };
            },
        }),
    }),
});

export const {useGetCurrentForecastQuery} = apiSlice;