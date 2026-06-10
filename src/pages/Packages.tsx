import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, Check, Star, Crown } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const packages = [
  {
    name: 'باقة التميز',
    subtitle: 'للعروس الباحثة عن الأناقة بأسعار مناسبة',
    price: '2,500',
    popular: false,
    features: [
      'فستان زفاف واحد من المجموعة',
      'قفطان مغربي تقليدي',
      'إكسسوار أساسية (تاج وعقد)',
      'تصفيفة شعر وميكاب بسيط',
      'إستشارة مجانية في اختيار الفستان',
    ],
    notIncluded: [
      'العمارية',
      'جلسة تصوير',
      'إكسسوارات فاخرة',
    ],
  },
  {
    name: 'باقة الفخامة',
    subtitle: 'تجربة كاملة ليوم مميز ومنسجم',
    price: '4,500',
    popular: true,
    features: [
      'فستان زفاف فاخر من المجموعة',
      'قفطان مغربي فاخر بتطريز يدوي',
      'عمارية ملكية مع 4 حاضرين',
      'إكسسوارات كاملة (تاج، عقد، إكليل)',
      'تصفيفة شعر وميكاب كامل',
      'إستشارة مجانية في اختيار الفستان والقفطان',
      'تزيين العمارية بالأزهار',
    ],
    notIncluded: [
      'جلسة تصوير محترفة',
      'مكياج العروس',
    ],
  },
  {
    name: 'باقة الفي آي بي',
    subtitle: 'تجربة ملكية شاملة بدون توتر',
    price: '7,500',
    popular: false,
    features: [
      'فستان زفاف فاخر من مصمم عالمي',
      'قفطان مغربي فاخر بتطريز يدوي',
      'عمارية ملكية كاملة مع 4 حاضرين مدربين',
      'إكسسوارات فاخرة (تاج، عقد، إكليل، خواتم)',
      'تصفيفة شعر وميكاب كامل مع فريق متخصص',
      'جلسة تصوير مجانية في البوتيك',
      'إستشارة مجانية في اختيار الفستان والقفطان',
      'تزيين العمارية بالأزهار والدانتيل',
      'مكياج العروس المجاني',
    ],
    notIncluded: [],
  },
];

export default function Packages() {
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
                <Crown className="w-5 h-5 text-gold-500" />
                <div className="h-px w-12 bg-gold-400"></div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 font-naskh">
                باقات الزفاف المميزة
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                اختاري الباقة المثالية لكِ واجهة مريحة ومنسجمة. كل باقة تشمل كل ما تحتاجينه ليومكِ المميز.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {packages.map((pkg, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col ${
                    pkg.popular
                      ? 'bg-gradient-to-b from-gold-50 to-white gold-border gold-shadow scale-105 lg:scale-110'
                      : 'bg-white gold-border'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-white px-4 py-1 rounded-full text-sm font-semibold">
                      الأكثر طلباً
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 font-naskh">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{pkg.subtitle}</p>
                  </div>

                  <div className="text-center mb-8">
                    <span className="text-4xl font-bold gold-text">{pkg.price}</span>
                    <span className="text-gray-500 mr-1">درهم</span>
                  </div>

                  <div className="flex-grow">
                    <p className="text-sm font-semibold text-gray-700 mb-3">ما تشمله الباقة:</p>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {pkg.notIncluded.length > 0 && (
                      <>
                        <p className="text-sm font-semibold text-gray-700 mb-3">لا تشمل:</p>
                        <ul className="space-y-2 mb-6">
                          {pkg.notIncluded.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                              <span className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5">×</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <a
                    href={`https://wa.me/212612345678?text=${encodeURIComponent(`السلام عليكم، أريد الحجز لباقة: ${pkg.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 rounded-full font-semibold transition-all duration-300 mt-4 ${
                      pkg.popular
                        ? 'gold-gradient text-white hover:shadow-lg hover:shadow-gold-500/30'
                        : 'bg-gold-50 text-gold-700 hover:bg-gold-100'
                    }`}
                  >
                    احجزي الباقة الآن
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-16 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center bg-gradient-to-br from-gold-50 via-white to-pink-50 rounded-3xl p-10 gold-border"
        >
          <Star className="w-10 h-10 text-gold-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-naskh">
            هل تريدين باقة مخصصة؟
          </h2>
          <p className="text-gray-600 mb-6">
            نستطيع تصميم باقة مخصصة تلبي احتياجاتكِ وميزانيتكِ. تواصلي معنا عبر الواتساب وسنقوم بتصميم الباقة المثالية لكِ.
          </p>
          <a
            href="https://wa.me/212612345678?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%2C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A8%D8%A7%D9%82%D8%A9%20%D9%85%D8%AE%D8%B5%D8%B5%D8%A9%20%D9%84%D9%8A%D9%88%D9%85%20%D8%B2%D9%81%D8%A7%D9%81%D9%8A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            طلبي باقتكِ المخصصة
            <ArrowLeft className="w-5 h-5" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
