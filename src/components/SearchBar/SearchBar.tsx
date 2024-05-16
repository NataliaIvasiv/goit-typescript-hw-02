import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

interface onSearchType {
  onSearch: (searchValue: string) => void
}

const SearchBar: React.FunctionComponent<onSearchType> = ({onSearch})=> {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchField = form.elements.namedItem("search") as HTMLInputElement;
    const topic = searchField.value.trim();
     if (!topic) {
      toast.error('You should add your query. What images would you like to see? ')
       return;
     }
    
    onSearch(topic);
   
    form.reset();
    }

    return (
  <form className={css.searchBarForm}  onSubmit={handleSubmit}>
    <input className={css.searchBarInput} name='search'
      type="text"
      autoComplete="off"
      autoFocus
            placeholder="Search images and photos"
    />
    <button type="submit" className={css.searchBarButton}>Search</button>
  </form>

    )
}
export default SearchBar;

