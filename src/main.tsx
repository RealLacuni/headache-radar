import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import Home from "./routes/Home.tsx";
import Forecast from "./routes/Forecast.tsx";
// import createStore from "./store/store.ts";
// import {Provider} from "react-redux";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home/>,
            },
            {
                path: "/forecast",
                element: <Forecast/>,
            },
            {
                path: "/account",
                element: <div>Account</div>,
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router}/>
        )