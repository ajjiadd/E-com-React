
import './css/NewsletterSignupSection.css'; // Import the CSS file

function NewsletterSignupSection() {
  return (
    <section style={styles.newsletterSection}>
      <div className="newsletter-container">
        <h2 style={styles.sectionTitle}>Stay Updated!</h2>
        <p style={styles.sectionSubtitle}>Subscribe to our newsletter and get the latest news, offers, and updates directly to your inbox.</p>
        <form className="newsletter-form">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="newsletter-input" 
            required 
          />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

const styles = {
  newsletterSection: {
    padding: '60px 20px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '36px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    fontSize: '18px',
    marginBottom: '30px',
  },
};

export default NewsletterSignupSection;
