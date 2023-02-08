import React from 'react'

const Search = ({ setSearch }) => {


  const handleChange = (e) => setSearch(e.target.value)

  return (
    <div>
      <p>this will be your search box</p>
    </div>
  )
}

export default Search
