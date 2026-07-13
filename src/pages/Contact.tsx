import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, MapPin, Clock, MessageCircle, Send, Mail, Crown } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                <Crown className="w-5 h-5 text-gold-500" />
                <div className="h-px w-12 bg-gold-400"></div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 font-naskh">
                تواصل معنا
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                نحن هنا لنساعدكِ في تحضير يومكِ المميز. تواصلي معنا عبر الواتساب أو املئي النموذج أدناه وسنقوم بالتواصل معكِ في أقرب وقت.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 font-naskh">
                  معلومات التواصل
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-white rounded-xl p-5 gold-border">
                    <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">الهاتف</p>
                      <p className="text-gray-600 text-sm" dir="ltr">+212 6 80 89 59 76</p>
                      <p className="text-gray-500 text-xs mt-1">متواجدون للإجابة عن استفساراتكِ</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-5 gold-border">
                    <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">الواتساب</p>
                      <p className="text-gray-600 text-sm" dir="ltr">+212 6 80 89 59 76</p>
                      <a
                        href="https://wa.me/212680895976?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%2C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%AC%D8%B2%20%D9%84%D9%8A%D9%88%D9%85%20%D8%B2%D9%81%D8%A7%D9%81%D9%8A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-green-600 text-sm font-medium mt-2 hover:underline"
                      >
                        اضغطي للحجز عبر الواتساب
                        <Send className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-5 gold-border">
                    <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">العنوان</p>
                      <p className="text-gray-600 text-sm">
                       مركز أولاد ازباير، تازة 
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-5 gold-border">
                    <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">أوقات العمل</p>
                      <p className="text-gray-600 text-sm">
                        الإثنين - الأحد: 8:00 ص - 22:00 م
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden gold-border h-64 bg-gradient-to-br from-gold-50 to-pink-50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-gold-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">مركز أولاد الزباير ، تازة</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl p-8 gold-border gold-shadow">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 font-naskh">
                  ارسلي رسالة
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <Sparkles className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">شكراً لكِ!</h3>
                    <p className="text-gray-600">تم إرسال رسالتكِ بنجاح. سنقوم بالتواصل معكِ في أقرب وقت.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all bg-gold-50/30"
                        placeholder="اكتبي اسمكِ الكامل"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all bg-gold-50/30"
                        placeholder="06 XX XX XX XX"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        تاريخ الزفاف (اختياري)
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all bg-gold-50/30"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الرسالة
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gold-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all bg-gold-50/30 resize-none"
                        placeholder="اكتبي رسالتكِ هنا..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full gold-gradient text-white py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      إرسال الرسالة
                    </button>
                  </form>
                )}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 gold-border">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-800 mb-1">احجزي بسرعة عبر الواتساب</h3>
                    <p className="text-gray-600 text-sm">
                      اضغطي على الزر واحجزي موعدكِ في أقرب وقت
                    </p>
                  </div>
                  <a
                    href="https://wa.me/212680895976?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%2C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%AC%D8%B2%20%D9%84%D9%8A%D9%88%D9%85%20%D8%B2%D9%81%D8%A7%D9%81%D9%8A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all shrink-0"
                  >
                    احجزي الآن
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
