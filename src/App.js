import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Header from './components/Header';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Services = () => <div>Services</div>;
const Schedule = () => <div>Schedule</div>;
const Gallery = () => <div>Gallery</div>;
const Blog = () => <div>Blog</div>;
const Contact = () => <div>Contact</div>;

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
