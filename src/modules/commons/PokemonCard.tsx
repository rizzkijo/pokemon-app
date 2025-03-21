import Link from "next/link";
import { PokemonCardProps } from "./types";

const PokemonCard = ({ name, url }: PokemonCardProps) => {
  const id = url.split('/').filter(Boolean).pop();

  return (
    <Link
      href={`/pokemon/${id}`}
      className="inline-block group relative drop-shadow
      transition-all duration-[0.25s] ease-[ease-in-out]
      bg-white border border-white rounded overflow-hidden
      hover:drop-shadow-lg p-4"
    >
      <div className="font-bold">
        {name}
      </div>
    </Link>
  );
};

export default PokemonCard;
