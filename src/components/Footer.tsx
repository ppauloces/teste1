import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#4a4a4a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/image.png" alt="Rejuvenesse" className="h-12 w-12" />
              <span className="text-2xl font-serif text-[#d4b581]">Rejuvenesse</span>
            </div>
            <p className="text-white/70">
              Transformando vidas através da beleza e autoestima.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#d4b581]">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-[#d4b581] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-[#d4b581] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-[#d4b581] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-[#d4b581] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#d4b581]">Contato</h3>
            <ul className="space-y-2 text-white/70">
              <li>(73) 9999-9999</li>
              <li>contato@rejuvenesse.com.br</li>
              <li>Eunápolis, BA</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#d4b581]">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#d4b581] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#d4b581] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@rejuvenesse.com.br"
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#d4b581] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>© 2025 Rejuvenesse Clínica de Estética. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
