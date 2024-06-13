import Link from "next/link";
import { notFound } from "next/navigation";
import { getPokemonData } from "../../../lib/pokemon";
//this component is for veiewing the details of pokemon
export default async function PokemonDetail({ params }) {
  const { name } = params;
  //get details
  const pokemon = await getPokemonData(name);

  //if notFound pokemon details
  if (!pokemon) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <Link href="/">
            <button className="text-blue-500 hover:text-blue-700 font-semibold">
              Back to Home
            </button>
          </Link>
          <div className="mt-4">
            <h1 className="text-3xl font-bold text-gray-800 capitalize">
              {pokemon.name}
            </h1>
            <div className="flex justify-center my-4">
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-40 h-40"
              />
            </div>
            <div className="text-gray-700">
              <p className="text-lg">
                <span className="font-semibold">Height:</span> {pokemon.height}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Weight:</span> {pokemon.weight}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Type:</span>{" "}
                {pokemon.types.map((type) => type.type.name).join(", ")}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Abilities:</span>{" "}
                {pokemon.abilities
                  .map((ability) => ability.ability.name)
                  .join(", ")}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Stats:</span>{" "}
                {pokemon.stats
                  .map((stat) => `${stat.stat.name}: ${stat.base_stat}`)
                  .join(", ")}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Moves:</span>{" "}
                {pokemon.moves
                  .slice(0, 5)
                  .map((move) => move.move.name)
                  .join(", ")}
              </p>
              {/* You can add more details or modify the display as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
