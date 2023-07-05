import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import React from "react";

const ErrorPage = () : React.ReactElement =>
{
    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error)) {
        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText}</i>
                </p>
            </div>
        );
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    )
}

export default ErrorPage;