import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Menu, 
  X, 
  Printer, 
  PackageCheck,
  Clock, 
  Award, 
  Users, 
  HeadphonesIcon, 
  Phone,
  SwitchCamera,
  MapPin,
  Wrench, 
  BarChart3 
} from 'lucide-react';
import './App.css';

const WHATSAPP_NUMBER = '552137585168';
const COMPANY_ADDRESS = 'Av. Dr. Albino Imparato, 680, Lt16 Qdr 69 LJ 02 - Jardim Catarina, São Gonçalo - RJ';
const COMPANY_PHONE = '(21) 3758-5168';

function Section({ children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="dark bg-zinc-950 text-zinc-50 min-h-screen">
      {/* Noise Overlay */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-50" />
      
      {/* Ambient Gradients */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed top-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <img 
            src="https://customer-assets.emergentagent.com/job_solucoes-toner/artifacts/lsc5e0ud_tsm%20branco.png" 
            alt="TSM Printer Solutions" 
            className="h-12 md:h-14"
            data-testid="logo"
          />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => handleScroll('inicio')} className="text-zinc-300 hover:text-white transition-colors" data-testid="nav-inicio">Início</button>
            <button onClick={() => handleScroll('servicos')} className="text-zinc-300 hover:text-white transition-colors" data-testid="nav-servicos">Serviços</button>
            <button onClick={() => handleScroll('sobre')} className="text-zinc-300 hover:text-white transition-colors" data-testid="nav-sobre">Sobre</button>
            <button onClick={() => handleScroll('contato')} className="text-zinc-300 hover:text-white transition-colors" data-testid="nav-contato">Contato</button>
            <button 
              onClick={() => handleScroll('contato')} 
              className="bg-white text-black hover:bg-zinc-200 transition-colors font-bold px-6 py-2.5 rounded-full"
              data-testid="cta-orcamento"
            >
              Solicitar orçamento
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-zinc-900 border-t border-white/10 px-6 py-4 space-y-4"
            data-testid="mobile-menu"
          >
            <button onClick={() => handleScroll('inicio')} className="block text-zinc-300 hover:text-white transition-colors w-full text-left">Início</button>
            <button onClick={() => handleScroll('servicos')} className="block text-zinc-300 hover:text-white transition-colors w-full text-left">Serviços</button>
            <button onClick={() => handleScroll('sobre')} className="block text-zinc-300 hover:text-white transition-colors w-full text-left">Sobre</button>
            <button onClick={() => handleScroll('contato')} className="block text-zinc-300 hover:text-white transition-colors w-full text-left">Contato</button>
            <button onClick={() => handleScroll('contato')} className="bg-white text-black hover:bg-zinc-200 transition-colors font-bold px-6 py-2.5 rounded-full w-full">
              Solicitar orçamento
            </button>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1650094980833-7373de26feb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwcmludGVyJTIwZGFya3xlbnwwfHx8fDE3NzUxNzY4MTh8MA&ixlib=rb-4.1.0&q=85"
            alt="Modern printer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-block mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-zinc-400">Soluções em impressão</span>
            </div>
            <h1 className="text-5xl sm:text-6xl tracking-tighter font-black mb-6 leading-tight">
              Soluções completas em <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">impressão</span> para sua empresa
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-zinc-300 mb-10">
              Venda de toner e locação de impressoras com qualidade e economia. Atendemos empresas, escritórios e profissionais com soluções eficientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] text-center"
                data-testid="hero-cta-whatsapp"
              >
                Fale conosco
              </a>
              <button 
                onClick={() => handleScroll('servicos')}
                className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-full transition-all backdrop-blur-md"
                data-testid="hero-cta-servicos"
              >
                Ver serviços
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <Section id="servicos" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-zinc-400">O que fazemos</span>
            <h2 className="text-4xl sm:text-5xl tracking-tight font-bold mt-4 mb-6">Nossos Serviços</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Oferecemos soluções completas para todas as necessidades de impressão da sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Printer, title: 'Locação de Impressoras', desc: 'Equipamentos de pequeno, médio e grande porte com manutenção inclusa', color: 'text-cyan-400' },
              { icon: PackageCheck, title: 'Venda de Toner', desc: 'Toners originais e compatíveis com garantia de qualidade', color: 'text-pink-400' },
              { icon: Wrench, title: 'Manutenção e Suporte', desc: 'Suporte técnico especializado para manter seus equipamentos funcionando', color: 'text-yellow-400' },
              { icon: BarChart3, title: 'Soluções Personalizadas', desc: 'Planos customizados para atender as necessidades da sua empresa', color: 'text-cyan-400' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all rounded-2xl p-8 md:p-10 relative overflow-hidden group"
                data-testid={`service-card-${idx}`}
              >
                <div className={`w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl sm:text-3xl tracking-tight font-semibold mb-4">{service.title}</h3>
                <p className="text-base leading-relaxed text-zinc-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="sobre" className="py-24 md:py-32 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <img 
                src="https://images.pexels.com/photos/4623182/pexels-photo-4623182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Equipe TSM"
                className="rounded-2xl w-full h-auto"
                data-testid="about-image"
              />
            </div>
            <div className="lg:col-span-6">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-zinc-400">Sobre nós</span>
              <h2 className="text-4xl sm:text-5xl tracking-tight font-bold mt-4 mb-6">Expertise em Soluções de Impressão</h2>
              <div className="space-y-4 text-base leading-relaxed text-zinc-300">
                <p>
                  A <strong className="text-white">TSM Printer Solutions</strong> é especializada em fornecer soluções completas de impressão para empresas de todos os portes. Nossa missão é oferecer equipamentos de alta qualidade e serviços que otimizam custos e aumentam a produtividade.
                </p>
                <p>
                  Com <strong className="text-white">anos de experiência no mercado</strong>, entendemos as necessidades específicas de cada cliente e desenvolvemos planos personalizados que garantem economia, eficiência e suporte técnico contínuo.
                </p>
                <p>
                  Nossa equipe de especialistas está sempre pronta para oferecer <strong className="text-white">atendimento personalizado</strong>, desde a escolha do equipamento ideal até o suporte técnico pós-venda, garantindo que sua operação nunca pare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Diferenciais Section */}
      <Section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-zinc-400">Por que escolher a TSM</span>
            <h2 className="text-4xl sm:text-5xl tracking-tight font-bold mt-4 mb-6">Nossos Diferenciais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: 'Atendimento Rápido', desc: 'Resposta ágil e suporte quando você precisar' },
              { icon: Award, title: 'Equipamentos de Qualidade', desc: 'Impressoras das melhores marcas do mercado' },
              { icon: Users, title: 'Planos Flexíveis', desc: 'Soluções adaptadas ao seu negócio' },
              { icon: HeadphonesIcon, title: 'Suporte Especializado', desc: 'Equipe técnica qualificada e experiente' }
            ].map((diff, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl hover:bg-zinc-900/50 transition-colors"
                data-testid={`diferencial-card-${idx}`}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-6">
                  <diff.icon size={28} className="text-cyan-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium mb-3">{diff.title}</h3>
                <p className="text-base leading-relaxed text-zinc-400">{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contato" className="py-24 md:py-32 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-zinc-400">Fale conosco</span>
            <h2 className="text-4xl sm:text-5xl tracking-tight font-bold mt-4 mb-6">Entre em Contato</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Estamos prontos para atender sua empresa com as melhores soluções em impressão
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                  <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="text-zinc-400 hover:text-cyan-400 transition-colors" data-testid="contact-phone">
                    {COMPANY_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-pink-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                  <p className="text-zinc-400">
                    Ao lado da farmácia Genesis<br />
                    {COMPANY_ADDRESS}<br />
                    Entre as ruas 18 e 19<br />
                    CEP: 24716-452
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-pink-400 shrink-0">
                  <SwitchCamera size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                  <a 
                    href="https://www.instagram.com/tsm_cartucho/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-pink-400 transition-colors" 
                    data-testid="contact-instagram"
                  >
                    @tsm_cartucho
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-zinc-800 h-96 lg:h-full" data-testid="google-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1698851785927!2d-43.05622842472!3d-22.911088837719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997be9e6c7f0c9%3A0x5a5f5e5e5e5e5e5e!2sAv.%20Dr.%20Albino%20Imparato%2C%20680%20-%20Jardim%20Catarina%2C%20S%C3%A3o%20Gon%C3%A7alo%20-%20RJ%2C%2024716-452!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização TSM Printer Solutions"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_solucoes-toner/artifacts/lsc5e0ud_tsm%20branco.png" 
                alt="TSM Printer Solutions" 
                className="h-12 mb-4"
              />
              <p className="text-zinc-400 text-sm leading-relaxed">
                Soluções completas em impressão para sua empresa. Qualidade, economia e suporte técnico especializado.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-zinc-400">
                <p>{COMPANY_PHONE}</p>
                <p>Jardim Catarina, São Gonçalo - RJ</p>
                <p>CEP: 24716-452</p>
                 <a 
                  href="https://www.instagram.com/tsm_cartucho/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-400 transition-colors"
                >
                 <SwitchCamera size={16} />
                  @tsm_cartucho
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-sm text-zinc-400">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-900 pt-8 text-center text-sm text-zinc-500">
            <p>&copy; {new Date().getFullYear()} TSM Printer Solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid="whatsapp-float-button"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </div>
  );
}

export default App;

