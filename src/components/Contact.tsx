import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/917075701406?text=${message}`, '_blank');
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-stone-50 to-amber-50/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-[#5c3d2e] mb-4">
            Visit Us
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#8c5e3c] to-[#b48a78] mx-auto mb-6"
          ></motion.div>
          <p className="text-xl text-stone-600">
            We'd love to see you at Lemerian Working Café
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
              <h3 className="text-2xl font-serif text-amber-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800 mb-1">Address</h4>
                    <p className="text-stone-600">
                      1st Floor, Emperado Building, Road No. 12,<br />
                      opposite Mahesh Bank, Banjara Hills,<br />
                      Hyderabad, Telangana 500034
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800 mb-1">Phone</h4>
                    <a href="tel:07075701406" className="text-stone-600 hover:text-amber-700 transition-colors">
                      07075701406
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800 mb-1">Hours</h4>
                    <p className="text-stone-600">8 AM – 12 AM</p>
                    <p className="text-stone-500 text-sm">Open 7 days a week</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-[#8c5e3c] to-[#b48a78] rounded-3xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-serif text-white mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border-2 text-white placeholder-white/70 focus:outline-none transition-all duration-300 ${
                      focusedField === 'name' ? 'border-white shadow-lg scale-105' : 'border-white/30'
                    }`}
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border-2 text-white placeholder-white/70 focus:outline-none transition-all duration-300 ${
                      focusedField === 'email' ? 'border-white shadow-lg scale-105' : 'border-white/30'
                    }`}
                    required
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border-2 text-white placeholder-white/70 focus:outline-none transition-all duration-300 ${
                      focusedField === 'message' ? 'border-white shadow-lg scale-105' : 'border-white/30'
                    }`}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-[#5c3d2e] py-3 rounded-xl font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8676299999997!2d78.44196!3d17.41892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cded0e7c65%3A0x7e8f3e3e3e3e3e3e!2sBanjara%20Hills%2C%20Road%20No.%2012%2C%20Hyderabad%2C%20Telangana%20500034!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
