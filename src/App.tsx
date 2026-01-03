import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ChicagoPage from './pages/ChicagoPage';
import MichiganPage from './pages/MichiganPage';
import NewJerseyPage from './pages/NewJerseyPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/chapters/chicago" element={<ChicagoPage />} />
          <Route path="/chapters/michigan" element={<MichiganPage />} />
          <Route path="/chapters/newjersey" element={<NewJerseyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
