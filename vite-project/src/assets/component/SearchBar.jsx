
import './css/SearchBar.css'; // Create this CSS file for styling

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search products..." />
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default SearchBar;
