import React, { useState } from "react";

// ✅ Import your assets
import pizza1 from "../assets/navbar/pizza1.jpg";
import pizza2 from "../assets/navbar/pizza2.jpg";
import pizza3 from "../assets/navbar/pizza3.jpg";

const Navbar = () => {
  // ✅ State
  const [isLoading, setIsLoading] = useState(true);
  const [activeStory, setActiveStory] = useState("Digital Modeling");
  const [animatingLine, setAnimatingLine] = useState(null);

  // ✅ Stories data
  const stories = {
    "Water Infrastructure": {
      category: "WATER AND WASTEWATER",
      title: "Critical Upgrades to Aging Water Infrastructure",
      backgroundImage: pizza1,
    },
    "Digital Modeling": {
      category: "HOSPITALITY",
      title: "2025 Trends in Hospitality Construction",
      backgroundImage: pizza2,
    },
    "Supporting Lahaina": {
      category: "DATA DRIVEN",
      title: "Evolution of Model Data-Driven Planning",
      backgroundImage: pizza3,
    },
  };

  const storyKeys = Object.keys(stories);
  const currentStory = stories[activeStory];

  // ✅ Story click handler
  const handleStoryClick = (story) => {
    if (story !== activeStory) {
      setAnimatingLine(story);
      setTimeout(() => {
        setActiveStory(story);
        setAnimatingLine(null);
      }, 800);
    }
  };

  return (
  <section className="transparent relative -z-50 left-0 -top-24 ">
        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
            <div className="relative">
              <img
                src="https://www.pcl.com/etc.clientlibs/settings/wcm/designs/pcl-marketing/clientlib-all/resources/patterns/chevrons/homepage-hero/hero-banner-loader.gif?id=pcl-homepage-hero-4fc08ba0-7480-11f0-b48a-6bf3f1006c52"
                alt="Loading..."
                className="w-full md:h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  setIsLoading(false);
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 md:h-48 md:w-48 border-t-2 border-b-2 border-yellow-400 opacity-50"></div>
              </div>
            </div>
          </div>
        )}

        {/* Background container */}
        <div className="relative min-h-screen max-w-screen overflow-hidden">
          {/* If video */}
          {currentStory.backgroundImage.endsWith(".mp4") ? (
            <>
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={currentStory.backgroundImage}
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Gradient overlay on top of video */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/40"></div>
            </>
          ) : (
            <div></div>
            // If image
            // <div
            //   className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
            //   style={{
            //     backgroundImage: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${currentStory.backgroundImage}),
            //   }}
            // ></div>
          )}

          {/* Foreground content */}
          <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl">
              <div className="mb-4 md:mb-6">
                {/* <span className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider opacity-90">
                  {currentStory.category}
                </span> */}
              </div>

              {/* <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-8 md:mb-12 lg:mb-16 text-left max-w-xl">
                {currentStory.title}
              </h1> */}

              <div className="mb-16 md:mb-20 lg:mb-24">
                <button className="group inline-flex items-center text-white font-semibold text-sm md:text-base uppercase tracking-wide hover:text-yellow-400 transition-colors duration-300">
                  <span>Read the Story</span>
                  <div className="ml-4 w-12 md:w-16 h-px bg-white group-hover:bg-yellow-400 transition-colors duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom nav / line animation stays same as your code */}
          <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-4 md:left-8 lg:left-16 right-4 md:right-8 lg:right-16">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-12 mb-4 md:mb-0">
                {storyKeys.map((story) => (
                  <button
                    key={story}
                    onClick={() => handleStoryClick(story)}
                    className={`relative text-sm md:text-base font-semibold transition-all duration-300 pb-1 border-b-2 overflow-hidden ${
                      activeStory === story
                        ? "text-white border-yellow-400"
                        : "text-gray-300 border-transparent hover:text-white hover:border-gray-500"
                    }`}
                  >
                    {story}
                    {/* Animated line */}
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-800 ease-in-out ${
                        animatingLine === story
                          ? "w-full"
                          : activeStory === story
                          ? "w-full"
                          : "w-0"
                      }`}
                    ></div>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-yellow-400 bg-transparent flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 group">
                  <div className="flex space-x-0.5">
                    <div className="w-0.5 h-4 bg-current group-hover:bg-black"></div>
                    <div className="w-0.5 h-4 bg-current group-hover:bg-black"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="h-20 md:h-0"></div>
        </div>
      </section>
  );
};

export default Navbar;
