import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root from "./routes/Root.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import Home from "./routes/Home.tsx";

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
                element: <div>Forecast</div>,
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