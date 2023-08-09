import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'http://localhost:8080/api'
        }),
    endpoints: (builder) => ({
        //for each endpoint, define a function using the builder that either queries or mutates data
        getCurrentForecast: builder.query<CompiledForecasts, {location: string, date: string}>({
            query: ({location, date}) => `/forecast/retrieve?location=${location}&date=${date}`
        })
    })
})

export const {useGetCurrentForecastQuery} = apiSlice;