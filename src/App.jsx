import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; // Import AOS styles

const App = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function
      once: true, // Animation runs only once
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
      <div className="text-center text-white px-6 py-12">
        <h1
          data-aos="fade-up"
          className="text-4xl font-bold"
        >
          Welcome to Our Amazing Home Page!
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-4 text-xl"
        >
          Scroll down to discover more about us and enjoy the smooth animations!
        </p>
        <div className="mt-12">
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-lg"
          >
            With our new design, you'll find everything you need right at your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
