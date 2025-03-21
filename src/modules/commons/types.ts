export type FetchOptionsProps = {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  }
}

export type PokemonCardProps = {
  name: string;
  url: string;
}
