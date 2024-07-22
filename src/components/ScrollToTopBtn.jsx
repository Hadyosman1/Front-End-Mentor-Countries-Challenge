import { useEffect, useRef } from "react";

const ScrollToTopBtn = () => {
  const btnRef = useRef();

  const handleScrollBtn = () => {
    if (!btnRef.current) return;

    if (window.scrollY > 600) {
      btnRef.current.classList.add("show-to-top-btn");
    } else {
      btnRef.current.classList.remove("show-to-top-btn");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollBtn);

    return () => {
      window.removeEventListener("scroll", handleScrollBtn);
    };
  }, []);
  return (
    <button
      ref={btnRef}
      onClick={() =>
        scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="scroll-to-top-btn"
    >
      ⬆
    </button>
  );
};

export default ScrollToTopBtn;
