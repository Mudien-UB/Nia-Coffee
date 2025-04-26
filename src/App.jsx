import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroPage from './pages/HeroPage';
import Header from './components/organisms/Header';
import AboutPage from './pages/AboutPage';


function App() {

  return (
    <Router>
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
    </Router>
  )
}

export default App;
