// Import useSelector and useDispatch from react-redux
import { useSelector, useDispatch } from 'react-redux'; 
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice'; 
import css from "./SearchBox.module.css";

const SearchBox = () => {
    const dispatch = useDispatch(); 
    const filter = useSelector(selectNameFilter); 

    const handleSearchChange = (e) => {
        dispatch(changeFilter(e.target.value)); 
    }

    return (
        <div className={css.searchDiv}>
            <p>Find contacts by name</p>
            <input
                type="text"
                value={filter} 
                onChange={handleSearchChange}
                className={css.searchInput}
            />
        </div>
    )
}

export default SearchBox;
