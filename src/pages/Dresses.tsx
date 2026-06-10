import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const dresses = [
  {
    id: 1,
    name: 'فستان الأميرة',
    description: 'فستان زفاف فاخر بقصة عمل من الدانتيل والتول. قصة طويلة وذيل ملكي لمظهر أسطوري.',
    price: '3,500 درهم',
    image: '/images/dress1.jpg',
    tag: 'الأكثر طلباً',
  },
  {
    id: 2,
    name: 'فستان الحورية',
    description: 'فستان مرمايدي بقصة سمك ملتصق وديل طويل. مثالي للعروس التي تبحث عن الأناقة والجاذبية.',
    price: '4,000 درهم',
    image: '/images/dress2.jpg',
    tag: 'فاخر',
  },
  {
    id: 3,
    name: 'فستان الأميرة المنفوخة',
    description: 'فستان منفوخ فاخر بقصة واسع وذيل ملكي. يتميز بتطريزات الكرستال والدانتيل.',
    price: '5,500 درهم',
    image: '/images/dress3.jpg',
    tag: 'جديد',
  },
  {
    id: 4,
    name: 'فستان الأزهار البارد',
    description: 'فستان أبيض بقصة بارد وتطريز دقيق من الدانتيل. مناسب للعروس الكلاسيكية.',
    price: '3,000 درهم',
    image: '/images/dress4.jpg',
    tag: null,
  },
  {
    id: 5,
    name: 'فستان الأميرة الملكي',
    description: 'فستان ملكي بقصة عمل من الحرير والدانتيل. قصة طويلة جداً لمظهر ملكي.',
    price: '6,000 درهم',
    image: '/images/dress1.jpg',
    tag: 'مميز',
  },
  {
    id: 6,
    name: 'فستان الرومانسية',
    description: 'فستان رومانسي بقصة سمك وديل شفاف. مثالي للعروس الرومانسية.',
    price: '4,500 درهم',
    image: '/images/dress2.jpg',
    tag: null,
  },
    {
    id: 7,
    name: 'فستان همسة الحرير',
    description: 'فستان فاخر بتفاصيل أنيقة ولمسات حريرية ناعمة تمنحك إطلالة ملكية ساحرة',
    price: '2550 درهم',
    image: '/images/dress5.jpg',
    tag: 'جديد',
  },
  
];

export default function Dresses() {
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
                فساتين أعراس فاخرة
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                اختاري من مجموعتنا الفاخرة من فساتين الأعراس الفاخرة من أشهر المصممين العالميين
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dresses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {dresses.map((dress) => (
              <motion.div key={dress.id} variants={fadeInUp}>
                <div className="card-lift bg-white rounded-2xl overflow-hidden gold-border gold-shadow group">
                  <div className="image-hover-zoom relative h-96">
                    <img
                      src={dress.image}
                      alt={dress.name}
                      className="w-full h-full object-cover"
                    />
                    {dress.tag && (
                      <div className="absolute top-4 right-4 gold-gradient text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {dress.tag}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-naskh">
                      {dress.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {dress.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold gold-text">{dress.price}</span>
                      <a
                        href={`https://wa.me/212661060497?text=${encodeURIComponent(`السلام عليكم، أريد الاستفسار عن: ${dress.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 gold-gradient text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
                      >
                        احجزي الآن
                        <ArrowLeft className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
