import { useEffect, useRef, useState } from 'react';
import { Coffee, Sandwich, Cake, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const menuItems = [
  {
    name: 'Espresso',
    price: '₹149',
    icon: Coffee,
    color: 'from-amber-500 to-amber-700',
    bgColor: 'bg-amber-50',
  },
  {
    name: 'Cappuccino',
    price: '₹179',
    icon: Coffee,
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-50',
  },
  {
    name: 'Sandwich',
    price: '₹249',
    icon: Sandwich,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
  },
  {
    name: 'Chocolate Pastry',
    price: '₹199',
    icon: Cake,
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
  },
  {
    name: 'Smoothie',
    price: '₹229',
    icon: Droplets,
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
  },
];

export default function Menu() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            menuItems.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-amber-50/30 to-stone-50"
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
            Our Menu
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#8c5e3c] to-[#b48a78] mx-auto mb-6"
          ></motion.div>
          <p className="text-xl text-stone-600">
            Crafted with love, served with care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleItems.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                className="group relative cursor-pointer"
              >
                <div className={`${item.bgColor} rounded-3xl p-8 shadow-lg overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ duration: 0.3 }}
                      className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-serif text-stone-800 mb-3">
                      {item.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-stone-900">
                        {item.price}
                      </span>
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <span className="text-2xl">☕</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(140,94,60,0.3)" }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/917075701406"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#8c5e3c] to-[#b48a78] text-white rounded-full font-medium shadow-lg"
          >
            Order Now via WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
