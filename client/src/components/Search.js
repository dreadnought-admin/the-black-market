import React from 'react'

const Search = ({ setSearch }) => {

  const handleChange = (e) => setSearch(e.target.value)


  return (
    <div>
      <label htmlFor='search'>Search</label>
      <input
      className="input"
      autoComplete="off"
      type="text"
      id="search"
      placeholder="Search bar"
      onChange={handleChange}
      />
    </div>
  )
}

export default Search