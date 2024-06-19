import React from 'react'
import { useSelector } from 'react-redux';


const SearchResults = () => {
    const searchResults = useSelector((state) => state.search.searchResults);

  return (
    <ul>
      {searchResults.map((result) => (
        <li key={result.id}>{result.name}</li>
      ))}
    </ul>
  )
}

export default SearchResults