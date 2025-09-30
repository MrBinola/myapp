import React, { useState, useEffect } from "react";
import "../css/main.css";

function ScrollButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      setShowTop(scrolled > 200);

      setShowBottom(maxScroll > 0 && scrolled < maxScroll - 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
      window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTop && (
        <button className="scroll-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
      {showBottom && (
        <button className="scroll-btn" onClick={scrollToBottom}>
          ↓
        </button>
      )}
    </>
  );
}

export default ScrollButtons;