import React from 'react'

const Search = ({ setSearch }) => {

  const handleChange = (e) => setSearch(e.target.value)


  return (
    <div className="searchBar"> 
    <div>
      <label className="search_label" htmlFor='search'>Search</label>
      <input
      className="input"
      autoComplete="off"
      type="text"
      id="search"
      placeholder="Search bar"
      onChange={handleChange}
      />
    </div>
    </div>
  )
}

export default Search