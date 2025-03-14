import Link from 'next/link';

interface PokemonResponse {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
}

export default async function PokemonDetailsPage({
    params,
  }: {
    params: Promise<{ pokemonName: string }>
  }) {
    const { pokemonName } = await params

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const pokemonStats:PokemonResponse = await data.json()

    return (
    <div className="flex flex-col items-center p-8 gap-5">
      <nav className="w-full mb-4">
        <Link className="text-orange-600 underline" href="/">
        &lt; back
        </Link>
      </nav>
      <h1 className="text-5xl">{pokemonName}</h1>
      <img src={pokemonStats.sprites.front_default} alt={pokemonStats.name} />
      <p>Height: {pokemonStats.height}</p>
      <p>Weight: {pokemonStats.weight}</p>
      <p>Type: {pokemonStats.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      <p>Abilities: {pokemonStats.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
      <Link className="text-orange-600 underline" href={`https://bulbapedia.bulbagarden.net/wiki/${pokemonName}_(Pokémon)`}>
          View more details on Bulbapedia
      </Link>
    </div>
    )
  }