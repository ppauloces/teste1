import { Sparkles, Zap, Heart, Wind } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Estética Facial',
    treatments: [
      'Limpeza de Pele Profunda',
      'Peelings Químicos',
      'Harmonização Facial',
      'Botox e Bioestimuladores',
      'Ácido Hialurônico',
      'Skinbooster'
    ],
    image: 'https://images.pexels.com/photos/3985328/pexels-photo-3985328.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Heart,
    title: 'Harmonização Corporal',
    treatments: [
      'Bioestimuladores de Colágeno',
      'Ultrassom Microfocado',
      'Criolipólise',
      'Radiofrequência',
      'Mesoterapia',
      'Carboxiterapia'
    ],
    image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Wind,
    title: 'Tratamentos Corporais',
    treatments: [
      'Drenagem Linfática',
      'Massagem Modeladora',
      'Massagem Relaxante',
      'Tratamentos para Celulite',
      'Redução de Medidas',
      'Tonificação Corporal'
    ],
    image: 'https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    icon: Zap,
    title: 'Fotoepilação',
    treatments: [
      'Depilação a Laser',
      'Tratamento para Todos os Tipos de Pele',
      'Tecnologia de Ponta',
      'Resultados Duradouros',
      'Procedimento Seguro',
      'Conforto durante o Tratamento'
    ],
    image: 'https://images.pexels.com/photos/7755497/pexels-photo-7755497.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#f5f5f5] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#4a4a4a] mb-4">
            Nossos Tratamentos Mais Desejados
          </h2>
          <p className="text-xl text-[#4a4a4a]/70">
            Procedimentos personalizados para realçar sua beleza natural
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className="bg-[#d4b581] w-12 h-12 rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {service.treatments.map((treatment, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#d4b581] mr-2">•</span>
                      <span className="text-[#4a4a4a]">{treatment}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/5573999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#d4b581] text-white text-center py-3 rounded-full hover:bg-[#a88e6e] transition-colors font-medium"
                >
                  Saber Mais via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
