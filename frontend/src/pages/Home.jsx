import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white p-6">
      
      {/* Animated heading */}
      <motion.h1 
        className="text-4xl font-bold text-gray-800 text-center mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Find Your Perfect Product
      </motion.h1>
      
      {/* Subtext with animation */}
      <motion.p 
        className="text-lg text-gray-600 text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Shopremon helps you discover the best products effortlessly and comfortably.
      </motion.p>

      {/* Call to Action Button */}
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link to="/collections">
          <button className="bg-black text-white px-6 py-3 text-lg rounded-full shadow-md hover:bg-gray-700 transition-transform transform hover:scale-105">
            Let’s Start Now →
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
