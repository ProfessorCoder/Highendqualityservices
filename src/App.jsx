import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">HighEndQualityServices</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/blog" className="hover:underline">Blog</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
