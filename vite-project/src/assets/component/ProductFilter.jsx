
import './css/ProductFilter.css'; // Custom CSS file



const ProductFilter = () => {
  return (

    
        <div className="product-filter">

        <h4>Filter by</h4>
        <select className="filter-select">
        <option value="">Category</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="furniture">Furniture</option>
        
        </select>

        <h4>Price</h4>
        <input type="range" min="0" max="500" className="filter-range" />

        <h4>Brand</h4>
        <select className="filter-select">
        <option value="">Select Brand</option>
        <option value="brand1">Brand 1</option>
        <option value="brand2">Brand 2</option>
        
        </select>

        </div>
        
        
    
  );
};

export default ProductFilter;
