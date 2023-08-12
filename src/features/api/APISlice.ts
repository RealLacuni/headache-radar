import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";




export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api',
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
                console.log(transformedDateToHourlyData);

                return {
                    ...response,
                    dateToHourlyData: transformedDateToHourlyData
                };
            },
        }),
    }),
});

export const {useGetCurrentForecastQuery} = apiSlice;