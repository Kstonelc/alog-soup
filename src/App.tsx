import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index.jsx";
import DocsPage from "@/pages/docs.jsx";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog.jsx";
import AboutPage from "@/pages/about.jsx";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
