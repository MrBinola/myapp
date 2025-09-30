import React, { useState, useEffect } from "react";
import "../css/main.css";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
      window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
};
  return (
    <>
      {visible && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollTop;