
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/', anchor: '#inicio' },
    { name: 'Sobre', href: '/#sobre', anchor: '#sobre' },
    { name: 'Serviços', href: '/#servicos', anchor: '#servicos' },
    { name: 'Contato', href: '/#contato', anchor: '#contato' },
  ];

  // Detectar scroll para efeito do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, anchor: string) => {
    setIsOpen(false);
    
    if (location.pathname === '/' && anchor) {
      // Se estamos na home, apenas rolar para a âncora
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar com contatos */}
        <div className={`border-b border-border/50 py-2 ${isScrolled ? 'hidden' : 'block'}`}>
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <a 
                href="tel:53984024960" 
                className="flex items-center hover:text-primary transition-colors"
                aria-label="Telefone da empresa"
              >
                <Phone className="h-3 w-3 mr-1" />
                (53) 9 8402-4960
              </a>
              <a 
                href="mailto:contato@gnutzmann.com.br" 
                className="flex items-center hover:text-primary transition-colors"
                aria-label="E-mail da empresa"
              >
                <Mail className="h-3 w-3 mr-1" />
                contato@gnutzmann.com.br
              </a>
            </div>
            <div className="hidden md:block">
              <span className="text-xs">Fundado em 1995 | CNPJ: 39.432.748/0001-07</span>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
            aria-label="Página inicial da Gnutzmann Contabilidade"
          >
            Gnutzmann
            <span className="text-base font-normal text-muted-foreground block -mt-1">
              Contabilidade
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Menu principal">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item.href, item.anchor)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="btn-primary">
              <a 
                href="https://wa.me/5353984024960?text=Olá! Gostaria de agendar uma consulta na Gnutzmann Contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar consulta via WhatsApp"
              >
                Agendar Consulta
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href, item.anchor)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full btn-primary">
                  <a 
                    href="https://wa.me/5353984024960?text=Olá! Gostaria de agendar uma consulta na Gnutzmann Contabilidade."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    aria-label="Agendar consulta via WhatsApp"
                  >
                    Agendar Consulta
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
