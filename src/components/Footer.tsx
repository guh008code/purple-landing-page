
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">O Purple</h3>
            <p className="text-primary-foreground/80">
              Soluções inovadoras em software de gestão para impulsionar seu negócio.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Início</Link>
              <Link to="/sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sobre</Link>
              <Link to="/contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contato</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+5511999999999" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
                <Phone className="h-4 w-4" />
                (11) 99999-9999
              </a>
              <a href="mailto:contato@opurple.com.br" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
                <Mail className="h-4 w-4" />
                contato@opurple.com.br
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                São Paulo, SP
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
