
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Foco no Cliente",
      description: "Cada projeto é único e desenvolvido pensando nas necessidades específicas de cada cliente."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Qualidade Superior",
      description: "Comprometimento com a excelência em cada linha de código e pixel do design."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Inovação",
      description: "Sempre em busca das mais novas tecnologias e tendências do mercado digital."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Paixão",
      description: "Fazemos o que amamos e amamos o que fazemos, sempre com dedicação total."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Sobre a GnutzmannWeb
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Somos uma empresa especializada em desenvolvimento web, dedicada a criar 
              soluções digitais inovadoras que impulsionam o sucesso dos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Fundada com a visão de democratizar o acesso a soluções web de qualidade, 
                a GnutzmannWeb nasceu da paixão por tecnologia e do desejo de ajudar 
                empresas de todos os tamanhos a prosperarem no ambiente digital.
              </p>
              <p className="text-muted-foreground mb-6">
                Ao longo dos anos, desenvolvemos dezenas de projetos, desde sites 
                institucionais até aplicações web complexas, sempre mantendo nosso 
                compromisso com a excelência e inovação.
              </p>
              <p className="text-muted-foreground mb-8">
                Nossa equipe é formada por profissionais experientes e apaixonados 
                por criar experiências digitais que fazem a diferença.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Projetos Entregues</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Clientes Satisfeitos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-muted/50">
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
                  <div className="mx-auto mb-4">{value.icon}</div>
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Criar soluções web inovadoras que transformem ideias em 
                  realidade digital, proporcionando crescimento e sucesso 
                  aos nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser reconhecida como referência em desenvolvimento web, 
                  oferecendo soluções de alta qualidade que superem as 
                  expectativas dos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transparência, compromisso, inovação e excelência são os 
                  pilares que sustentam nosso trabalho e relacionamento 
                  com parceiros.
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
            Estamos prontos para transformar sua visão em uma solução digital incrível.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contato">Entre em Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
