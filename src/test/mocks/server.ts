import { setupServer } from 'msw/node'
import {rest} from "msw";
import * as data from "../../assets/forecastJSON.json";

export const server = setupServer(
    rest.get('http://localhost:5031/api/forecast', (_, res, ctx) => {
        // successful response
        return res(ctx.status(200), ctx.json(data), ctx.delay(30))
    })
)
