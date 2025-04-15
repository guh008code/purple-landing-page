
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">O Purple</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Início</Link>
          <Link to="/sobre" className="text-foreground/80 hover:text-primary transition-colors">Sobre</Link>
          <Link to="/contato" className="text-foreground/80 hover:text-primary transition-colors">Contato</Link>
          <Button asChild>
            <Link to="/contato">Fale Conosco</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="text-left text-lg font-bold mb-4">Menu</SheetHeader>
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Início</Link>
              <Link to="/sobre" className="text-foreground/80 hover:text-primary transition-colors">Sobre</Link>
              <Link to="/contato" className="text-foreground/80 hover:text-primary transition-colors">Contato</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
