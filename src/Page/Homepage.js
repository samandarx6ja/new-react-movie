import { useContext } from "react";
import ShowsContext from "../context/shows/showsContext"
import SearchBar from "../Component/SearchBar"
import ListItem from "../Component/ListItem";
const Homepage = () => {

  const showsContext = useContext(ShowsContext);
  const {loading, shows} = showsContext;
  return (
    <div className='homepage'>
      <SearchBar/>
      {
        loading ? (<h2>loading...</h2>) : 
        (
        <div className="homepage__list"> 
          {shows.map(item =>(
            <ListItem 
            key={item.show.id}
            id={item.show.id}
            image={item.show.image ? item.show.image.medium : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png" }
            name={item.show.name}
            rating={item.show.rating.average ? item.show.rating.average : "No rating" }
            />
          ))}
        </div>
        )
      }
    </div>
  )
}

export default Homepage