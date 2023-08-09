import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'https://localhost:5001/api'
        }),
    endpoints: (builder) => ({
        //for each endpoint, define a function using the builder that either queries or mutates data
        getCurrentForecast: builder.query<CompiledForecasts, string>({
            query: (zip: string) => `/forecast/${zip}`
        })
    })
})

export const {useGetCurrentForecastQuery} = apiSlice;