import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LandingPage from "./pages/LandingPage";
import SEOAnalysis from "./pages/SEOAnalysis";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/seo" element={<SEOAnalysis />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
