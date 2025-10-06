import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img src="/image.png" alt="Rejuvenesse" className="h-12 w-12" />
            <span className="text-2xl font-serif text-[#d4b581]">Rejuvenesse</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-[#4a4a4a] hover:text-[#d4b581] transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('services')} className="text-[#4a4a4a] hover:text-[#d4b581] transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#4a4a4a] hover:text-[#d4b581] transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-[#4a4a4a] hover:text-[#d4b581] transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#4a4a4a] hover:text-[#d4b581] transition-colors">
              Contato
            </button>
            <a
              href="https://wa.me/5573999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d4b581] text-white px-6 py-2.5 rounded-full hover:bg-[#a88e6e] transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Agende Agora</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#4a4a4a]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#e0d7c7]">
          <nav className="px-4 py-6 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-[#4a4a4a] hover:text-[#d4b581] transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-[#4a4a4a] hover:text-[#d4b581] transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[#4a4a4a] hover:text-[#d4b581] transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-[#4a4a4a] hover:text-[#d4b581] transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[#4a4a4a] hover:text-[#d4b581] transition-colors">
              Contato
            </button>
            <a
              href="https://wa.me/5573999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#d4b581] text-white px-6 py-2.5 rounded-full hover:bg-[#a88e6e] transition-colors text-center"
            >
              Agende Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
