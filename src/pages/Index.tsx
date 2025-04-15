
import { ArrowRight, BarChart, Cloud, Database, Smartphone, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient mt-16 text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforme sua gestão com soluções inteligentes
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Desenvolvemos softwares de gestão personalizados para otimizar seus processos e impulsionar resultados.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contato" className="gap-2">
                Comece agora
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Soluções</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Cloud className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Software</h3>
              <p className="text-muted-foreground">
                Soluções em nuvem para acesso em qualquer lugar e dispositivo.
              </p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Database className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestão de Dados</h3>
              <p className="text-muted-foreground">
                Armazenamento e análise de dados de forma segura e eficiente.
              </p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <BarChart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Análise de Negócios</h3>
              <p className="text-muted-foreground">
                Insights poderosos para tomada de decisões estratégicas.
              </p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Smartphone className="h-8 w-8 text-primary mr-2" />
                <Tablet className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desenvolvimento Mobile</h3>
              <p className="text-muted-foreground">
                Aplicativos nativos para Android e iOS com tecnologia moderna.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
