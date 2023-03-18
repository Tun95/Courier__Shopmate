import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./common/nav/Nav";
import Footer from "./common/footer/Footer";
import HomeScreen from "./screen/home/HomeScreen";
import AboutScreen from "./screen/about/AboutScreen";
import ServiceScreen from "./screen/service/ServiceScreen";
import TrackScreen from "./screen/track goods/TrackScreen";
import ContactScreen from "./screen/contact/ContactScreen";
import BlogScreen from "./screen/blog/BlogScreen";
import BlogDetailsScreen from "./screen/blog details/BlogDetailsScreen";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/about" element={<AboutScreen />}></Route>
          <Route path="/services" element={<ServiceScreen />}></Route>
          <Route path="/track-goods" element={<TrackScreen />}></Route>
          <Route path="/contact" element={<ContactScreen />}></Route>
          <Route path="/blog-post" element={<BlogScreen />}></Route>
          <Route
            path="/blog-details/:id"
            element={<BlogDetailsScreen />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
