
import "./css/ProductGrid.css"; // Assuming you'll create a custom CSS file for this component

const ProductGrid = () => {
  const products = [
    {
      title: "Mens Premium T-Shirt - Distortion",
      oldPrice: 685,
      discountedPrice: 599,
      savings: 86,
      imageUrl: "https://fabrilife.com/products/66a60f553f5d5-square.jpg?v=20",
    },
    {
      title: "Mens Premium T-Shirt - Distortion",
      oldPrice: 685,
      discountedPrice: 599,
      savings: 86,
      imageUrl: "https://fabrilife.com/products/66a60f553f5d5-square.jpg?v=20",
    },
    {
      title: "Mens Premium T-Shirt - Distortion",
      oldPrice: 685,
      discountedPrice: 599,
      savings: 86,
      imageUrl: "https://fabrilife.com/products/66a60f553f5d5-square.jpg?v=20",
    },
    {
      title: "Mens Premium T-Shirt - Distortion",
      oldPrice: 685,
      discountedPrice: 599,
      savings: 86,
      imageUrl: "https://fabrilife.com/products/66a60f553f5d5-square.jpg?v=20",
    },
    {
      title: "Mens Premium T-Shirt - Distortion",
      oldPrice: 685,
      discountedPrice: 599,
      savings: 86,
      imageUrl: "https://fabrilife.com/products/66a60f553f5d5-square.jpg?v=20",
    },
    {
      title: "Mens Premium T-Shirt - Distortion",
      oldPrice: 685,
      discountedPrice: 599,
      savings: 86,
      imageUrl: "https://fabrilife.com/products/66a60f553f5d5-square.jpg?v=20",
    },
    {
      title: "Mens Premium T-Shirt - Distortion",
      oldPrice: 685,
      discountedPrice: 599,
      savings: 86,
      imageUrl: "https://fabrilife.com/products/66a60f553f5d5-square.jpg?v=20",
    },
    {
      title: "Mens Premium T-Shirt - Distortion",
      oldPrice: 685,
      discountedPrice: 599,
      savings: 86,
      imageUrl: "https://fabrilife.com/products/66a60f553f5d5-square.jpg?v=20",
    },
    {
      title: "Mens Premium T-Shirt - Distortion",
      oldPrice: 685,
      discountedPrice: 599,
      savings: 86,
      imageUrl: "https://fabrilife.com/products/66a60f553f5d5-square.jpg?v=20",
    },
    {
      title: "Mens Premium T-Shirt - Distortion",
      oldPrice: 685,
      discountedPrice: 599,
      savings: 86,
      imageUrl: "https://fabrilife.com/products/66a60f553f5d5-square.jpg?v=20",
    },
    {
      title: "Mens Premium T-Shirt - Distortion",
      oldPrice: 685,
      discountedPrice: 599,
      savings: 86,
      imageUrl: "https://fabrilife.com/products/66a60f553f5d5-square.jpg?v=20",
    },
    {
      title: "Mens Premium T-Shirt - Distortion",
      oldPrice: 685,
      discountedPrice: 599,
      savings: 86,
      imageUrl: "https://fabrilife.com/products/66a60f553f5d5-square.jpg?v=20",
    },
    // Add more products as needed
  ];

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-image-container">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="product-image"
            />
            <div className="sale-badge">SALE</div>
          </div>
          <div className="product-title">{product.title}</div>
          <div className="product-price">
            <span className="old-price">৳{product.oldPrice}</span>
            <span className="discounted-price">৳{product.discountedPrice}</span>
          </div>
          <div className="savings">Save Tk. {product.savings}</div>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
