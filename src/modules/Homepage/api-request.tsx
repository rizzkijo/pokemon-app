import { useQuery } from "@tanstack/react-query";
import { FetchOptionsProps } from "@/src/modules/commons/types";

const usePokemonList = (
  queryKey: string[],
  fetchOptions: FetchOptionsProps,
  limit: number = 50,
) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, fetchOptions);
      return res.json();
    },
  });
};

export { usePokemonList };
