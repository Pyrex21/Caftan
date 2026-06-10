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

const caftans = [
  {
    id: 1,
    name: 'قفطان الزهور الملكي',
    description: 'قفطان مغربي تقليدي بتطريز ذهبي فاخر على حرير الدبيجي. مثالي للعروس التي تبحث عن الأصالة والفخامة.',
    price: '150 درهم / لليوم',
    image: '/images/caftan1.jpg',
    tag: 'الأكثر مبيعاً',
  },
  {
    id: 2,
    name: 'قفطان الأزهار الوردي',
    description: 'قفطان وردي فاخر بتطريز الأزهار والكرستال اللماع. يتميز بأناقته الرائعة وتصميمه العصري.',
    price: '1,500 درهم',
    image: '/images/caftan2.jpg',
    tag: 'جديد',
  },
  {
    id: 3,
    name: 'قفطان الأخضر المخملي',
    description: 'قفطان مخمل بتطريز أخضر على الصدر والأكمام. مناسب للعروس التي تفضّل الألوان الطبيعية.',
    price: '1,000 درهم',
    image: '/images/caftan3.jpg',
    tag: null,
  },
  {
    id: 4,
    name: 'قفطان الأزرق الملكي',
    description: 'قفطان أزرق فاخر بتطريز فضي وحجرات كريستال. يضيء لمسة ملكية ليوم الزفاف.',
    price: '1,800 درهم',
    image: '/images/caftan4.jpg',
    tag: 'فاخر',
  },
  {
    id: 5,
    name: 'قفطان الحرير الفضي',
    description: 'قفطان أبيض بتطريز فضي ولؤلؤ من الحرير. نعمة ورقية للعروس العصرية.',
    price: '1,400 درهم',
    image: '/images/caftan1.jpg',
    tag: null,
  },
  {
    id: 6,
    name: 'قفطان الوردة الرقيق',
    description: 'قفطان وردة رقيق بتطريز وردي وذهبي. مثالي للعروس الرومانسية.',
    price: '1,600 درهم',
    image: '/images/caftan2.jpg',
    tag: 'فاخر',
  },
  {
    id: 7,
    name: 'قفطان زهور الأطلس',
    description: 'قفطان أنيق يجمع بين الأصالة و الفخامة ليمنحك إطلالة راقية و مميزة ',
    price: '120 درهم / لليوم',
    image: '/images/caftan5.jpg',
    tag: 'مميز',
  },
];

export default function Caftans() {
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
                قفاطين مغربية فاخرة
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                اختاري من مجموعتنا الفاخرة من القفاطين المغربية التقليدية بتطريزات أصيلية وألوان رائعة
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Caftans Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {caftans.map((caftan) => (
              <motion.div key={caftan.id} variants={fadeInUp}>
                <div className="card-lift bg-white rounded-2xl overflow-hidden gold-border gold-shadow group">
                  <div className="image-hover-zoom relative h-80">
                    <img
                      src={caftan.image}
                      alt={caftan.name}
                      className="w-full h-full object-cover"
                    />
                    {caftan.tag && (
                      <div className="absolute top-4 right-4 gold-gradient text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {caftan.tag}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-naskh">
                      {caftan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {caftan.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold gold-text">{caftan.price}</span>
                      <a
                        href={`https://wa.me/212661060497?text=${encodeURIComponent(`السلام عليكم، أريد الاستفسار عن: ${caftan.name}`)}`}
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
