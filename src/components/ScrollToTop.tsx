import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  show: boolean;
  onClick: () => void;
}

export default function ScrollToTop({ show, onClick }: ScrollToTopProps) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 bg-gradient-to-br from-amber-700 to-amber-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-amber-500/50 z-50 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 animate-bounce" />
    </button>
  );
}
