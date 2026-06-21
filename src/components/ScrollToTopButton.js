import React, { useState, useEffect } from "react";
import { FaHandPointUp } from "react-icons/fa"; // Change this import

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="top-btn-style bounce-animation">
          <FaHandPointUp /> {/* Change this icon */}
        </div>
      )}
    </div>
  );
}

export default ScrollToTopButton;