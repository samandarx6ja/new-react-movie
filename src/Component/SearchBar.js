import { useState, useContext } from "react"

import ShowsContext from "../context/shows/showsContext";
import Alert from "./Alert";

const SearchBar = () => {

	const [searchTerm, setSearchTerm] = useState("");

	const showsContext = useContext(ShowsContext);
	const { searchShows } = showsContext;

	const onSearchHendler = (e) =>{
		e.preventDefault();
		
		searchShows(searchTerm);
		
	};

  return (
	<div className="searchbar">
		<Alert messasge='Please enter something' type="danger" />
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