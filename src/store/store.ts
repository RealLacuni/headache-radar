import {combineReducers, configureStore, PreloadedState} from '@reduxjs/toolkit'
import forecastSlice from "../features/forecastSlice.ts";
import {apiSlice} from "../features/api/APISlice.ts";
// ...

const rootReducer = combineReducers({
    forecast: forecastSlice,
})


const createStore = configureStore({
    reducer: {
        forecast: forecastSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer:  rootReducer,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
        preloadedState
    })
}


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer> //ReturnType<typeof createStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof createStore.dispatch
export type TestStore = typeof setupStore;
export default createStore;