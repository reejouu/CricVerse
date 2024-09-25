import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { name: "Home", href: "/" },
  { name: "Tournaments", href: "/tournaments" },
  { name: "Players", href: "/players" },
  { name: "About Us", href: "/about" },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <motion.div
      className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md text-gray-100 p-4 z-50 shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <a href="/" className="text-3xl font-bold tracking-tighter text-blue-400 hover:text-blue-300 transition-colors">
          CricVerse
        </a>
        <ul className="flex space-x-1 sm:space-x-4 mt-4 sm:mt-0">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              className={`text-sm sm:text-base font-medium cursor-pointer px-3 py-2 rounded-md transition-colors ${
                activeItem === item.name 
                  ? "bg-blue-600 text-white" 
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
              onClick={() => setActiveItem(item.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={item.href} className="block">{item.name}</a>
            </motion.li>
          ))}
        </ul>
        <motion.button
          className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors mt-4 sm:mt-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
      </nav>
    </motion.div>
  );
};

export default Navbar;