
import './css/MapLocation.css'; // Import the CSS file

const MapLocation = () => {
  return (
    <div className="map-location">
      <h2>Our Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29187.153874033753!2d90.2813327252433!3d23.875635240019676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c23dd12bbc75%3A0x313d214552eabe56!2sDaffodil%20Smart%20City%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1725588776678!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default MapLocation;
