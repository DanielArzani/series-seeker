import SearchBar from '@/app/components/SearchBar/SearchBar';

/**
 * The form for searching through the list of movies/tv-series and bookmarked content
 */
export default function SearchForm() {
  return (
    <form className='search-form'>
      <SearchBar />
    </form>
  );
}
