
import './css/CategoriesSection.css'; // Import the CSS file


function CategoriesSection_V2() {
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG8A53NIHFzWO6a3PtPTY10NlyUZ0o_f4M5A&s',
      link: '/womens-fashion',
    },
    {
      id: 3,
      name: 'Men Pants',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8mGEZhoghIyjTsM44N8sniwXPlRzFPM3Bw&s',
      link: '/electronics',
    },
    {
      id: 4,
      name: 'Saree',
      image: 'https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-turquoiseblue-stonework-satin-designer-saree-saus0032198_turquoise_blue_1_7_large.jpg?v=1706615108',
      link: '/home-kitchen',
    },
    {
      id: 5,
      name: 'Shirts',
      image: 'https://m.media-amazon.com/images/I/61owdlDd7wL._AC_SL1500_.jpg',
      link: '/beauty-health',
    },
    {
      id: 6,
      name: 'Ornaments',
      image: 'https://3.imimg.com/data3/BH/RC/MY-11695756/gold-ornament-500x500.jpg',
      link: '/sports-outdoors',
    },
  ];

  return (
    <section style={styles.categoriesSection}>
      <h2 style={styles.sectionTitle}>Shop by Category</h2>
      <div className="categories-carousel">
        <div className="categories-wrapper">
          {categories.map((category) => (
            <a key={category.id} href={category.link} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-overlay">
                <h3 className="category-name">{category.name}</h3>
              </div>
            </a>
          ))}
          {/* Duplicate the categories for continuous sliding effect */}
          {categories.map((category) => (
            <a key={`dup-${category.id}`} href={category.link} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-overlay">
                <h3 className="category-name">{category.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  categoriesSection: {
    padding: '60px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: '36px',
    marginBottom: '40px',
    fontWeight: 'bold',
  },
};

export default CategoriesSection_V2;
