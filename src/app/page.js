"use client";
// Home page component in the app directory
import { useState, useEffect } from "react";
import SearchForm from "@/components/SearchForm";
import PokemonCard from "@/components/PokemonCard";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/type");
      const data = await res.json();
      setTypes(data.results);
    };

    fetchTypes();
    //Initial List show
    fetchPokemon("", "");
  }, []);

  const fetchPokemon = async (search, type) => {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=100";
    if (type) {
      url = `https://pokeapi.co/api/v2/type/${type}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    const results = type ? data.pokemon.map((p) => p.pokemon) : data.results;
    const filtered = search
      ? results.filter((p) => p.name.includes(search.toLowerCase()))
      : results;

    const detailedResults = await Promise.all(
      filtered.map(async (p) => {
        const res = await fetch(p.url);
        const data = await res.json();
        return {
          name: data.name,
          image: data.sprites.front_default,
        };
      })
    );
    console.log("detailedResults", detailedResults);
    setPokemon(detailedResults);
  };

  const handleSearch = ({ search, type }) => {
    fetchPokemon(search, type);
  };

  return (
    <div className="flex flex-col bg-gray-100 p-6">
      <h1 className="text-center text-[24px] py-2">Pokemon Search</h1>
      <SearchForm onSearch={handleSearch} types={types} />
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pokemon?.length > 0 ? (
          pokemon.map((p) => <PokemonCard key={p.name} pokemon={p} />)
        ) : (
          <div className="flex justify-center">
            <h1 className="text-center text-[16px] font-bold">
              No Pokemon Found
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
