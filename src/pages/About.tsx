
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Target, Heart, Lightbulb, Users, Building2 } from 'lucide-react';

const About = () => {
  // SEO dinâmico
  useEffect(() => {
    document.title = "Sobre a Gnutzmann Contabilidade - História e Valores | Pelotas RS";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Conheça a história da Gnutzmann Contabilidade, fundada em 1995 em Pelotas. Nossos valores, missão e compromisso com a excelência em serviços contábeis.'
      );
    }
  }, []);

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Foco no Cliente",
      description: "Cada empresa é única e desenvolvemos soluções pensando nas necessidades específicas de cada cliente."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Qualidade Superior",
      description: "Comprometimento com a excelência em cada processo e atendimento personalizado."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Inovação",
      description: "Sempre em busca das mais novas tecnologias e tendências do mercado contábil."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Proximidade",
      description: "Criamos vínculos de confiança, nos tornando parte da estratégia da sua empresa."
    }
  ];

  const timeline = [
    { year: "1995", event: "Fundação da Gnutzmann Contabilidade em Pelotas" },
    { year: "2000", event: "Expansão dos serviços de consultoria empresarial" },
    { year: "2010", event: "Implementação de sistemas digitais avançados" },
    { year: "2020", event: "Adaptação completa ao ambiente digital" },
    { year: "2024", event: "29 anos de tradição e confiança no mercado" }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Nossa História
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              29 anos dedicados a criar vínculos de confiança e auxiliar empresas 
              nas melhores tomadas de decisão em Pelotas e região.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Fundada em 1995
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                A Gnutzmann Contabilidade e Consultoria foi fundada em 1995 com a visão 
                de oferecer serviços contábeis diferenciados em Pelotas. Desde o início, 
                nossa filosofia sempre foi a <strong className="text-foreground">proximidade com os clientes</strong>.
              </p>
              <p className="text-muted-foreground mb-6">
                Com profissionais que acompanham a trajetória do escritório ao longo dos anos, 
                construímos nossa reputação baseada na confiança, competência técnica e 
                atendimento personalizado.
              </p>
              <p className="text-muted-foreground mb-8">
                Hoje, nossa maior característica continua sendo a aproximação com os clientes, 
                criando um vínculo de confiança e nos tornando verdadeiros parceiros nas 
                tomadas de decisões estratégicas.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground text-sm">Empresas Atendidas</div>
                </div>
                <div>
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-4xl font-bold text-primary mb-2">29</div>
                  <div className="text-muted-foreground text-sm">Anos de Mercado</div>
                </div>
                <div>
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground text-sm">Satisfação</div>
                </div>
                <div>
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-4xl font-bold text-primary mb-2">24h</div>
                  <div className="text-muted-foreground text-sm">Tempo Resposta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha do Tempo */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa Trajetória
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Acompanhe os principais marcos da nossa história
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm mr-6 flex-shrink-0">
                    {item.year}
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6 flex-1">
                    <p className="text-foreground font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e relacionamento com clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oferecer serviços contábeis e de consultoria de excelência, 
                  criando vínculos de confiança e auxiliando nossos clientes 
                  nas melhores tomadas de decisão.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser reconhecida como referência em contabilidade e consultoria 
                  empresarial na região, mantendo sempre a proximidade e 
                  personalização no atendimento.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Compromisso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transparência, ética profissional, inovação constante e 
                  comprometimento total com o sucesso e crescimento 
                  das empresas que atendemos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Faça parte da nossa história de sucesso. Entre em contato e descubra 
            como podemos auxiliar sua empresa.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            <a 
              href="https://wa.me/5353984024960?text=Olá! Conheci a história da Gnutzmann e gostaria de conversar sobre os serviços."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Entrar em contato via WhatsApp"
            >
              Entre em Contato
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
