
import './css/NewArrivalsSection.css'; // Import the CSS file

function NewArrivalsSection() {
  const newArrivals = [
    {
      id: 1,
      name: 'New Product 1',
      image: 'https://your-image-url.com/new-product1.jpg',
      price: '$59.99',
      link: '/product/1',
    },
    {
      id: 2,
      name: 'New Product 2',
      image: 'https://your-image-url.com/new-product2.jpg',
      price: '$79.99',
      link: '/product/2',
    },
    {
      id: 3,
      name: 'New Product 3',
      image: 'https://your-image-url.com/new-product3.jpg',
      price: '$39.99',
      link: '/product/3',
    },
    {
      id: 4,
      name: 'New Product 4',
      image: 'https://your-image-url.com/new-product4.jpg',
      price: '$99.99',
      link: '/product/4',
    },
  ];

  return (
    <section style={styles.newArrivalsSection}>
      <h2 style={styles.sectionTitle}>New Arrivals</h2>
      <div className="new-arrivals-grid">
        {newArrivals.map((product) => (
          <a key={product.id} href={product.link} className="new-arrivals-card">
            <img src={product.image} alt={product.name} className="new-arrivals-image" />
            <div className="new-arrivals-info">
              <h3 className="new-arrivals-name">{product.name}</h3>
              <p className="new-arrivals-price">{product.price}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

const styles = {
  newArrivalsSection: {
    padding: '60px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '36px',
    marginBottom: '40px',
    fontWeight: 'bold',
  },
};

export default NewArrivalsSection;
