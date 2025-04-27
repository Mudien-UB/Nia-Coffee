import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroPage from './pages/HeroPage';
import Header from './components/organisms/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/organisms/Footer';
import { Navigate } from 'react-router';
import LoadingPage from './pages/LoadingPage';


function App() {

  const pages = [
    {
      route: '/',
      component: <HeroPage />,
    },
    {
      route: '/home',
      component: <Navigate to="/" />,  
    },
    {
      route: '/about',
      component: <AboutPage />,
    },
    {
      route: '/contact',
      component: <ContactPage />,
    },
    {
      route: '/loading',
      component: <LoadingPage />,
    },

  ]

  return (
    <Router>
        <Header />
        
        <main className="flex-grow">
          <Routes>
            {pages.map((page, index) => (
              <Route key={index} path={page.route} element={page.component} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        
        <Footer />
    </Router>
  )
}

export default App;
