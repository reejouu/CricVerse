const AboutUs = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-6 md:px-20">
      {/* Hero Section */}
      <div className="text-center mb-16 mt-10">
        <h1 className="text-4xl font-bold text-green-400">About Us</h1>
        <p className="mt-4 text-lg text-gray-400">
          Get to know more about our cricket platform, our values, and the team behind the scenes.
        </p>
      </div>

      {/* Overview Section */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 mb-12 border border-gray-700 hover:border-green-500 transition-colors">
        <h2 className="text-3xl font-bold text-green-400 mb-4">Who We Are</h2>
        <p className="text-gray-400 text-lg">
          We are a passionate group of cricket enthusiasts who strive to bring you the latest updates, match analyses,
          player rankings, and news from the world of cricket. Our platform is designed to cater to all cricket lovers, from casual fans
          to die-hard supporters. Through real-time data, engaging content, and dynamic features, we aim to make cricket more accessible
          and enjoyable for everyone.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 mb-12 border border-gray-700 hover:border-green-500 transition-colors">
        <h2 className="text-3xl font-bold text-green-400 mb-4">Our Mission</h2>
        <p className="text-gray-400 text-lg">
          Our mission is to create a one-stop platform for all things cricket. Whether its live match scores, player rankings, tournament highlights,
          or insightful articles, we are committed to providing our users with accurate, up-to-date, and engaging cricket content. We believe that
          cricket brings people together, and were here to celebrate the sport with a global audience.
        </p>
      </div>

      {/* Team Section */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 border border-gray-700 hover:border-green-500 transition-colors">
        <h2 className="text-3xl font-bold text-green-400 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              src="public/image copy.png"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-green-400 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-100">Emma Stone</h3>
            <p className="text-gray-400">Founder & Cricket Analyst</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <img
              src="public/image.png"
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-green-400 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-100">Jane Smith</h3>
            <p className="text-gray-400">Head of Content</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <img
              src="public/image copy 2.png"
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-green-400 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-100">Tom Brown</h3>
            <p className="text-gray-400">Web Developer</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-green-400">Want to Join the Team?</h2>
        <p className="text-gray-400 mt-4">
          We’re always looking for passionate cricket enthusiasts to join our growing platform. Contact us if you’re interested in working together!
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-green-500 text-gray-900 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
