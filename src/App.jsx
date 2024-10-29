import { useState, React } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import BookList from './components/BookList'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Categories from './pages/Categories'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
