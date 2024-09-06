

function CategoriesSection() {
  // Sample category data - replace with your dynamic data
  const categories = [
    {
      id: 1,
      name: 'Men\'s Fashion',
      image: 'https://fabrilife.com/products/65278f8693e7e-square.jpeg?v=20',
      link: '/mens-fashion',
    },
    {
      id: 2,
      name: 'Women\'s Fashion',
      image: 'https://images.othoba.com/images/thumbs/0558956_womens-half-silk-skin-print-saree.jpeg',
      link: '/womens-fashion',
    },
    {
      id: 3,
      name: 'Electronics',
      image: 'https://your-image-url.com/electronics.jpg',
      link: '/electronics',
    },
    {
      id: 4,
      name: 'Home & Kitchen',
      image: 'https://your-image-url.com/home-kitchen.jpg',
      link: '/home-kitchen',
    },
    {
      id: 5,
      name: 'Beauty & Health',
      image: 'https://your-image-url.com/beauty-health.jpg',
      link: '/beauty-health',
    },
    {
      id: 6,
      name: 'Sports & Outdoors',
      image: 'https://your-image-url.com/sports-outdoors.jpg',
      link: '/sports-outdoors',
    },
  ];

  return (
    <section style={styles.categoriesSection}>
      <h2 style={styles.sectionTitle}>Shop by Category</h2>
      <div style={styles.categoriesGrid}>
        {categories.map((category) => (
          <a key={category.id} href={category.link} style={styles.categoryCard}>
            <img src={category.image} alt={category.name} style={styles.categoryImage} />
            <div style={styles.categoryOverlay}>
              <h3 style={styles.categoryName}>{category.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

const styles = {
  categoriesSection: {
    padding: '60px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '36px',
    marginBottom: '40px',
    fontWeight: 'bold',
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  categoryCard: {
    position: 'relative',
    display: 'block',
    borderRadius: '10px',
    overflow: 'hidden',
    textDecoration: 'none',
    color: '#ffffff',
    transition: 'transform 0.3s ease-in-out',
  },
  categoryCardHover: {
    transform: 'scale(1.05)',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  categoryOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: '24px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
};

export default CategoriesSection;
