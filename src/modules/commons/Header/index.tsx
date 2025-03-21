import Image from "next/image";
import HeaderSearch from "./components/HeaderSearch";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white drop-shadow-lg z-1">
      <div className="w-container max-w-full min-h-[60px] mx-auto flex items-center justify-between">
        <Image
          src="/assets/images/rizzkijo.svg"
          alt="Logo"
          width={100}
          height={35}
        />

        <HeaderSearch />
      </div>
    </div>
  );
};

export default Header;
