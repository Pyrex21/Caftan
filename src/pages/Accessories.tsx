import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, Gem } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const accessories = [
  {
    id: 1,
    name: 'تاج ملكي من الكريستال',
    description: 'تاج ملكي فاخر مزخرف بالكريستال والأحجار الكريمة. يضيف لمسة ملكية للعروس.',
    price: '800 درهم',
    image: '/images/accessory1.jpg',
    category: 'تيارات',
  },
  {
    id: 2,
    name: 'إكليل شعر بالورد',
    description: 'إكليل شعر فاخر مصنوع يدوياً من الورد الطبيعي والكريستال. مثالي للعروس الرومانسية.',
    price: '600 درهم',
    image: '/images/accessory2.jpg',
    category: 'إكسسوارات شعر',
  },
  {
    id: 3,
    name: 'عقد الأميرة',
    description: 'عقد فاخر مزخرف بالدانتيل والأحجار الكريمة. يتماشى مع أي فستان زفاف.',
    price: '1,200 درهم',
    image: '/images/accessory3.jpg',
    category: 'عقود',
  },
  {
    id: 4,
    name: 'خواتم زفاف فاخرة',
    description: 'خواتم زفاف فاخرة مصنوعة من الذهب الأبيض والأحجار الكريمة. مثالية للعروس الفاخرة.',
    price: '1,500 درهم',
    image: '/images/accessory4.jpg',
    category: 'خواتم',
  },
  {
    id: 5,
    name: 'تاج الوردة',
    description: 'تاج فاخر من الورد الطبيعي والكريستال. مثالي للعروس التي تبحث عن البساطة والأناقة.',
    price: '500 درهم',
    image: '/images/accessory1.jpg',
    category: 'تيارات',
  },
  {
    id: 6,
    name: 'إكليل شعر بالكريستال',
    description: 'إكليل شعر فاخر مزخرف بالكريستال والأحجار الكريمة. يضيف لمسة ملكية.',
    price: '900 درهم',
    image: '/images/accessory2.jpg',
    category: 'إكسسوارات شعر',
  },
];

export default function Accessories() {
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
                <Gem className="w-5 h-5 text-gold-500" />
                <div className="h-px w-12 bg-gold-400"></div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 font-naskh">
                إكسسوارات العروس الفاخرة
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                اختاري من مجموعتنا الفاخرة من التيارات والعقود وإكسسوارات الشعر لإطلالة ملكية
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Accessories Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {accessories.map((item) => (
              <motion.div key={item.id} variants={fadeInUp}>
                <div className="card-lift bg-white rounded-2xl overflow-hidden gold-border gold-shadow group">
                  <div className="image-hover-zoom relative h-64">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gold-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 font-naskh">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold gold-text">{item.price}</span>
                      <a
                        href={`https://wa.me/212661060497?text=${encodeURIComponent(`السلام عليكم، أريد الاستفسار عن: ${item.name}`)}`}
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
