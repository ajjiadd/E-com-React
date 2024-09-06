
import './css/BlogNewsSection.css'; // Import the CSS file

function BlogNewsSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Perfect Product for Your Needs',
      image: 'https://your-image-url.com/blog-post1.jpg',
      excerpt: 'Discover tips and tricks for selecting the best products to meet your needs and preferences.',
      date: 'August 15, 2024',
      link: '/blog/1',
    },
    {
      id: 2,
      title: 'Top 10 Trends in E-commerce for 2024',
      image: 'https://your-image-url.com/blog-post2.jpg',
      excerpt: 'Stay ahead of the curve with the latest trends and innovations shaping the e-commerce industry this year.',
      date: 'August 22, 2024',
      link: '/blog/2',
    },
    {
      id: 3,
      title: 'How to Maximize Your Shopping Experience with Us',
      image: 'https://your-image-url.com/blog-post3.jpg',
      excerpt: 'Learn how to make the most of our features and services to enhance your shopping experience.',
      date: 'August 29, 2024',
      link: '/blog/3',
    },
  ];

  return (
    <section style={styles.blogNewsSection}>
      <h2 style={styles.sectionTitle}>Latest Blog Posts</h2>
      <div className="blog-news-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-news-card">
            <img src={post.image} alt={post.title} className="blog-news-image" />
            <div className="blog-news-content">
              <h3 className="blog-news-title">{post.title}</h3>
              <p className="blog-news-excerpt">{post.excerpt}</p>
              <p className="blog-news-date">{post.date}</p>
              <a href={post.link} className="blog-news-link">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  blogNewsSection: {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '36px',
    marginBottom: '40px',
    fontWeight: 'bold',
  },
};

export default BlogNewsSection;
