import './App.css'
import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import Footer from './components/Footer.jsx'
import AboutUs from './components/AboutUs.jsx'
import Events from './components/Events.jsx'
import GetInvolved from './components/GetInvolved.jsx'
import Blog from './components/Blog.jsx'
import Blog1 from './components/blogs/Blog1.jsx'
import Blog2 from './components/blogs/Blog2.jsx'
import Blog3 from './components/blogs/Blog3.jsx'
import Blog4 from './components/blogs/Blog4.jsx'
import Blog5 from './components/blogs/Blog5.jsx'
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
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/blog4" element={<Blog4 />} />
          <Route path="/blog5" element={<Blog5 />} />
        </Routes>
      </Router>
      <Footer />
    </> 
  )
}

export default App
