import { useState } from "react"

const SearchBar = () => {

	const [searchTerm, setSearchTerm] = useState("");
	const onSearchHendler = e =>{
		e.preventDefault();
		console.log('search for term ' + searchTerm)
	}

  return (
	<div className="searchbar">
		<form className="searchbar__form">
			<input 
			type='text' 
			placeholder='Search for Tv show' 
			value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
			
			<button className="btn btn-block" onClick={onSearchHendler} >Search</button>
		</form>
	</div>
  )
}

export default SearchBar