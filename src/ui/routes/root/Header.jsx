import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link className="tracking-widest" to="/">
        Pizza Slice
      </Link>

      <form>
        <input
          placeholder="Search order #"
          className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        />
      </form>

      <div className="hidden text-sm font-semibold md:block">sfdfsd</div>
    </header>
  );
};

export default Header;
