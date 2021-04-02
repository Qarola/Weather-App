import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input
        type="text"
        placeholder="Search for a city..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
}



