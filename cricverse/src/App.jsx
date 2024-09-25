import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const frames = Array.from(
  { length: 200 },
  (_, i) => `/virat/ezgif-frame-${i + 1}.png`
);

const CricketLandingPage = () => {
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

  useEffect(() => {
    const unsubscribe = frameIndex.onChange((v) =>
      setCurrentFrame(Math.round(v))
    );
    return unsubscribe;
  }, [frameIndex]);

  return (
    <div ref={containerRef} className="landing-page h-[300vh] element">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <img
          src={frames[currentFrame]}
          alt={`Frame ${currentFrame}`}
          className="w-full h-full object-cover"
        />

        {/* Content overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollYProgress.get() > 0.9 ? 1 : 0 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Cricket World!
          </h1>
          <p className="text-lg">
            Explore the latest matches, players, and stats.
          </p>
          <motion.button
            className="mt-8 px-6 py-2 bg-white text-black rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App no-scrollbar">
      <CricketLandingPage />
    </div>
  );
};

export default App;
