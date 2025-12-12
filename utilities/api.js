const url = "https://solar-system-wine-six.vercel.app/api/bodies";

export async function getMoons(planet) {
  const response = await fetch(url + `/${planet}`);
  const planetData = await response.json();
  const moons = planetData.moons;
  if (moons) {
    planetData.moons = moons.map((moon) => moon.moon);
  }
  return planetData.moons || [];
}
