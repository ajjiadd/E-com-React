

function FeaturedProducts() {
  // Sample product data - replace this with your dynamic data
  const products = [
    {
      id: 1,
      name: 'Classic Denim Jacket',
      price: '$59.99',
      image: 'https://your-image-url.com/product1.jpg',
      description: 'A stylish denim jacket perfect for any occasion.',
    },
    {
      id: 2,
      name: 'Leather Boots',
      price: '$89.99',
      image: 'https://your-image-url.com/product2.jpg',
      description: 'Durable and fashionable leather boots for all seasons.',
    },
    {
      id: 3,
      name: 'Smartwatch Series 5',
      price: '$199.99',
      image: 'https://your-image-url.com/product3.jpg',
      description: 'Keep track of your fitness and notifications with style.',
    },
    {
      id: 4,
      name: 'Sunglasses Collection',
      price: '$29.99',
      image: 'https://your-image-url.com/product4.jpg',
      description: 'Trendy sunglasses to keep you looking cool and protected.',
    },
  ];

  return (
    <section style={styles.featuredSection}>
      <h2 style={styles.sectionTitle}>Featured Products</h2>
      <div style={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>{product.price}</p>
            <p style={styles.productDescription}>{product.description}</p>
            <button style={styles.addToCartButton}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  featuredSection: {
    padding: '60px 20px',
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '36px',
    marginBottom: '40px',
    fontWeight: 'bold',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  productCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    transition: 'transform 0.3s ease-in-out',
  },
  productCardHover: {
    transform: 'translateY(-5px)',
  },
  productImage: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  productName: {
    fontSize: '22px',
    marginBottom: '10px',
  },
  productPrice: {
    fontSize: '18px',
    color: '#ff6347',
    marginBottom: '10px',
  },
  productDescription: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '15px',
  },
  addToCartButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#ff6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default FeaturedProducts;
