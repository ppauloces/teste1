import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    treatment: 'Harmonização Facial',
    text: 'Experiência incrível! Os resultados superaram minhas expectativas. A equipe é extremamente profissional e atenciosa. Me sinto muito mais confiante!',
    rating: 5
  },
  {
    name: 'Ana Costa',
    treatment: 'Limpeza de Pele',
    text: 'A clínica é impecável e o atendimento é excepcional. Minha pele nunca esteve tão bonita e saudável. Super recomendo!',
    rating: 5
  },
  {
    name: 'Juliana Mendes',
    treatment: 'Drenagem Linfática',
    text: 'Profissionais qualificados, ambiente acolhedor e resultados visíveis desde a primeira sessão. Estou apaixonada pelo cuidado que recebo aqui!',
    rating: 5
  },
  {
    name: 'Patricia Santos',
    treatment: 'Criolipólise',
    text: 'Finalmente encontrei uma clínica de confiança! Os resultados são impressionantes e o atendimento personalizado faz toda diferença.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#4a4a4a] mb-4">
            Quem Confia na Rejuvenesse
          </h2>
          <p className="text-xl text-[#4a4a4a]/70">
            Histórias reais de transformação e autoestima
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#f5f5f5] to-[#e0d7c7] p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#d4b581] mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#d4b581] fill-current" />
                ))}
              </div>
              <p className="text-[#4a4a4a] text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-[#d4b581]/30 pt-4">
                <p className="font-semibold text-[#4a4a4a]">{testimonial.name}</p>
                <p className="text-[#4a4a4a]/70 text-sm">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
