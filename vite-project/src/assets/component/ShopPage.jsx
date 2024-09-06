
import ProductFilter from './ProductFilter'; // Product Filter Component
import ProductGrid from './ProductGrid'; // Product Grid Component
import SearchBar from './SearchBar';
import './css/ShopPage.css'; // Custom CSS for layout

const ShopPage = () => {
  return (
    <div className="shop-page">
      <div className="filter-section">
        <ProductFilter />
      </div>
      <div className="grid-section">
        <SearchBar/>
        <ProductGrid/>
      </div>
    </div>
  );
};

export default ShopPage;
