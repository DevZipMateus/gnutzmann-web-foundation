
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Desde 1995 em Pelotas
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Gnutzmann
              <span className="text-primary block">Contabilidade</span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground">
                e Consultoria
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Com profissionais que acompanham nossa trajetória há anos, nossa maior 
              característica é a <strong className="text-foreground">aproximação com os clientes</strong>, 
              criando um vínculo de confiança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="btn-primary">
                <a 
                  href="https://wa.me/5353984024960?text=Olá! Gostaria de conhecer os serviços da Gnutzmann Contabilidade."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar conosco via WhatsApp"
                >
                  Fale Conosco
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline"
                onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Ver nossos serviços"
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">29+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Tempo de Resposta</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="animate-slide-up">
            <div className="relative">
              {/* Card principal */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Atendimento Personalizado
                    </h3>
                    <p className="text-muted-foreground">
                      Nos tornamos parte da sua empresa
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Consultoria especializada</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Planejamento tributário</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Gestão completa</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    Horário comercial: Segunda a sexta
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">CNPJ</div>
                <div className="text-xs opacity-90">Regularizado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
