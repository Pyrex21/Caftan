import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const galleryImages = [
  { src: '/images/hero.jpg', title: 'فستان الأميرة', category: 'فساتين' },
  { src: '/images/caftan1.jpg', title: 'قفطان مغربي فاخر', category: 'قفاطين' },
  { src: '/images/dress1.jpg', title: 'فستان الحورية', category: 'فساتين' },
  { src: '/images/amaria1.jpg', title: 'العمارية الملكية', category: 'عمارية' },
  { src: '/images/accessory1.jpg', title: 'إكسسوارات فاخرة', category: 'إكسسوارات' },
  { src: '/images/gallery1.jpg', title: 'تجربة العروس', category: 'لقطات' },
  { src: '/images/gallery2.jpg', title: 'لحظة رومانسية', category: 'لقطات' },
  { src: '/images/gallery3.jpg', title: 'حناء العروس', category: 'لقطات' },
  { src: '/images/gallery4.jpg', title: 'بوكيه العروس', category: 'لقطات' },
  { src: '/images/caftan2.jpg', title: 'قفطان الأزهار', category: 'قفاطين' },
  { src: '/images/dress2.jpg', title: 'فستان الدانتيل', category: 'فساتين' },
  { src: '/images/accessory2.jpg', title: 'إكليل الشعر', category: 'إكسسوارات' },
  { src: '/images/caftan5.jpg', title: 'قفطان زهور الأطلس', category: 'قفاطين' },
   { src: '/images/dress5.jpg', title: 'فستان همسة الحرير', category:'فساتين' },
  
];

const categories = ['الكل', 'فساتين', 'قفاطين', 'عمارية', 'إكسسوارات', 'لقطات'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === 'الكل'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1);
    }
  };

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-b from-gold-50/50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gold-400"></div>
                <Sparkles className="w-5 h-5 text-gold-500" />
                <div className="h-px w-12 bg-gold-400"></div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 font-naskh">
                معرض الصور
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                تصفحي مجموعتنا الفاخرة من الصور واللقطات من أفضل تجارب العروس في بوتيك كوشو
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'gold-gradient text-white shadow-lg'
                    : 'bg-white text-gray-600 gold-border hover:bg-gold-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
      
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                variants={fadeInUp}
                layout
              >
                <button
                  onClick={() => openLightbox(index)}
                  className="block w-full group relative rounded-xl overflow-hidden gold-border aspect-[3/4]"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-right">
                      <p className="text-white font-semibold text-sm">{image.title}</p>
                      <p className="text-white/70 text-xs">{image.category}</p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 left-6 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[85vh] px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-white font-semibold text-lg">
                  {filteredImages[lightboxIndex].title}
                </p>
                <p className="text-white/60 text-sm">
                  {filteredImages[lightboxIndex].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
