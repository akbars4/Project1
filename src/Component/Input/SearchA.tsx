import React, { useState } from "react";
import { Input } from "antd";

const SearchA = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("SearchA: ", search);
  };
  return (
    <div className="flex w-56 mt-10 mb-20">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchA;
