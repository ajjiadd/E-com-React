

function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Logo on the left side */}
      <div style={styles.logo}>
        <img src="your-logo-url.png" alt="Logo" style={styles.logoImage} />
      </div>
      
      {/* Navigation options on the right side */}
      <ul style={styles.navItems}>
        <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
        <li style={styles.navItem}><a href="#shop" style={styles.navLink}>Shop</a></li>
        <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
        <li style={styles.navItem}><a href="#login" style={styles.navLink}>Login</a></li>
      </ul>
    </nav>
  );
}

// Inline styles for simplicity
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    flex: 1,
  },
  logoImage: {
    height: '40px',
  },
  navItems: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
