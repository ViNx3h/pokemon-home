// src/declarations.d.ts
declare module "pokemonDetail/PokemonDetail" {
    const PokemonDetail: React.FC<{ data: string }>;
    export default PokemonDetail;
  }
  
  declare module "pokemonList/Pokemon" {
    const usePokemonSelected: () => [Pokemon];
    export default usePokemonSelected;
  
    interface Pokemon {
      name: string;
      sprite: string;
    }
  }
  
  declare module "pokemonList/PokemonList" {
    const PokemonList: React.FC;
    export default PokemonList;
  }
  