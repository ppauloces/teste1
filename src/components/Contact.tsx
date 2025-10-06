import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', whatsapp: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name} e gostaria de agendar uma avaliação. Meu WhatsApp: ${formData.whatsapp}`;
    window.open(`https://wa.me/5573999999999?text=${encodeURIComponent(message)}`, '_blank');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#f5f5f5] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#4a4a4a] mb-4">
            Pronta para se Transformar?
          </h2>
          <p className="text-xl text-[#4a4a4a]/70">
            Entre em contato e agende sua avaliação gratuita
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#4a4a4a] font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-[#e0d7c7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4b581]"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-[#4a4a4a] font-medium mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 border border-[#e0d7c7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4b581]"
                  placeholder="(73) 99999-9999"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#d4b581] text-white py-4 rounded-full hover:bg-[#a88e6e] transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitted ? 'Enviado!' : 'Agendar Avaliação'}</span>
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-[#d4b581] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#4a4a4a] mb-2">Endereço</h3>
                <p className="text-[#4a4a4a]/70">
                  Av. Principal, 123 - Centro<br />
                  Eunápolis, BA - CEP 45820-000
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-[#d4b581] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#4a4a4a] mb-2">Telefone</h3>
                <p className="text-[#4a4a4a]/70">
                  (73) 9999-9999<br />
                  WhatsApp: (73) 99999-9999
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-[#d4b581] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#4a4a4a] mb-2">Horário de Funcionamento</h3>
                <p className="text-[#4a4a4a]/70">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 13h
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4">
              <div className="bg-[#d4b581] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#4a4a4a] mb-2">E-mail</h3>
                <p className="text-[#4a4a4a]/70">
                  contato@rejuvenesse.com.br
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15410.344679817842!2d-39.577778!3d-16.377222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73a0c4e5b1d5b3d%3A0x8c5d5b5b5b5b5b5b!2sEun%C3%A1polis%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
