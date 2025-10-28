import { Coffee } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-amber-100/30 rounded-full animate-float"
          style={{
            left: `${particle.left}%`,
            bottom: '10%',
            animationDelay: `${particle.delay}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        ></div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Coffee className="w-20 h-20 text-amber-200 animate-pulse-slow" />
            <div className="absolute -top-2 -right-2 w-6 h-6">
              <div className="absolute inset-0 bg-amber-300/40 rounded-full animate-steam-1"></div>
            </div>
            <div className="absolute -top-4 right-0 w-5 h-5">
              <div className="absolute inset-0 bg-amber-200/30 rounded-full animate-steam-2"></div>
            </div>
            <div className="absolute -top-6 right-2 w-4 h-4">
              <div className="absolute inset-0 bg-amber-100/20 rounded-full animate-steam-3"></div>
            </div>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl font-serif text-amber-50 mb-4 tracking-wide"
        >
          Lemerian
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl md:text-5xl font-light text-amber-100 mb-6"
        >
          Working Café
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-amber-50/90 font-light tracking-widest mb-12"
        >
          Brew. Work. Connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/917075701406"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-[#8c5e3c] to-[#b48a78] hover:from-[#b48a78] hover:to-[#8c5e3c] text-white rounded-full font-medium transition-all duration-300 shadow-lg"
          >
            Book Your Seat
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#menu"
            className="px-8 py-4 bg-transparent border-2 border-amber-100 hover:bg-amber-100 hover:text-amber-900 text-amber-50 rounded-full font-medium transition-all duration-300"
          >
            Explore Menu
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-100/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-100/70 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
}
