import { useEffect, useRef, useState } from 'react';
import { Wifi, Laptop, Users, Coffee, Book, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Wifi, text: 'High-Speed WiFi' },
  { icon: Laptop, text: 'Power Outlets' },
  { icon: Users, text: 'Meeting Spaces' },
  { icon: Coffee, text: 'Unlimited Refills' },
  { icon: Book, text: 'Quiet Zones' },
  { icon: Lightbulb, text: 'Creative Ambiance' },
];

export default function Workspace() {
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
      className="relative py-24 px-4 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-stone-900/85 to-amber-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-amber-50 mb-6">
            Workspace Zone
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#b48a78] to-white mx-auto mb-8"
          ></motion.div>
          <p className="text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            A café where ideas flow freely. Perfect for freelancers, students, and professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center group transition-all duration-300 border border-white/20"
                >
                  <motion.div
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-[#b48a78] to-[#8c5e3c] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl"
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <p className="text-xl text-amber-50 font-medium">
                    {feature.text}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif text-amber-50 mb-6">
                Why Work at Lemerian?
              </h3>
              <ul className="space-y-4 text-lg text-amber-100">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 text-2xl">•</span>
                  <span>Serene environment with natural elements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 text-2xl">•</span>
                  <span>Comfortable seating and ergonomic tables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 text-2xl">•</span>
                  <span>Premium coffee and fresh food all day</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 text-2xl">•</span>
                  <span>Community of like-minded creatives</span>
                </li>
              </ul>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Workspace"
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
