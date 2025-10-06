import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#f5f5f5] via-[#e0d7c7] to-[#f5f5f5] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-serif text-[#4a4a4a] leading-tight">
              Rejuvenesse: Sinta a{' '}
              <span className="text-[#d4b581]">Transformação</span>
            </h1>
            <p className="text-xl text-[#4a4a4a]/80 leading-relaxed">
              Sua melhor versão está aqui. Tratamentos estéticos faciais e corporais personalizados para realçar sua beleza natural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#d4b581] text-white px-8 py-4 rounded-full hover:bg-[#a88e6e] transition-all transform hover:scale-105 text-center font-medium text-lg shadow-lg"
              >
                Agende sua Avaliação Gratuita
              </a>
              <a
                href="https://wa.me/5573999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#4a4a4a] px-8 py-4 rounded-full hover:bg-[#f5f5f5] transition-all transform hover:scale-105 text-center font-medium text-lg shadow-lg flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fale no WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#d4b581]/20 rounded-full blur-3xl"></div>
            <img
              src="https://images.pexels.com/photos/3985320/pexels-photo-3985320.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Tratamentos estéticos"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
