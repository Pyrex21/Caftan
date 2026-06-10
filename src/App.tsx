import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Caftans from './pages/Caftans';
import Dresses from './pages/Dresses';
import Amaria from './pages/Amaria';
import Accessories from './pages/Accessories';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ivory font-cairo" dir="rtl">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/caftans" element={<Caftans />} />
            <Route path="/dresses" element={<Dresses />} />
            <Route path="/amaria" element={<Amaria />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
