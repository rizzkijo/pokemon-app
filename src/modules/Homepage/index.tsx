import { usePokemonList } from "./api-request";
import { PokemonCardProps } from "../commons/types";
import PokemonCard from "../commons/PokemonCard";

const Homepage = () => {
  const { data } = usePokemonList(['pokemonList'], {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "",
    },
  });
  const pokemonList = data?.results || [];
  console.log('jotest data', data);

  return (
    <div className="grid grid-cols-5 gap-2">
      {pokemonList?.map((list : PokemonCardProps, index: number) => 
        <PokemonCard key={index} name={list?.name} url={list?.url} />
      )}
    </div>
  )
};

export default Homepage;
