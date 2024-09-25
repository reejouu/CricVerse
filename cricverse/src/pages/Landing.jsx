import ScrollFrame from "../components/self/ScrollFrame";
import HeroSection from "../components/self/HeroSection";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="App">
      <ScrollFrame />
      <HeroSection />
      <motion.footer
        className="bg-slate-900 text-gray-300 py-8 h-[20vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-green-400">CricVerse</h2>
            <p className="text-sm">
              Your ultimate cricket destination for real-time updates and
              insights.
            </p>
          </div>
          <ul className="flex space-x-6 mb-4 md:mb-0">
            <li>
              <a href="/" className="hover:text-green-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/tournaments"
                className="hover:text-green-400 transition-colors"
              >
                Tournaments
              </a>
            </li>
            <li>
              <a
                href="/players"
                className="hover:text-green-400 transition-colors"
              >
                Players
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition-colors">
                About Us
              </a>
            </li>
          </ul>
          <div>
            <p className="text-xs">
              &copy; {new Date().getFullYear()} CricVerse. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
