/**
 * @vitest-environment jsdom
 */

import {renderWithProviders} from "./test-utils.tsx";
import {screen} from "@testing-library/react";
import Forecast from "../routes/Forecast.tsx";
import { test } from "vitest"


describe("API tests", () => {

    test('setup is correct', async () => {
        expect(true).toBe(true);
    })

    test("should render the forecast", async () => {
        renderWithProviders(<Forecast/>) // renderWithProviders
        const forecast = await screen.findByText('Overview');
        expect(forecast).toBeInTheDocument();
    })
})


