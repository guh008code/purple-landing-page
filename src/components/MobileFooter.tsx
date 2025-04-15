
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileFooter() {
  return (
    <footer className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">
          <h3 className="text-xl font-bold">O Purple</h3>
          <div className="flex gap-4">
            <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
              Início
            </Link>
            <Link to="/sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
              Sobre
            </Link>
            <Link to="/contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
              Contato
            </Link>
          </div>
          <div className="text-sm">
            <div className="flex justify-center items-center gap-2 text-primary-foreground/80 mb-2">
              <Phone className="h-3 w-3" />
              (11) 99999-9999
            </div>
            <div className="flex justify-center items-center gap-2 text-primary-foreground/80 mb-2">
              <Mail className="h-3 w-3" />
              contato@opurple.com.br
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
