import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../ui/Navbar";
import { Button } from "../ui/button";
import { Cover } from "../ui/cover";

const ScrollFrame = () => {
  const frames = Array.from(
    { length: 198 },
    (_, i) => `/virat/ezgif-frame-${i + 1}.png`
  );

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, frames.length - 1]
  );
  const [currentFrame, setCurrentFrame] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const unsubscribe = frameIndex.onChange((v) =>
      setCurrentFrame(Math.round(v))
    );
    return unsubscribe;
  }, [frameIndex]);

  useEffect(() => {
    const handleScrollChange = (progress) => {
      setShowNavbar(progress >= 0.99);
    };

    const unsubscribe = scrollYProgress.onChange(handleScrollChange);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="landing-page h-[300vh] element">
      {showNavbar && <Navbar />}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <img
          src={frames[currentFrame]}
          alt={`Virat Kohli in action - Frame ${currentFrame + 1}`}
          className="w-full h-full object-cover"
        />

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollYProgress.get() > 0.9 ? 1 : 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <Cover>CricVerse</Cover>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Dive into the world of cricket with CricVerse. Get real-time match
            updates, in-depth player statistics, and exclusive cricket content
            all in one place.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="font-semibold text-lg"
          >
            Explore CricVerse
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollFrame;
