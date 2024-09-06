import { useState, useEffect } from 'react';
import ShopPage from './ShopPage';

function HeroSection() {
  const slides = [
    {
      image: 'https://your-image-url.com/hero-image1.jpg',
      title: 'Discover Your Style',
      subtitle: 'Shop the latest trends and enjoy amazing discounts.',
      buttonLabel: 'Shop Now',
    },
    {
      image: 'https://your-image-url.com/hero-image2.jpg',
      title: 'Summer Collection',
      subtitle: 'Fresh arrivals for the new season.',
      buttonLabel: 'Explore Now',
    },
    {
      image: 'https://your-image-url.com/hero-image3.jpg',
      title: 'Exclusive Offers',
      subtitle: 'Save big with our limited-time deals.',
      buttonLabel: 'Save Now',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section style={{ ...styles.hero, backgroundImage: `url(${slides[currentSlide].image})` }}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.title}>{slides[currentSlide].title}</h1>
          <p style={styles.subtitle}>{slides[currentSlide].subtitle}</p>
          <button onClick={<ShopPage/>} style={styles.button}>{slides[currentSlide].buttonLabel}</button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative',
    height: '80vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    transition: 'background-image 0.5s ease-in-out', // Smooth transition between slides
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay to improve text readability
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    textAlign: 'center',
    zIndex: 2, // Ensure content is above the overlay
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '24px',
    marginBottom: '30px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: '#ff6347', // Customize the button color
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    transition: 'background-color 0.3s ease',
  },
};

export default HeroSection;
