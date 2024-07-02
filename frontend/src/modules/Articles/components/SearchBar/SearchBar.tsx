import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="relative rounded-[15px] shadow-[0_0_3px_3px_#C8C8C8]">
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search..."
        className="w-full bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
