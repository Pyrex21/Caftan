import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Crown, Heart, Gem, ArrowLeft, Star } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    icon: Crown,
    title: 'قفاطين مغربية',
    description: 'أرقى القفاطين التقليدية بتطريزات مغربية أصيلية',
    image: '/images/caftan1.jpg',
    link: '/caftans',
  },
  {
    icon: Sparkles,
    title: 'فساتين أعراس',
    description: 'فساتين زفاف فاخرة من أشهر المصممين العالميين',
    image: '/images/dress1.jpg',
    link: '/dresses',
  },
  {
    icon: Gem,
    title: 'العمارية الملكية',
    description: 'تجربة ملكية أصيلية ليوم الحناء والزفاف',
    image: '/images/amaria1.jpg',
    link: '/amaria',
  },
  {
    icon: Heart,
    title: 'إكسسوارات فاخرة',
    description: 'تيارات، عقد، وإكسسوارات شعر لإطلالة ملكية',
    image: '/images/accessory1.jpg',
    link: '/accessories',
  },
];

const testimonials = [
  {
    name: 'سارة',
    text: 'تجربة رائعة! الفستان تاج من أحلى ما تخيلته. فريق ليلى متعاون جداً ومحترف.',
    rating: 5,
  },
  {
    name: 'نور',
    text: 'اخترت باقة الفي آي بي وكان كل شيء أكثر مما تخيلته. شكراً ليلى على يوم مميز!',
    rating: 5,
  },
  {
    name: 'فاطمة',
    text: 'القفطان المغربي الذي اخترته كان رائعاً جداً. التطريز اليدوي والألوان الرائعة.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="فستان زفاف فاخر"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gold-400"></div>
              <Sparkles className="w-6 h-6 text-gold-400" />
              <div className="h-px w-16 bg-gold-400"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 font-naskh leading-tight drop-shadow-lg">
              أجمل لحظاتكِ
              <br />
              <span className="gold-text">تبدأ من هنا</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              في البوتيك الخاص بنا، نُضفي لمسة من الفخامة والأناقة على يومكِ الأجمل.
              نقدم لكِ أرقى الفساتين والقفاطين المغربية والعمارية والإكسسوارات الفاخرة.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/212661060497?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%2C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%AC%D8%B2%20%D9%84%D9%8A%D9%88%D9%85%20%D8%B2%D9%81%D8%A7%D9%81%D9%8A"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300 hover:-translate-y-1 shimmer"
              >
                احجزي موعدك الآن
              </a>
              <Link
                to="/gallery"
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300"
              >
                تصفحي المعرض
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold-400"></div>
              <Crown className="w-5 h-5 text-gold-500" />
              <div className="h-px w-12 bg-gold-400"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-naskh">
              بوتيك كوشو – حيث تلتقي الأناقة بالفخامة
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              نحن نؤمن أن كل عروس تستحق أن تشعر بالجمال والأناقة في يومها الأكثر خصوصية.
              لذلك، نقدم لكِ مجموعة منعشة من أفضل الفساتين والقفاطين والإكسسوارات الفاخرة
              المختارة بعناية ودقة لتجعلكِ تلميعاً في يومكِ المميز.
            </p>
            <div className="flex items-center justify-center gap-8 text-gold-600">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">500+</span>
                <span className="text-sm text-gray-500">عروس سعيدة</span>
              </div>
              <div className="w-px h-12 bg-gold-200"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">8+</span>
                <span className="text-sm text-gray-500">سنوات خبرة</span>
              </div>
              <div className="w-px h-12 bg-gold-200"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">200+</span>
                <span className="text-sm text-gray-500">موديل فاخر</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gold-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gold-400"></div>
                <Gem className="w-5 h-5 text-gold-500" />
                <div className="h-px w-12 bg-gold-400"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 font-naskh">
                خدماتنا الفاخرة
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                اختاري ما يلائمكِ من مجموعتنا الفاخرة من الفساتين والقفاطين والإكسسوارات
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link to={service.link} className="block group">
                  <div className="card-lift bg-white rounded-2xl overflow-hidden gold-border gold-shadow">
                    <div className="image-hover-zoom h-64">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <service.icon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-gray-800 mb-2 font-naskh">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <span className="inline-flex items-center gap-1 text-gold-600 text-sm font-semibold group-hover:gap-2 transition-all">
                        استكشفي المزيد
                        <ArrowLeft className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gold-400"></div>
                <Star className="w-5 h-5 text-gold-500" />
                <div className="h-px w-12 bg-gold-400"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 font-naskh">
                باقاتنا المميزة
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                اختاري الباقة المثالية لكِ واجهة مريحة ومنسجمة
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                name: 'باقة التميز',
                price: '2,500 درهم',
                features: ['فستان زفاف واحد', 'قفطان مغربي تقليدي', 'إكسسوار أساسية', 'تصفيفة شعر وميكاب'],
                popular: false,
              },
              {
                name: 'باقة الفخامة',
                price: '4,500 درهم',
                features: ['فستان زفاف فاخر', 'قفطان مغربي فاخر', 'عمارية ملكية', 'إكسسوارات كاملة', 'تصفيفة كاملة'],
                popular: true,
              },
              {
                name: 'باقة الفي آي بي',
                price: '7,500 درهم',
                features: ['فستان زفاف فاخر من مصمم', 'قفطان مغربي فاخر', 'عمارية ملكية كاملة', 'إكسسوارات فاخرة', 'تصفيفة كاملة', 'جلسة تصوير مجانية'],
                popular: false,
              },
            ].map((pkg, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col ${
                    pkg.popular
                      ? 'bg-gradient-to-b from-gold-50 to-white gold-border gold-shadow scale-105'
                      : 'bg-white gold-border'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-white px-4 py-1 rounded-full text-sm font-semibold">
                      الأكثر طلباً
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-naskh text-center">
                    {pkg.name}
                  </h3>
                  <p className="text-3xl font-bold gold-text text-center mb-6">
                    {pkg.price}
                  </p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                        <Sparkles className="w-4 h-4 text-gold-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/212661060497?text=${encodeURIComponent(`السلام عليكم، أريد الحجز لباقة: ${pkg.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'gold-gradient text-white hover:shadow-lg hover:shadow-gold-500/30'
                        : 'bg-gold-50 text-gold-700 hover:bg-gold-100'
                    }`}
                  >
                    احجزي الآن
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:gap-3 transition-all"
            >
              رؤية جميع الباقات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-gold-50/30 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gold-400"></div>
                <Heart className="w-5 h-5 text-gold-500" />
                <div className="h-px w-12 bg-gold-400"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 font-naskh">
                ما تقوله عرايسنا
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="bg-white rounded-2xl p-6 gold-border gold-shadow h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="text-gold-600 font-semibold text-sm">— {testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gold-50 via-white to-pink-50 rounded-3xl p-10 sm:p-16 gold-border"
        >
          <Crown className="w-12 h-12 text-gold-500 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 font-naskh">
            هل أنتِ جاهزة ليومكِ المميز؟
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            احجزي موعدك الآن واحصلي على استشارة مجانية لاختيار الفستان أو القفطان المناسب لكِ
          </p>
          <a
            href="https://wa.me/212661060497?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%2C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%AC%D8%B2%20%D9%84%D9%8A%D9%88%D9%85%20%D8%B2%D9%81%D8%A7%D9%81%D9%8A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300 hover:-translate-y-1 shimmer"
          >
            احجزي موعدك عبر واتساب
          </a>
        </motion.div>
      </section>
    </div>
  );
}
