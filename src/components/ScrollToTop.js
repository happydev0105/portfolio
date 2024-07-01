import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

<<<<<<< HEAD
export default ScrollToTop;
=======
export default ScrollToTop;
>>>>>>> caf0776ecac89ade08d3d0086e9138c209b33e0e
