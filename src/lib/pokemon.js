//API calling for the pokemon details by name
export async function getPokemonData(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch Pokémon data");
  }
  const pokemon = await res.json();
  return pokemon;
}
