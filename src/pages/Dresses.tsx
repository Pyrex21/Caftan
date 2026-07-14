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
    name: 'زمردة السلطانة',
    description: 'قفطان مغربي فاخر باللون الأخضر الزمردي، مصنوع من قماش مخملي راقٍ ومزين بتطريز ذهبي يدوي فاخر مع حزام ملكي أنيق. تصميم يجمع بين الأصالة المغربية والفخامة، ليمنحك إطلالة راقية في الأعراس والمناسبات الخاصة',
    price: '4,500 درهم',
    image: '/images/dress_new_1.jpeg',
    tag: null,
  },
  {
    id: 2,
    name: 'فستان لؤلؤة الملوك',
    description: 'فستان أبيض فاخر بتطريز ذهبي أنيق وحزام مميز، يجمع بين الرقي والفخامة ليمنحك إطلالة ملكية ساحرة في حفلات الزفاف والمناسبات الراقية',
    price: '4,500 درهم',
    image: '/images/dress_new_2.jpeg',
    tag: 'مميز',
  },
  {
    id: 3,
    name: 'فستان أميرة الذهب',
    description: 'فستان فاخر بلون البيج الراقي، مزين بتطريز ذهبي فاخر وحزام أنيق يبرز جمال التصميم. يجمع بين الأناقة الكلاسيكية والفخامة، ليمنحك إطلالة مميزة في الأعراس والمناسبات الراقية',
    price: '4,500 درهم',
    image: '/images/dress_new_3.jpeg',
    tag: 'جديد',
  },
  {
    id: 4,
    name: 'فستان سحر الليل',
    description: 'فستان أسود فاخر بتطريز ذهبي دقيق وحزام أنيق يبرز جمال القوام، يجمع بين الرقي والفخامة في تصميم مستوحى من الأناقة المغربية، ليمنحك إطلالة ساحرة في الأعراس، الخطوبة، والمناسبات الراقية',
    price: '4,500 درهم',
    image: '/images/dress_new_4.jpeg',
    tag: null,
  },
  {
    id: 5,
    name: 'فستان الياقوت الأزرق',
    description: 'فستان أزرق ملكي فاخر مزين بتطريز ذهبي أنيق وحزام فاخر يبرز جمال التصميم. يجمع بين الرقي والفخامة ليمنحك إطلالة مميزة تخطف الأنظار في الأعراس، الخطوبة، والسهرات الراقية',
    price: '4,500 درهم',
    image: '/images/dress_new_5.jpeg',
    tag: null,
  },
  {
    id: 6,
    name: 'فستان جوهرة القصر',
    description: 'فستان أحمر فاخر بتطريز ذهبي راقٍ يعكس الفخامة والأصالة، مزود بحزام أنيق يبرز جمال القوام. تصميم يجمع بين الرقي والتميز، ليمنحك إطلالة ملكية تخطف الأنظار في الأعراس، الخطوبة، والمناسبات الراقية',
    price: '4,500 درهم',
    image: '/images/dress_new_6.jpeg',
    tag: 'جديد',
  },
  {
    id: 7,
    name: 'فستان وهج الياقوت',
    description: 'فستان أحمر فاخر مطرز بخيوط ذهبية دقيقة، مع حزام أنيق يبرز جمال التصميم ويمنح إطلالة ملكية راقية. يجمع بين الفخامة والأصالة، ليكون الخيار المثالي للأعراس، حفلات الخطوبة، والمناسبات الفاخرة',
    price: '4,500 درهم',
    image: '/images/dress_new_7.jpeg',
    tag: null,
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
                اختاري من مجموعتنا الفاخرة من فساتين الأعراس الفاخرة
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
                        href={`https://wa.me/212680895976?text=${encodeURIComponent(`السلام عليكم، أريد الاستفسار عن: ${dress.name}`)}`}
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
