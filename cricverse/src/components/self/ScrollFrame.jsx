import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../ui/Navbar";
import { Cover } from "../ui/cover";

const ScrollFrame = () => {
  const frames = Array.from(
    { length: 188 },
    (_, i) => `/virat/ezgif-frame-190-min (${i + 11}).png`
  );

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 0.9], // Adjust to control when the frames should stop
    [0, frames.length - 1]
  );
  const [currentFrame, setCurrentFrame] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  // Update current frame index based on scroll position
  useEffect(() => {
    const unsubscribe = frameIndex.onChange((v) =>
      setCurrentFrame(Math.round(v))
    );
    return unsubscribe;
  }, [frameIndex]);

  // Handle when the navbar should appear (after final frame)
  useEffect(() => {
    const handleScrollChange = (progress) => {
      setShowNavbar(progress >= 0.99); // Show after the last frame
    };

    const unsubscribe = scrollYProgress.onChange(handleScrollChange);
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Ensure scroll starts at the top when reloading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="landing-page h-[300vh]">
      {/* Display Navbar after last frame is scrolled past */}
      {showNavbar && <Navbar />}

      {/* Sticky container for image frames */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Render the current frame */}
        <img
          src={frames[currentFrame]}
          alt={`Virat Kohli in action - Frame ${currentFrame + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Text content overlay after the last frame */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollYProgress.get() > 0.9 ? 1 : 0 }}
          transition={{ duration: 0.07 }} // Smooth transition effect
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <Cover>CricVerse</Cover>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Dive into the world of cricket with CricVerse. Get real-time match
            updates, in-depth player statistics, and exclusive cricket content
            all in one place.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollFrame;
