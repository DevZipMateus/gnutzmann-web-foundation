
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Globe, Smartphone } from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Sites Institucionais",
      description: "Sites profissionais que representam sua marca de forma impecável."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Aplicações Web",
      description: "Sistemas e aplicações web personalizadas para seu negócio."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "E-commerce",
      description: "Lojas virtuais completas para vender seus produtos online."
    }
  ];

  const benefits = [
    "Design responsivo para todos os dispositivos",
    "SEO otimizado para melhor posicionamento",
    "Carregamento rápido e performance superior",
    "Suporte técnico contínuo"
  ];

  return (
    <div>
      <Hero />
      
      {/* Sobre Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transformamos Ideias em Realidade Digital
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Com anos de experiência em desenvolvimento web, nossa equipe especializada 
                cria soluções digitais que impulsionam o crescimento do seu negócio.
              </p>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/sobre">Conheça Nossa História</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8 lg:p-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Projetos Entregues</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <div className="text-muted-foreground">Sites Criados</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-muted-foreground">Clientes Satisfeitos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para sua presença digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Começar Seu Projeto?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos 
            transformar sua presença digital.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contato">Solicitar Orçamento</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
