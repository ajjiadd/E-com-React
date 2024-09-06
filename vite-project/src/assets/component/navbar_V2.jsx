
import './css/Navbar_V2.css'; // Import the CSS file

function Navbar_V2() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">STYLAXX</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="/cart" className="navbar-icon">🛒</a>
        <a href="/profile" className="navbar-icon">👤</a>
      </div>
    </nav>
  );
}

export default Navbar_V2;
