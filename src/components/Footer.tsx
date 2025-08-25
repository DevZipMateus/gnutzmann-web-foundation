
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/79f351fb-40b4-48cd-a0f7-49c5e5e1bec7.png" 
                alt="Gnutzmann Contabilidade e Consultoria"
                className="h-12 w-auto mr-3"
              />
              <div>
                <div className="text-xl font-bold text-primary">Gnutzmann</div>
                <div className="text-sm text-muted-foreground">Contabilidade e Consultoria</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">
              Desde 1995 oferecendo serviços contábeis com proximidade e confiança. 
              Nos tornamos parte da sua empresa para auxiliar nas melhores decisões.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>CNPJ: 00.864.674/0001-34</p>
              <p>CRC: [Registro no conselho]</p>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#servicos" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contabilidade
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Fiscal
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Departamento Pessoal
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Abertura de Empresas
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Consultoria
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <span>
                  Rua Teotônio Vilela, 305<br />
                  Pelotas - RS
                </span>
              </li>
              <li className="flex items-center text-muted-foreground text-sm">
                <Phone className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                <a 
                  href="tel:53984024960" 
                  className="hover:text-primary transition-colors"
                  aria-label="Ligar para a empresa"
                >
                  (53) 9 8402-4960
                </a>
              </li>
              <li className="flex items-center text-muted-foreground text-sm">
                <Mail className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contato@gnutzmann.com.br" 
                  className="hover:text-primary transition-colors"
                  aria-label="Enviar e-mail para a empresa"
                >
                  contato@gnutzmann.com.br
                </a>
              </li>
              <li className="flex items-start text-muted-foreground text-sm">
                <Clock className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <span>
                  Seg - Sex: 8h30 às 12h<br />
                  e das 13h45 às 18h
                </span>
              </li>
            </ul>

            <div className="mt-4">
              <a
                href="https://wa.me/5353984024960?text=Olá! Entrei em contato através do site da Gnutzmann Contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                aria-label="Falar no WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Gnutzmann Contabilidade e Consultoria. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span>Desenvolvido com tecnologia e cuidado</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
