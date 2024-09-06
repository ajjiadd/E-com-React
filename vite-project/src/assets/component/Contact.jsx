
import './css/ContactSection.css'; // Import the CSS file

function ContactSection() {
  return (
    <section style={styles.contactSection}>
      <div className="contact-container">
        <h2 style={styles.sectionTitle}>Get in Touch</h2>
        <p style={styles.sectionSubtitle}>We’d love to hear from you! Reach out to us for any questions, feedback, or support.</p>
        <div className="contact-info">
          <div className="contact-item">
            <h3 style={styles.contactTitle}>Address</h3>
            <p style={styles.contactText}>1234 E-commerce St,<br />Suite 100,<br />City, State, 12345</p>
          </div>
          <div className="contact-item">
            <h3 style={styles.contactTitle}>Phone</h3>
            <p style={styles.contactText}>(123) 456-7890</p>
          </div>
          <div className="contact-item">
            <h3 style={styles.contactTitle}>Email</h3>
            <p style={styles.contactText}>support@yourdomain.com</p>
          </div>
        </div>
        <form className="contact-form">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="contact-input" 
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="contact-input" 
            required 
          />
          <textarea 
            placeholder="Your Message" 
            className="contact-textarea" 
            rows="5" 
            required 
          ></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

const styles = {
  contactSection: {
    padding: '60px 20px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '36px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    fontSize: '18px',
    marginBottom: '40px',
    color: '#555',
  },
  contactTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  contactText: {
    fontSize: '16px',
    color: '#333',
  },
};

export default ContactSection;
