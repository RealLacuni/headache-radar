import { configureStore } from '@reduxjs/toolkit'
import forecastSlice from "../features/forecastSlice.ts";
import {apiSlice} from "../features/api/APISlice.ts";
// ...

const createStore = configureStore({
    reducer: {
        forecast: forecastSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof createStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof createStore.dispatch

export default createStore;