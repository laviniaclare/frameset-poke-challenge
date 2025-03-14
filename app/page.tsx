interface Pokemon {
  name: string;
  id: string;
}

interface PokemonResponse {
  results: Pokemon[];
}

export default async function Home() {
  
  const data = await fetch('https://pokeapi.co/api/v2/pokemon')
  const allPokemon:PokemonResponse = await data.json()


  return (
    <div 
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-green-200 text-purple-900"
    >
      <main className="flex flex-col gap-[10px] row-start-2 items-center sm:items-start">
      <h1 className="text-5xl">A little pokemon app</h1>
        <h2 className="text-2xl text-center">
          Click on a pokemon to see it's stats
        </h2>
        <ul className="pt-[25px]">
          {allPokemon.results.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
