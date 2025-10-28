import { useEffect, useRef, useState } from 'react';
import { Leaf, Waves, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-stone-50 to-amber-50/30 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-[#5c3d2e] mb-4">
            About Lemerian
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#8c5e3c] to-[#b48a78] mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-[#5c3d2e] leading-relaxed mb-6">
              Lemerian Working Café is a premium coworking space designed for students,
              freelancers, and professionals who seek a cozy, productive, and stylish
              environment.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Located in the heart of Banjara Hills, Hyderabad, we combine the warmth of
              handcrafted coffee with serene interiors featuring plants, aquariums, and
              floral art. Every corner is designed to inspire creativity and productivity.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center group"
              >
                <div className="bg-green-100/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-green-700" />
                </div>
                <p className="text-sm text-[#5c3d2e] font-medium">Indoor Plants</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center group"
              >
                <div className="bg-blue-100/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300">
                  <Waves className="w-8 h-8 text-blue-700" />
                </div>
                <p className="text-sm text-[#5c3d2e] font-medium">Fish Aquarium</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-center group"
              >
                <div className="bg-pink-100/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-pink-700" />
                </div>
                <p className="text-sm text-[#5c3d2e] font-medium">Floral Art</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#b48a78]/20 to-[#8c5e3c]/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <img
                src="https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Lemerian Café Interior"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
