import React from 'react'

const SearchBar = (setQuery) => {
  const onChange=(event)=>{
    setQuery(event.target.value.toLowerCase())
  }
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input onChange={onChange} type="text" placeholder="Search for a country..." />
    </div>
  )
}

export default SearchBar
