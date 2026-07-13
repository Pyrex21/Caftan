import { Link } from 'react-router-dom';
import { Crown, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/caftans', label: 'القفاطين' },
  { path: '/dresses', label: 'فساتين الأعراس' },
  { path: '/amaria', label: 'العمارية' },
  { path: '/contact', label: 'تواصل معنا' },
];

const services = [
  'إيجار الفساتين',
  'إيجار القفاطين',
  'العمارية الملكية',
  'جلسات التصوير',
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gold-50 border-t border-gold-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <Crown className="w-8 h-8 text-gold-500" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold gold-text font-naskh">
                  كوشو
                </span>
                <span className="text-xs text-gold-600 tracking-widest">
                  للأعراس
                </span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              نُضفي لمسة من الفخامة والأناقة على يومكِ الأجمل. نقدم أرقى الفساتين والقفاطين المغربية لعروس تستحق الأفضل.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/afrah_kouchou?igsh=a2VqZzJkaTZ2eGV0"
                className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 hover:bg-gold-500 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1CvTwAi51U/"
                className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 hover:bg-gold-500 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-5 font-naskh">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-gold-600 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-5 font-naskh">
              خدماتنا
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-300"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-5 font-naskh">
              معلومات التواصل
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium text-sm">الهاتف</p>
                  <p className="text-gray-600 text-sm" dir="ltr">+212 6 80 89 59 76</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium text-sm">العنوان</p>
                  <p className="text-gray-600 text-sm">
                    مركز أولاد ازباير، تازة
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium text-sm">أوقات العمل</p>
                  <p className="text-gray-600 text-sm">
                    الإثنين - الأحد: 8:00 ص - 22:00 م
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-12 mb-6"></div>

        <div className="flex flex-col items-center justify-between gap-4 text-center">
          <p className="text-gray-500 text-sm">
            جميع الحقوق محفوظة © 2026
          </p>
          <div className="mt-2 text-center ">
            <p className="text-gray-400 text-sm">
              تم بناء الموقع من طرف 
              </p>
               <a 
               href="https://www.instagram.com/moh4med____k?igsh=Y2xsNGt1M3YxZG9y"
               target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-[#F4D03F] font-blond text-lg transition duration-300"
                >
                Mohamed Kouchou
               </a>
            


          </div>

        </div>
      </div>
    </footer>
  );
}
