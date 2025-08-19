
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Code, 
  Palette, 
  Search,
  Zap,
  Shield
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Sites Institucionais",
      description: "Sites profissionais que representam sua marca com elegância e funcionalidade.",
      features: [
        "Design responsivo",
        "SEO otimizado", 
        "Painel administrativo",
        "Integração com redes sociais"
      ],
      price: "A partir de R$ 2.500"
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary" />,
      title: "E-commerce",
      description: "Lojas virtuais completas para vender seus produtos online com segurança.",
      features: [
        "Catálogo de produtos",
        "Carrinho de compras",
        "Gateway de pagamento",
        "Gestão de pedidos"
      ],
      price: "A partir de R$ 5.000"
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Aplicações Web",
      description: "Sistemas personalizados para otimizar processos do seu negócio.",
      features: [
        "Interface personalizada",
        "Banco de dados seguro",
        "Relatórios detalhados",
        "Múltiplos usuários"
      ],
      price: "Sob consulta"
    }
  ];

  const additionalServices = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Desenvolvimento Custom",
      description: "Soluções sob medida para necessidades específicas."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "Design de interfaces intuitivas e atrativas."
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO & Marketing Digital",
      description: "Otimização para mecanismos de busca e estratégias digitais."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Otimização de Performance",
      description: "Melhoria de velocidade e performance de sites existentes."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Suporte & Manutenção",
      description: "Suporte técnico contínuo e atualizações regulares."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Oferecemos soluções completas em desenvolvimento web para impulsionar 
              seu negócio no ambiente digital.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serviços Principais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para sua presença digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow relative">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Inclui:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <Badge variant="secondary" className="mb-4">
                      {service.price}
                    </Badge>
                    <Button asChild className="w-full">
                      <Link to="/contato">Solicitar Orçamento</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Adicionais */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serviços Complementares
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções adicionais para potencializar seus resultados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Um processo estruturado para garantir o sucesso do seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Análise", desc: "Entendemos suas necessidades e objetivos" },
              { step: "02", title: "Planejamento", desc: "Criamos uma estratégia personalizada" },
              { step: "03", title: "Desenvolvimento", desc: "Desenvolvemos sua solução com qualidade" },
              { step: "04", title: "Entrega", desc: "Lançamos e oferecemos suporte contínuo" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
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
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a crescer no ambiente digital.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contato">Solicitar Orçamento Gratuito</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
