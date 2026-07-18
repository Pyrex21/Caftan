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
    name: 'قفطان الليل الملكي',
    description: 'قفطان أسود فاخر بتطريز ذهبي أنيق، يجمع بين الأصالة المغربية والرقي العصري، ليمنحك إطلالة ملكية ساحرة في جميع المناسبات.',
    price: '100 درهم / لليوم',
    image: '/images/caftan_new_1.jpeg',
    tag: 'جديد',
  },
  {
    id: 2,
    name: 'قفطان الياقوت الملكي',
    description: 'قفطان أسود راقٍ بتطريزات عنابية وذهبية فاخرة، يجمع بين الأصالة المغربية والأناقة العصرية ليمنحك إطلالة ملكية ساحرة في مختلف المناسبات',
    price: '100 درهم / لليوم',
    image: '/images/caftan_new_2.jpeg',
    tag: null,
  },
  {
    id: 3,
    name: 'قفطان الزمرد الملكي',
    description: 'قفطان مغربي راقٍ باللون الأخضر الزمردي، مزين بتطريز ذهبي فاخر وحزام أنيق يمنحه لمسة ملكية تجمع بين الأصالة والفخامة',
    price: '100 درهم / لليوم',
    image: '/images/caftan_new_3.jpeg',
    tag: 'مميز',
  },
  {
    id: 4,
    name: 'قفطان المرجان الذهبي',
    description: 'قفطان مغربي أنيق بلون مرجاني دافئ، مطرز بخيوط ذهبية فاخرة مع حزام راقٍ يبرز جمال التصميم. إطلالة تجمع بين الأصالة والفخامة، مثالية للأعراس والمناسبات الخاصة',
    price: '100 درهم / لليوم',
    image: '/images/caftan_new_4.jpeg',
    tag: 'فاخر',
  },
  {
    id: 5,
    name: 'قفطان التوت الملكي',
    description: 'قفطان مغربي أنيق بلون التوت الملكي، مزين بتطريزات سوداء راقية وحزام أنيق يبرز جمال التصميم. إطلالة تجمع بين الأصالة والفخامة، مثالية للمناسبات والسهرات المميزة',
    price: '100 درهم / لليوم',
    image: '/images/caftan_new_5.jpeg',
    tag: null,
  },
  {
    id: 6,
    name: 'قفطان النسيم الزمردي',
    description: 'قفطان مغربي أنيق بلون أخضر هادئ مطرز بتفاصيل راقية وحزام ذهبي فاخر، يجمع بين البساطة والفخامة ليمنحك إطلالة مميزة في جميع المناسبات',
    price: '100 درهم / لليوم',
    image: '/images/caftan_new_6.jpeg',
    tag: 'جديد',
  },
  {
    id: 7,
    name: 'قفطان العنابي الملكي',
    description: 'قفطان مغربي فاخر باللون العنابي، مزين بتطريزات فضية أنيقة وحزام راقٍ يبرز جمال التصميم، ليمنحك إطلالة تجمع بين الأصالة والفخامة في المناسبات والسهرات',
    price: '100 درهم / لليوم',
    image: '/images/caftan_new_7.jpeg',
    tag: 'مميز',
  },
  {
    id: 8,
    name: 'قفطان الياقوت الأحمر',
    description: 'قفطان مغربي باللون الأحمر الياقوتي، مزين بتطريزات ذهبية وسوداء راقية مع حزام أسود أنيق، كيجمع بين الفخامة والأناقة وكيصلح للمناسبات والأعراس',
    price:'100 درهم / لليوم',
    image: '/images/caftan_new_8.jpeg',
    tag: null,
  },
   {
    id: 9,
    name: 'قفطان الجوهرة العنابية',
    description: 'قفطان الجوهرة العنّابية، قطعة مغربية فاخرة تجمع بين أصالة التصميم ورقيّ التفاصيل. بلونه العنّابي العميق وتطريزاته الذهبية الأنيقة، يمنحك إطلالة ملكية ساحرة تناسب الأعراس والمناسبات الراقية',
    price: '100 درهم / لليوم',
    image: '/images/caftan_new_9.jpeg',
    tag: 'فاخر',
  },
  {
    id: 10,
    name: 'قفطان الجوهرة السوداء',
    description: 'قفطان الجوهرة السوداء، تصميم مغربي راقٍ يجمع بين اللون الأسود الفاخر والتطريز الذهبي الأنيق. يتميز بحزام أنيق ولمسات تقليدية عصرية تمنحك إطلالة ملكية ساحرة تناسب جميع المناسبات الراقية',
    price: '100 درهم / لليوم',
    image: '/images/caftan_new_10.jpeg',
    tag: null,
  },
   {
    id: 11,
    name: 'قفطان شمس الأطلس',
    description: 'قفطان مغربي راقٍ باللون البرتقالي الدافئ، مزين بتطريز ذهبي أنيق ولمسات وردية ناعمة تضفي عليه سحراً خاصاً. تصميم يجمع بين الأصالة والفخامة ليمنحك إطلالة مميزة في جميع المناسبات',
    price: '100 درهم / لليوم',
    image: '/images/caftan_new_11.jpeg',
    tag: 'مميز',
  },
  {
    id: 12,
    name: 'قفطان نسيم المرجان',
    description: 'قفطان مغربي أنيق بلون مرجاني دافئ مع لمسات زرقاء ناعمة وتطريز ذهبي فاخر. تصميم راقٍ يجمع بين الأصالة والعصرية ليمنحك إطلالة مميزة في المناسبات والأعراس',
    price: '100 درهم / لليوم',
    image: '/images/caftan_new_12.jpeg',
    tag: null,
  }
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
                        href={`https://wa.me/212680895976?text=${encodeURIComponent(`السلام عليكم، أريد الاستفسار عن: ${caftan.name}`)}`}
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
