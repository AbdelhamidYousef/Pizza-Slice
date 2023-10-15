import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUsername } from "../../../data/slices/userSlice";

const Header = () => {
  const [query, setQuery] = useState("");
  const username = useSelector(getUsername);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length > 0) navigate(`/order/${query}`);
  };

  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 sm:px-6">
      <Link className="tracking-widest uppercase" to="/">
        Pizza Slice
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search order #"
          required={true}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        />
      </form>

      {username && (
        <p className="hidden text-sm uppercase font-semibold md:block">
          {username}
        </p>
      )}
    </header>
  );
};

export default Header;
