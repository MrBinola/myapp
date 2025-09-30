import React, { useEffect, useState } from "react";
import "../css/main.css";

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 5000;
    const increment = target / (duration / 20);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="counter-box">
      <h3>Подписчики на YouTube_MrBinola</h3>
      <p className="counter-number">{count}</p>
    </div>
  );
}

export default Counter;