
import './css/AboutPage.css'; // Create this CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="intro">
        <h1>About Us</h1>
        <p>We are dedicated to providing exceptional service...</p>
      </section>
      
      <section className="our-story">
        <h2>Our Story</h2>
        <p>Founded in 2010, our company has grown from...</p>
      </section>

      <section className="our-team">
        <h2>Meet the Team</h2>
        {/* Team member profiles */}
      </section>

      <section className="values-culture">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Focus</li>
        </ul>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <p>We were awarded the Best Startup of the Year...</p>
      </section>

      <section className="our-approach">
        <h2>Our Approach</h2>
        <p>We follow a systematic approach to ensure...</p>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        {/* Customer testimonials */}
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: contact@yourdomain.com</p>
        <p>Phone: +123 456 7890</p>
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <a href="/contact" className="btn">Contact Us</a>
      </section>
    </div>
  );
};

export default AboutPage;
