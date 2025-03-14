import Link from 'next/link';

interface Pokemon {
  name: string;
  url: string;
}

interface AllPokemonResponse {
  results: Pokemon[];
}

export default async function Home() {
  
  const data = await fetch('https://pokeapi.co/api/v2/pokemon')
  const allPokemon:AllPokemonResponse = await data.json()


  return (
    <div 
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16"
    >
      <main className="flex flex-col gap-[10px] row-start-2 items-center sm:items-start">
      <h1 className="text-5xl">A little pokemon app</h1>
        <h2 className="text-2xl text-center">
          Click on a pokemon to see it's stats
        </h2>
        <ul className="pt-[25px]">
        {allPokemon.results.map((pokemon) => (
            <li key={pokemon.name}>
              <Link className="text-orange-600 underline" href={`/pokemonDetails/${pokemon.name}`}>
                {pokemon.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
