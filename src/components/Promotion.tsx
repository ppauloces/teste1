import { Tag, Clock } from 'lucide-react';

export default function Promotion() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#d4b581] to-[#a88e6e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-2 rounded-full mb-6">
            <Tag className="w-5 h-5" />
            <span className="font-semibold">Promoção do Mês</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Primeira Sessão com Desconto Especial
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ganhe 20% de desconto na sua primeira sessão de qualquer tratamento. Transforme-se com a Rejuvenesse!
          </p>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Clock className="w-5 h-5" />
            <span className="text-lg">Válido até o final do mês</span>
          </div>
          <a
            href="https://wa.me/5573999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#d4b581] px-10 py-4 rounded-full hover:bg-[#f5f5f5] transition-all transform hover:scale-105 font-semibold text-lg shadow-xl"
          >
            Aproveitar Oferta Agora
          </a>
        </div>
      </div>
    </section>
  );
}
