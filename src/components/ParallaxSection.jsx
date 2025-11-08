import React, { useEffect, useRef } from "react";
import parellex from "../../src/assets/combo/parallex.png";

const ParallaxSection = ({ children }) => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // ✅ Animate only when visible
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollPercent =
          (windowHeight - rect.top) / (windowHeight + rect.height);
        const moveY = (scrollPercent - 0.5) * 200;
        bgRef.current.style.transform = `translate3d(0, ${moveY}px, 0) scale(1.15)`;
      }
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden flex items-center justify-center h-[100px] md:h-[250px] m-0"
    >
      {/* ✅ Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-center bg-cover will-change-transform"
        style={{
          backgroundImage: `url(${parellex})`,
          transform: "translate3d(0,0,0) scale(1.15)",
          transition: "transform 0.1s linear",
        }}
      ></div>

      {/* ✅ Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ✅ Foreground Content */}
      <div className="relative z-10 text-white text-center px-4 md:px-8">
        {children}
      </div>
    </section>
  );
};

// ✅ App with footer touching parallax
const App = () => {
  return (
    <div className=" flex flex-col">
      <div className="flex-1">
        <ParallaxSection>
         
        </ParallaxSection>
      </div>

      {/* ✅ Footer directly below parallax */}
      <footer className="bg-gray-900 text-white text-center py-4 m-0">
        
      </footer>
    </div>
  );
};

export default App;
