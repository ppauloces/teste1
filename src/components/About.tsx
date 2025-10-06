import { Heart, Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#4a4a4a] mb-6">
              A Rejuvenesse nasceu para realçar sua melhor versão
            </h2>
            <p className="text-lg text-[#4a4a4a]/80 leading-relaxed mb-6">
              Em Eunápolis, somos referência em tratamentos estéticos faciais e corporais. Nossa missão é transformar vidas através do cuidado personalizado e da tecnologia de ponta.
            </p>
            <p className="text-lg text-[#4a4a4a]/80 leading-relaxed">
              Cada cliente é único, e nossos tratamentos são desenvolvidos especialmente para atender suas necessidades e objetivos. Com uma equipe altamente qualificada e em constante atualização, garantimos resultados seguros e transformadores.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3738384/pexels-photo-3738384.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Clínica Rejuvenesse"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-[#d4b581] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-[#4a4a4a] mb-4">Missão</h3>
            <p className="text-[#4a4a4a]/70">
              Proporcionar bem-estar, autoestima e transformação através de tratamentos estéticos personalizados e de alta qualidade.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-[#d4b581] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-[#4a4a4a] mb-4">Visão</h3>
            <p className="text-[#4a4a4a]/70">
              Ser referência em estética na região, reconhecida pela excelência, inovação e resultados transformadores.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-[#d4b581] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-[#4a4a4a] mb-4">Valores</h3>
            <p className="text-[#4a4a4a]/70">
              Ética, qualidade, inovação, respeito e compromisso com a satisfação e segurança dos nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
