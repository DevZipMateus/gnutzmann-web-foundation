
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import MapSection from '@/components/MapSection';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calculator, 
  FileText, 
  Users, 
  Building, 
  TrendingUp, 
  CheckCircle, 
  Award,
  Shield,
  Clock
} from 'lucide-react';

const Index = () => {
  // SEO dinâmico
  useEffect(() => {
    document.title = "Gnutzmann Contabilidade e Consultoria - Serviços Contábeis em Pelotas";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Gnutzmann Contabilidade oferece serviços contábeis, fiscais, departamento pessoal e consultoria empresarial em Pelotas desde 1995. Entre em contato!'
      );
    }
  }, []);

  const services = [
    {
      icon: <Calculator className="h-12 w-12 text-primary" />,
      title: "Contabilidade",
      description: "Serviços contábeis completos para todos os portes de empresa com demonstrativos que auxiliam sua gestão.",
      features: [
        "Balanços e demonstrativos",
        "Controle patrimonial",
        "Análises gerenciais",
        "Relatórios personalizados"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Fiscal",
      description: "Assessoria e planejamento tributário em conjunto com o cumprimento de suas obrigações fiscais.",
      features: [
        "Planejamento tributário",
        "Obrigações acessórias",
        "Elisão fiscal",
        "Consultoria tributária"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Departamento Pessoal",
      description: "Todas as rotinas trabalhistas legais e controle total através de softwares que auxiliam na gestão de pessoal.",
      features: [
        "Folha de pagamento",
        "Admissões e demissões",
        "Controle de ponto",
        "Gestão de benefícios"
      ]
    },
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "Abertura de Empresas",
      description: "Consultoria completa antes do registro, auxiliando na melhor opção tributária e estrutura societária.",
      features: [
        "Análise de viabilidade",
        "Escolha do regime tributário",
        "Registro na Junta Comercial",
        "Licenças e alvarás"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Consultoria Empresarial",
      description: "Planejamento de custos e análise financeira com planos de acordo com o porte de sua empresa.",
      features: [
        "Análise de custos",
        "Planejamento estratégico",
        "Consultoria financeira",
        "Gestão de fluxo de caixa"
      ]
    }
  ];

  const differentials = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "29 Anos de Experiência",
      description: "Fundada em 1995, acompanhamos a evolução do mercado e da legislação."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Relacionamento Próximo",
      description: "Nos tornamos parte da sua empresa, auxiliando nas tomadas de decisões."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Segurança e Confiança",
      description: "Profissionais qualificados com processos seguros e confiáveis."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Atendimento Ágil",
      description: "Resposta rápida e eficiente para todas as suas demandas."
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tradição e Confiança desde 1995
              </h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                A <strong className="text-foreground">Gnutzmann Contabilidade</strong> foi fundada em 1995 
                com profissionais que acompanham a trajetória do escritório ao longo dos anos. 
                Nossa maior característica é a <strong className="text-foreground">aproximação com os clientes</strong>, 
                criando um vínculo de confiança e nos tornando parte de suas empresas.
              </p>
              <p className="text-muted-foreground mb-8">
                Auxiliamos nas tomadas de decisões estratégicas, oferecendo consultoria 
                especializada e serviços contábeis completos para empresas de todos os portes.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">29+</div>
                  <div className="text-muted-foreground">Anos no Mercado</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Empresas Atendidas</div>
                </div>
              </div>

              <Button asChild className="btn-primary">
                <a 
                  href="https://wa.me/5353984024960?text=Olá! Gostaria de conhecer mais sobre a história da Gnutzmann Contabilidade."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar conosco sobre nossa história"
                >
                  Conheça Nossa História
                </a>
              </Button>
            </div>
            
            <div className="animate-slide-up">
              <div className="grid grid-cols-2 gap-6">
                {differentials.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 text-sm">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções completas em contabilidade, fiscal, departamento pessoal 
              e consultoria empresarial para sua empresa prosperar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6 btn-outline">
                    <a 
                      href={`https://wa.me/5353984024960?text=Olá! Gostaria de saber mais sobre o serviço de ${service.title.toLowerCase()}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Solicitar orçamento para ${service.title}`}
                    >
                      Solicitar Orçamento
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Serviços adicionais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {services.slice(3).map((service, index) => (
              <Card key={index + 3} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="btn-outline">
                    <a 
                      href={`https://wa.me/5353984024960?text=Olá! Gostaria de saber mais sobre o serviço de ${service.title.toLowerCase()}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Solicitar orçamento para ${service.title}`}
                    >
                      Solicitar Orçamento
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos 
            auxiliar sua empresa a crescer com segurança e eficiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <a 
                href="https://wa.me/5353984024960?text=Olá! Gostaria de agendar uma reunião para conhecer os serviços da Gnutzmann Contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar reunião via WhatsApp"
              >
                Agendar Reunião
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/60 hover:bg-accent hover:text-accent-foreground hover:border-accent">
              <a 
                href="tel:53984024960"
                aria-label="Ligar para a empresa"
              >
                Ligar Agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      <MapSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
