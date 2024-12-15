import './App.css'
import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import Footer from './components/Footer.jsx'
import AboutUs from './components/AboutUs.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <> 
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
      <Footer />
    </> 
  )
}

export default App
