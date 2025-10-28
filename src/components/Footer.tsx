import { Instagram, Facebook, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-stone-900 text-amber-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
            >
              <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:hello@lemerian.com"
              className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-amber-100 mb-2 flex items-center gap-2 justify-center">
              © 2025 Lemerian Workin Café
              <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
            </p>
            <p className="text-amber-200/70 text-sm">
              Designed by YourWebPartner
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
