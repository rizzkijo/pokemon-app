import { Search } from "lucide-react";

const HeaderSearch = () => {
  return (
    <div
      className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]
      w-[300px] max-w-full"
    >
      <div className="relative w-full">
        <input type="text" className="input" placeholder="Search here..." />
        <Search size={16} className="absolute top-[50%] -translate-y-[50%] right-[20px]" />
      </div>
    </div>
  );
};

export default HeaderSearch;
