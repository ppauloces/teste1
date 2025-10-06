import { Award, Users, Sparkles, Clock } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Tecnologia Avançada',
    description: 'Equipamentos de última geração para resultados superiores'
  },
  {
    icon: Users,
    title: 'Profissionais Qualificados',
    description: 'Equipe especializada e constantemente atualizada'
  },
  {
    icon: Sparkles,
    title: 'Resultados Comprovados',
    description: 'Milhares de clientes satisfeitos e transformados'
  },
  {
    icon: Clock,
    title: 'Atendimento Personalizado',
    description: 'Cada tratamento é único e feito especialmente para você'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#4a4a4a] mb-4">
            Sua Jornada de Beleza Começa Aqui
          </h2>
          <p className="text-xl text-[#4a4a4a]/70">
            Por que escolher a Rejuvenesse
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-[#d4b581] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#4a4a4a] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#4a4a4a]/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
