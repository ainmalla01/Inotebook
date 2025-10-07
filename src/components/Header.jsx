const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-900 text-white px-6 py-4 shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/images/logo.png" // if in public imaages
          alt="Logo"
          className="h-10 w-10"
        />
        <span className="text-xl font-bold">MyApp</span>
      </div>

      {/* Search */}

      {/* Sort / Filter + Select All */}
      <div className="flex items-center gap-4 w-[50%] px-2">
         <div className="flex-1 px-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 rounded-lg text-black outline-none"
        />
      </div>
        {/* Sort / Filter */}
   <select className="px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600">
  <option value="">Sort / Filter</option>
  <optgroup label="By Title">
  <option value="asc">Ascending</option>
  <option value="desc">Descending</option>
  </optgroup>
  <option value="date">By Date</option>
</select>


        {/* Select All */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="h-4 w-4" />
          <span>Select All</span>
        </label>
      </div>
    </header>
  );
};

export default Header;
