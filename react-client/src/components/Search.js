import React from 'react';

const Search = ({ setFiltered, filtered, recipes }) => {

    const handleSearch = (event) => {
        setFiltered(recipes.filter(e => {
            return e.title.toLowerCase().includes(event.target.value.toLowerCase())
        }))
    }
    return (
        <div className='searchForm'>
            <input type="text" placeholder="search here ..." className='search' onChange={handleSearch} />
            <button className='searchButton'>&#x1F50E;</button>
        </div>
    )
}
export default Search