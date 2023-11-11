import React, { useEffect, useState } from "react";

export default function useScrollHook(threshHold = 10) {
  const [scrolled, setscrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > threshHold) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshHold]);

  return scrolled;
}
