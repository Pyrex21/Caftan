import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, Crown, Heart, Star } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Amaria() {
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
                العمارية المغربية الملكية
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                تجربة ملكية أصيلية ليوم الحناء والزفاف. العمارية التقليدية المغربية تضيف لمسة ملكية ليومكِ الخاص.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Amaria Display */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="rounded-2xl overflow-hidden gold-border gold-shadow">
                <img
                  src="/images/amaria1.jpg"
                  alt="العمارية المغربية"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold-500" />
                <span className="text-gold-600 font-semibold">تجربة ملكية أصيلية</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 font-naskh">
                عمارية مغربية تقليدية فاخرة
              </h2>
              <p className="text-gray-600 leading-relaxed">
                العمارية هي تقليد مغربي عريق يحمل العروس فوق رؤوس الحاضرين في حفل الزفاف.
                في بوتيك ليلى، نقدم لكِ عمارية فاخرة مزخرفة بألوان ذهبية وحجرات كريستال
                وأقمشة مبالغة بالأزهار والدانتيل.
              </p>
              <p className="text-gray-600 leading-relaxed">
                نقدم لكِ فريق متخصص من الحاضرين المدربين لحمل العمارية بشكل آمن ومريح،
                لنضمن لكِ تجربة ملكية لا تُنسى في يومكِ الأجمل.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gold-50 rounded-xl p-4 text-center">
                  <Crown className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-800">4 حاضرين</p>
                  <p className="text-xs text-gray-500">فريق مدرب</p>
                </div>
                <div className="bg-gold-50 rounded-xl p-4 text-center">
                  <Heart className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-800">تزيين كامل</p>
                  <p className="text-xs text-gray-500">أزهار ودانتيل</p>
                </div>
              </div>
              <a
                href="https://wa.me/212680895976?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%2C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%AC%D8%B2%20%D9%84%D9%84%D8%B9%D9%85%D8%A7%D8%B1%D9%8A%D8%A9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gold-gradient text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                احجزي العمارية الآن
                <ArrowLeft className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gold-50/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gold-400"></div>
                <Sparkles className="w-5 h-5 text-gold-500" />
                <div className="h-px w-12 bg-gold-400"></div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 font-naskh">
                ما تحصلينه مع العمارية
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
            {[
              {
                icon: Crown,
                title: 'عمارية فاخرة',
                desc: 'عمارية مزخرفة بألوان ذهبية وحجرات كريستال وأقمشة مبالغة',
              },
              {
                icon: Heart,
                title: 'فريق حاضرين',
                desc: '4 حاضرين مدربين لحمل العمارية بشكل آمن ومريح',
              },
              {
                icon: Star,
                title: 'تزيين كامل',
                desc: 'تزيين العمارية بأزهار ودانتيل وروائع متدلية فاخرة',
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="bg-white rounded-2xl p-8 text-center gold-border gold-shadow h-full">
                  <feature.icon className="w-10 h-10 text-gold-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-3 font-naskh">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 font-naskh">
                أسعار إيجار العمارية
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {[
              {
                name: 'العمارية الكلاسيكية',
                price: '2,000 درهم',
                features: ['عمارية مزخرفة', '4 حاضرين', 'تزيين أزهار'],
              },
              {
                name: 'العمارية الملكية',
                price: '3,500 درهم',
                features: ['عمارية فاخرة بالكريستال', '4 حاضرين مدربين', 'تزيين كامل بالدانتيل', 'موسيقى حناء'],
              },
            ].map((pkg, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="bg-white rounded-2xl p-8 gold-border gold-shadow flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-naskh">
                      {pkg.name}
                    </h3>
                    <ul className="space-y-2">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                          <Sparkles className="w-4 h-4 text-gold-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-3xl font-bold gold-text mb-3">{pkg.price}</p>
                    <a
                      href={`https://wa.me/212680895976?text=${encodeURIComponent(`السلام عليكم، أريد الحجز للعمارية: ${pkg.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 gold-gradient text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
                    >
                      احجزي الآن
                      <ArrowLeft className="w-4 h-4" />
                    </a>
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
