// PokemonCard component displays individual Pokémon details
import React from "react";
import Link from "next/link";

const PokemonCard = ({ pokemon }) => (
  <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
    <Link href={`/pokemon/${pokemon.name}`} className="block p-4 text-center">
      <div className="mb-4">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-32 h-32 mx-auto"
        />
      </div>
      <h2 className="text-xl font-bold capitalize text-gray-800">
        {pokemon.name}
      </h2>
    </Link>
  </div>
);

export default PokemonCard;
