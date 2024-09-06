
import './css/CTASection.css'; // Import the CSS file

function CTASection() {
  return (
    <section style={styles.ctaSection}>
      <div className="cta-content">
        <h2 style={styles.ctaTitle}>Do not Miss Out on Our Exclusive Offers!</h2>
        <p style={styles.ctaSubtitle}>Limited time only. Shop now and get the best deals on our top products.</p>
        <a href="/shop" className="cta-button">Shop Now</a>
      </div>
    </section>
  );
}

const styles = {
  ctaSection: {
    padding: '80px 20px',
    backgroundColor: '#e91e63',
    color: '#fff',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '36px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  ctaSubtitle: {
    fontSize: '18px',
    marginBottom: '30px',
  },
};

export default CTASection;
