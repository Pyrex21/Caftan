import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/caftans', label: 'القفاطين' },
  { path: '/dresses', label: 'فساتين الأعراس' },
  { path: '/amaria', label: 'العمارية' },
  { path: '/gallery', label: 'معرض الصور' },
  { path: '/contact', label: 'تواصل معنا' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-gold-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Crown className="w-8 h-8 text-gold-500 transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="text-xl font-bold gold-text font-naskh tracking-wide">
                كوشو
              </span>
              <span className="text-[10px] text-gold-600 -mt-1 tracking-widest">
               للأعراس
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-gold-600'
                    : 'text-gray-700 hover:text-gold-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/212680895976?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%2C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%AC%D8%B2%20%D9%84%D9%8A%D9%88%D9%85%20%D8%B2%D9%81%D8%A7%D9%81%D9%8A"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              احجزي موعدك الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gold-50 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gold-600" />
            ) : (
              <Menu className="w-6 h-6 text-gold-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gold-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-gold-50 text-gold-700'
                        : 'text-gray-700 hover:bg-gold-50 hover:text-gold-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <a
                  href="https://wa.me/212680895976?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%2C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%AC%D8%B2%20%D9%84%D9%8A%D9%88%D9%85%20%D8%B2%D9%81%D8%A7%D9%81%D9%8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center gold-gradient text-white px-6 py-3 rounded-full text-sm font-semibold"
                >
                  احجزي موعدك الآن
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
