type PLANET = "mercury" | "venus" | "earth" | "mars" | "jupiter" | "saturn" | "uranus" | "neptune";
type CONVERT_RATE = {
    [key in PLANET]: number;
};
const convert_rate: CONVERT_RATE = {
    "mercury": 0.2408467,
    "venus": 0.61519726,
    "earth": 1,
    "mars":  1.8808158,
    "jupiter": 11.862615,
    "saturn": 29.447498,
    "uranus": 84.016846,
    "neptune": 164.79132,
}
const earthYearSecond = 31557600;

export function age(planet: PLANET, seconds: number): number {
    return Math.round(100 * seconds / earthYearSecond / convert_rate[planet]) / 100;
}
