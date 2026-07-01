import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useLenis } from "./lib/useLenis.js";
import Home from "./pages/Home.jsx";
import SystemPage from "./pages/SystemPage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useLenis();
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sistema/:id" element={<SystemPage />} />
      </Routes>
    </>
  );
}
