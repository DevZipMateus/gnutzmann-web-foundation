
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Criamos Experiências
            <span className="text-primary block">Digitais Incríveis</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desenvolvemos sites modernos, aplicações web e soluções digitais que 
            conectam sua marca ao seu público de forma eficiente e impactante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contato">
                Comece Seu Projeto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/servicos">Ver Nossos Serviços</Link>
            </Button>
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Desenvolvimento</h3>
            <p className="text-muted-foreground">
              Código limpo, moderno e otimizado usando as melhores tecnologias do mercado.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Design</h3>
            <p className="text-muted-foreground">
              Interfaces intuitivas e atraentes que proporcionam a melhor experiência do usuário.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Performance</h3>
            <p className="text-muted-foreground">
              Sites rápidos e otimizados para oferecer a melhor performance em todos os dispositivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
