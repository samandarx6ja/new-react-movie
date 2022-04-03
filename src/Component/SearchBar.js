import { useState, useContext } from "react"

import ShowsContext from "../context/shows/showsContext";
import AlertsContext from "../context/alerts/alertsContext";
import Alert from "./Alert";

const SearchBar = () => {

	const [searchTerm, setSearchTerm] = useState("");

	const showsContext = useContext(ShowsContext);
	const { searchShows } = showsContext;
	const {alert, setAlert} = useContext(AlertsContext);
	const onSearchHendler = (e) =>{
		e.preventDefault();
		if(searchTerm === ""){
			setAlert("Please enter something", "danger")
		} else{
			searchShows(searchTerm)
		}
		searchShows(searchTerm)

	};

  return (
	<div className="searchbar">
		{alert ? <Alert message={alert.message} type={alert.type} />: null}
		
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