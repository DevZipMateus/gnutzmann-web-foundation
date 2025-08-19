
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MapSection = () => {
  const mapUrl = "https://maps.app.goo.gl/9tCqA3nBbueHgHJe7";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.234567890123!2d-52.342864585029456!3d-31.765432109876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQ1JzU1LjYiUyA1MsKwMjAnMzQuMyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr";

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Localização
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos estrategicamente localizados no bairro Areal em Pelotas para melhor atendê-lo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mapa */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-card border border-border">
              <iframe
                src={embedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Gnutzmann Contabilidade - R. Teotônio Viléla, 305 - Areal, Pelotas - RS"
                className="w-full h-96"
              ></iframe>
              
              {/* Overlay com link para o mapa */}
              <div className="absolute bottom-4 left-4 right-4">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center font-medium hover:bg-primary/90 transition-colors shadow-lg"
                  aria-label="Ver no Google Maps"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Informações */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                    <p className="text-muted-foreground mb-2">
                      R. Teotônio Viléla, 305<br />
                      Areal, Pelotas - RS<br />
                      CEP: 96085-290
                    </p>
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                      aria-label="Ver direções no Google Maps"
                    >
                      Ver direções →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                    <a
                      href="tel:53984024960"
                      className="text-muted-foreground hover:text-primary transition-colors mb-2 block"
                      aria-label="Ligar para a empresa"
                    >
                      (53) 9 8402-4960
                    </a>
                    <a
                      href="https://wa.me/5353984024960?text=Olá! Gostaria de mais informações sobre os serviços."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                      aria-label="Enviar mensagem via WhatsApp"
                    >
                      WhatsApp →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                    <a
                      href="mailto:contato@gnutzmann.com.br"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Enviar e-mail para a empresa"
                    >
                      contato@gnutzmann.com.br
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Horário de Funcionamento</h3>
                    <div className="text-muted-foreground space-y-1">
                      <div>Segunda a Sexta: 8h às 18h</div>
                      <div>Sábado: 8h às 12h</div>
                      <div className="text-sm opacity-75">Atendimento sob agendamento</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
