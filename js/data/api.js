const url = "https://solar-system-wine-six.vercel.app/api/bodies";

export async function getMoons(planet) {
  const response = await fetch(`${url}/${planet}`);
  const planetData = await response.json();

  // Si moons n'existe pas ou n'est pas un tableau → tableau vide
  if (!Array.isArray(planetData.moons)) {
    return [];
  }
  console.log(planetData.moons.map((moon) => moon.moon));
  // On retourne un tableau de noms de lunes
  return planetData.moons.map((moon) => moon.moon);
}
