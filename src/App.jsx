import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";


function App() {
  return (
    <div className="app-container">
      {/* <ToastContainer /> */}
      <AppWrapper />
    </div>
  );
}

function AppWrapper() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!isDashboardRoute && <Navbar />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/dashboard/*" element={<ProtectedRoute element={DashboardLayout} />} /> */}
          {/* Page not found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      {/* {!isDashboardRoute && <Footer />} */}
    </>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
