import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const plans = [
  {
    title: "Day Pass",
    price: "₹199 / day",
    features: ["6hr access", "1 complimentary beverage", "Free Wi-Fi"],
  },
  {
    title: "Weekly Pass",
    price: "₹999 / week",
    features: ["8hr/day access", "Priority seating", "10% off food"],
  },
  {
    title: "Monthly Member",
    price: "₹3,999 / month",
    features: ["Unlimited access", "1 free beverage/day", "Member perks"],
    popular: true,
  },
  {
    title: "Premium Member",
    price: "₹5,999 / month",
    features: ["Priority seating", "24/7 access", "Exclusive events"],
  },
  {
    title: "Private Cabin",
    price: "₹9,999 / month",
    features: ["Private cabin", "Conference access", "Dedicated support"],
  },
];

const addons = [
  {
    name: "Hourly Extension",
    price: "₹60 / hr",
    icon: "⏱",
    desc: "Extend your stay seamlessly — perfect for long sessions.",
  },
  {
    name: "Conference Room",
    price: "₹999 / hr",
    icon: "🏢",
    desc: "Ideal for 7 people. +₹100 per extra person.",
  },
  {
    name: "Digital Locker",
    price: "₹99 / day",
    icon: "🔐",
    desc: "Keep your belongings secure while you work stress-free.",
  },
];

export default function Packages() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("packages");
      if (section) {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        controls.start({
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 80,
          transition: { duration: 0.8, ease: "easeOut" },
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => emblaApi.scrollNext(), 4000);
      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <section
      id="packages"
      className="py-24 bg-gradient-to-b from-[#fff8f2] via-[#fff1e5] to-[#fdf4ee] text-center relative overflow-hidden"
    >
      {/* Animated Heading */}
      <motion.div animate={controls} initial={{ opacity: 0, y: 100 }}>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#8B4513] to-[#d97706] drop-shadow-sm">
          Choose Your Perfect Work Plan
        </h2>
        <p className="text-brown-700 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Flexible passes and memberships crafted for <strong>students</strong>,{" "}
          <strong>freelancers</strong>, and <strong>founders</strong> — built to
          help you stay longer and focus better.
        </p>
      </motion.div>

      {/* Desktop Cards */}
      <div className="hidden md:grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.03 }}
            viewport={{ once: true }}
            className={`relative rounded-3xl p-8 shadow-lg hover:shadow-2xl bg-white transition-all border ${
              plan.popular
                ? "border-amber-400 ring-4 ring-amber-100"
                : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#ffb347] to-[#ffcc33] text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                ⭐ Most Popular
              </div>
            )}
            <h3 className="text-2xl font-semibold text-brown-800 mt-4">
              {plan.title}
            </h3>
            <p className="text-3xl font-bold text-[#9c6644] mt-3 mb-6">
              {plan.price}
            </p>
            <ul className="text-brown-600 mb-8 space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex justify-center gap-2 items-center">
                  ✅ <span>{f}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: "0px 0px 15px #ffb347" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#9c6644] to-[#6f3e23] text-white font-semibold shadow-md transition-all hover:shadow-lg"
            >
              Book Your Spot
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden overflow-hidden mt-10" ref={emblaRef}>
        <div className="flex gap-6 px-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              whileHover={{ y: -5 }}
              className={`flex-[0_0_85%] rounded-3xl shadow-md p-6 bg-white relative ${
                plan.popular
                  ? "border-2 border-yellow-500 ring-2 ring-yellow-100"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                  Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-brown-800 mb-1">
                {plan.title}
              </h3>
              <p className="text-xl font-bold text-brown-700 mb-3">{plan.price}</p>
              <ul className="text-brown-600 mb-5 text-sm space-y-1">
                {plan.features.map((f) => (
                  <li key={f}>✅ {f}</li>
                ))}
              </ul>
              <button className="px-5 py-2 bg-gradient-to-r from-[#9c6644] to-[#6f3e23] text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Compare Plans Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-3xl font-bold text-brown-800 mb-6">
          Want to Compare All Plans?
        </h3>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const table = document.getElementById("compare-table");
            if (table) {
              table.classList.toggle("hidden");
              table.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }}
          className="px-10 py-3 rounded-full bg-gradient-to-r from-[#9c6644] to-[#6f3e23] text-white font-medium shadow-lg hover:shadow-xl transition-all"
        >
          Compare Packages
        </motion.button>

        <div
          id="compare-table"
          className="hidden overflow-x-auto mt-10 border border-gray-200 rounded-2xl bg-white shadow-xl"
        >
          <table className="min-w-full text-left text-gray-800">
            <thead className="bg-[#fff3e8]">
              <tr>
                <th className="py-4 px-6 font-semibold">Features</th>
                {plans.map((plan) => (
                  <th key={plan.title} className="py-4 px-6 font-semibold text-center">
                    {plan.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3 px-4 font-medium">Access Hours</td>
                <td className="text-center">6hr/day</td>
                <td className="text-center">8hr/day</td>
                <td className="text-center">Unlimited</td>
                <td className="text-center">24/7</td>
                <td className="text-center">Private</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="py-3 px-4 font-medium">Free Beverage</td>
                <td className="text-center">1</td>
                <td className="text-center">1</td>
                <td className="text-center">Daily</td>
                <td className="text-center">Premium</td>
                <td className="text-center">Custom</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4 font-medium">Discount on Food</td>
                <td className="text-center">5%</td>
                <td className="text-center">10%</td>
                <td className="text-center">8%</td>
                <td className="text-center">12%</td>
                <td className="text-center">—</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="py-3 px-4 font-medium">Conference Room</td>
                <td className="text-center">❌</td>
                <td className="text-center">2hr</td>
                <td className="text-center">1.5hr x4</td>
                <td className="text-center">✅</td>
                <td className="text-center">✅</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4 font-medium">Digital Locker</td>
                <td className="text-center">❌</td>
                <td className="text-center">✅</td>
                <td className="text-center">✅</td>
                <td className="text-center">✅</td>
                <td className="text-center">✅</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="py-3 px-4 font-medium">Price</td>
                <td className="text-center">₹199</td>
                <td className="text-center">₹999</td>
                <td className="text-center">₹3,999</td>
                <td className="text-center">₹5,999</td>
                <td className="text-center">₹9,999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Add-ons Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-24 bg-gradient-to-r from-[#fff4e6] to-[#ffe9d2] py-14 px-8 rounded-3xl shadow-inner max-w-5xl mx-auto"
      >
        <h3 className="text-4xl font-extrabold text-brown-800 mb-10">
          ✨ Add-ons to Boost Your Experience
        </h3>
        <div className="grid md:grid-cols-3 gap-10 text-brown-700">
          {addons.map((addon) => (
            <motion.div
              key={addon.name}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-2xl bg-white shadow-md hover:shadow-lg border border-amber-100"
            >
              <div className="text-5xl mb-3">{addon.icon}</div>
              <h4 className="text-2xl font-semibold mb-2 text-brown-800">
                {addon.name}
              </h4>
              <p className="text-brown-600 text-sm mb-3">{addon.desc}</p>
              <p className="text-lg font-bold text-[#9c6644]">{addon.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating CTA Badge */}
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileHover={{ scale: 1.1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut",
        }}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#ff9f43] to-[#ff6b6b] text-white font-semibold px-6 py-3 rounded-full shadow-2xl cursor-pointer hover:shadow-xl transition-all"
        onClick={() => {
          const packages = document.getElementById("packages");
          if (packages)
            packages.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
      >
        🔥 Save More with Monthly Plan!
      </motion.div>
    </section>
  );
}
