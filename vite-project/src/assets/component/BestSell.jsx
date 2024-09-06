
import './css/BestSellerSection.css'; // Import the CSS file

function BestSellerSection() {
  const bestSellers = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://your-image-url.com/product1.jpg',
      price: '$49.99',
      rating: 4.5,
      link: '/product/1',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://your-image-url.com/product2.jpg',
      price: '$69.99',
      rating: 4.7,
      link: '/product/2',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://your-image-url.com/product3.jpg',
      price: '$29.99',
      rating: 4.3,
      link: '/product/3',
    },
    {
      id: 4,
      name: 'Product 4',
      image: 'https://your-image-url.com/product4.jpg',
      price: '$89.99',
      rating: 4.8,
      link: '/product/4',
    },
  ];

  return (
    <section style={styles.bestSellerSection}>
      <h2 style={styles.sectionTitle}>Best Sellers</h2>
      <div className="best-seller-grid">
        {bestSellers.map((product) => (
          <a key={product.id} href={product.link} className="best-seller-card">
            <img src={product.image} alt={product.name} className="best-seller-image" />
            <div className="best-seller-info">
              <h3 className="best-seller-name">{product.name}</h3>
              <p className="best-seller-price">{product.price}</p>
              <p className="best-seller-rating">Rating: {product.rating} ⭐</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

const styles = {
  bestSellerSection: {
    padding: '60px 20px',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '36px',
    marginBottom: '40px',
    fontWeight: 'bold',
  },
};

export default BestSellerSection;
