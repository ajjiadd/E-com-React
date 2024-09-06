

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* About Us Section */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>About Us</h4>
          <p style={styles.sectionContent}>
            We are a leading e-commerce platform providing a wide range of products at the best prices.
          </p>
        </div>

        {/* Customer Service Section */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Customer Service</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="#help" style={styles.link}>Help & FAQs</a></li>
            <li style={styles.listItem}><a href="#shipping" style={styles.link}>Shipping & Delivery</a></li>
            <li style={styles.listItem}><a href="#returns" style={styles.link}>Returns & Refunds</a></li>
            <li style={styles.listItem}><a href="#contact" style={styles.link}>Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Follow Us</h4>
          <ul style={styles.socialMedia}>
            <li style={styles.socialItem}><a href="#facebook" style={styles.link}>Facebook</a></li>
            <li style={styles.socialItem}><a href="#instagram" style={styles.link}>Instagram</a></li>
            <li style={styles.socialItem}><a href="#twitter" style={styles.link}>Twitter</a></li>
            <li style={styles.socialItem}><a href="#linkedin" style={styles.link}>LinkedIn</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Contact Information</h4>
          <p style={styles.sectionContent}>
            Email: support@yourstore.com
          </p>
          <p style={styles.sectionContent}>
            Phone: +1 (800) 123-4567
          </p>
          <p style={styles.sectionContent}>
            Address: 123 E-commerce St, Shopville, USA
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>© 2024 YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Inline styles for simplicity
const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: '50px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  section: {
    flex: '1 1 200px',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    textTransform: 'uppercase',
  },
  sectionContent: {
    fontSize: '14px',
    lineHeight: '1.6',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    listStyle: 'none',
  },
  socialItem: {
    margin: '0 10px',
  },
  bottomBar: {
    backgroundColor: '#222',
    padding: '10px 0',
    marginTop: '20px',
  },
  bottomText: {
    margin: 0,
    fontSize: '14px',
  },
};

export default Footer;
