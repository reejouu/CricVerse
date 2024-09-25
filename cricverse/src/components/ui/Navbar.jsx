import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom"; // Import useLocation and Link

const navItems = [
  { name: "Home", href: "/" },
  { name: "Tournaments", href: "/tournaments" },
  { name: "Players", href: "/players" },
  { name: "About Us", href: "/aboutus" },
];

const Navbar = ({ transparent }) => {
  // Add transparent prop
  const location = useLocation(); // Get the current location

  const [activeItem, setActiveItem] = useState(location.pathname);

  useEffect(() => {
    setActiveItem(location.pathname); // Update active item on location change
  }, [location.pathname]);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full ${
        transparent
          ? "bg-transparent"
          : "bg-gray-900 bg-opacity-90 backdrop-blur-sm"
      } text-gray-100 py-4 px-4 z-50 shadow-lg`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex items-center justify-between h-12">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter text-green-400 hover:text-green-300 transition-colors"
        >
          CricVerse
        </Link>
        <ul className="flex space-x-1 sm:space-x-4">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              className={`text-sm font-medium cursor-pointer px-2 py-1 rounded-md transition-colors ${
                activeItem === item.href
                  ? "bg-green-700 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-green-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.href} className="block">
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <Link to="/Login">
            <motion.button
              className="bg-green-700 text-white hover:bg-green-600 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </Link>
          <Link to="SignUp">
            <motion.button
              className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </Link>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
