import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Os tratamentos são dolorosos?',
    answer: 'A maioria dos nossos tratamentos é minimamente invasiva e bem tolerada. Utilizamos técnicas modernas que priorizam o conforto do cliente. Para procedimentos específicos, aplicamos anestésicos tópicos quando necessário.'
  },
  {
    question: 'Como funciona a avaliação?',
    answer: 'A avaliação é gratuita e personalizada. Nossa equipe analisa suas necessidades, expectativas e características individuais para desenvolver um plano de tratamento ideal para você.'
  },
  {
    question: 'Quanto tempo duram os resultados?',
    answer: 'A durabilidade varia conforme o tratamento. Procedimentos como harmonização facial podem durar de 6 a 18 meses, enquanto tratamentos corporais geralmente requerem manutenção periódica. Durante a consulta, explicamos detalhadamente a duração esperada.'
  },
  {
    question: 'Há contraindicações?',
    answer: 'Alguns tratamentos podem ter contraindicações específicas, como gravidez, lactação ou determinadas condições de saúde. Por isso, realizamos uma avaliação completa antes de qualquer procedimento.'
  },
  {
    question: 'Quantas sessões são necessárias?',
    answer: 'O número de sessões varia conforme o tratamento e os objetivos desejados. Na avaliação inicial, elaboramos um plano personalizado com a quantidade recomendada de sessões.'
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Aceitamos diversas formas de pagamento: dinheiro, cartão de crédito, débito e PIX. Também oferecemos condições especiais de parcelamento para alguns tratamentos.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#4a4a4a] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-[#4a4a4a]/70">
            Tire suas dúvidas sobre nossos tratamentos
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-[#4a4a4a]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#d4b581] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#d4b581] flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-[#4a4a4a]/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
