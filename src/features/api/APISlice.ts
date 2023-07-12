import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:5001/api/'}),
    endpoints: (builder) => ({
        getWeatherForecast: builder.query<FullForecast, string>({
            query: (name) => `/forecast/${name}`
        })
    })
})

export const {useGetWeatherForecastQuery} = apiSlice;