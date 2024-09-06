
import './css/TestimonialsSection.css'; // Import the CSS file

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      image: 'https://your-image-url.com/john.jpg',
      review: 'Great service and excellent products! Im a regular customer and always satisfied.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'https://your-image-url.com/jane.jpg',
      review: 'Amazing quality and fast shipping. Highly recommend this store!',
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      image: 'https://your-image-url.com/alice.jpg',
      review: 'I love the variety and the customer service is top-notch!',
      rating: 4.8,
    },
  ];

  return (
    <section style={styles.testimonialsSection}>
      <h2 style={styles.sectionTitle}>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-info">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-review">{testimonial.review}</p>
              <p className="testimonial-rating">Rating: {testimonial.rating} ⭐</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  testimonialsSection: {
    padding: '60px 20px',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '36px',
    marginBottom: '40px',
    fontWeight: 'bold',
  },
};

export default TestimonialsSection;
