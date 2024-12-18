import './App.css'
import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import Footer from './components/Footer.jsx'
import AboutUs from './components/AboutUs.jsx'
import Events from './components/Events.jsx'
import Blog from './components/Blog.jsx'
import GetInvolved from './components/GetInvolved.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <> 
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
      <Footer />
    </> 
  )
}

export default App
