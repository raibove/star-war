import "./Search.css"

const Search =  ({searchQuery, handleSearchChange})=>{
    return (
        <div className="search-container">
            <input type="text" className="search-input" value={searchQuery} onChange={(e)=> handleSearchChange(e.target.value)} placeholder="Type to search..."/>
        </div>
    )
}

export default Search;