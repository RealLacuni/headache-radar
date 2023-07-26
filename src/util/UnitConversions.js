
const KelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
}

const KelvinToFahrenheit = (kelvin) => {
    return (kelvin - 273.15) * 9 / 5 + 32;
}

const CelsiusToFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
}

const FahrenheitToCelsius = (celsius) => {
    return (celsius - 32) * 5 / 9;
}

const hPaToInHg = (hPa) => {
    return hPa * 0.02953;
}

export { KelvinToCelsius, KelvinToFahrenheit, CelsiusToFahrenheit, FahrenheitToCelsius, hPaToInHg };

