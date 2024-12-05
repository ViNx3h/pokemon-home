import PokemonDetail from "pokemonDetail/PokemonDetail";
import usePokemonSelected from "pokemonList/Pokemon";
import PokemonList from "pokemonList/PokemonList";

import "./App.css";

const App: React.FC = () => {
  const [pokemon] = usePokemonSelected();

  return (
    <>
      <PokemonList />
      {pokemon && (
        <div className="container">
          <h1 style={{ color: "#1e3a8a" }}>Selected Pokémon:</h1>
          <div className="pokemon-card-container">
            <img
              src={pokemon?.sprite}
              className="pokemon-image"
              aria-label="Image of Pokemon Selected"
            />
            <label className="pokemon-name">{pokemon?.name}</label>
          </div>
          <PokemonDetail data={pokemon.name} />
        </div>
      )}
    </>
  );
};

export default App;
