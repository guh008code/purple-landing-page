
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-16">
        {/* About Hero */}
        <section className="bg-primary/5 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Sobre a O Purple</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Somos uma empresa especializada em desenvolvimento de softwares de gestão,
              comprometida em transformar a maneira como as empresas gerenciam seus negócios.
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Desenvolver soluções inovadoras que simplifiquem e otimizem a gestão empresarial.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser referência em software de gestão, reconhecida pela excelência e inovação.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Valores</h3>
                <p className="text-muted-foreground">
                  Inovação, qualidade, compromisso com o cliente e excelência técnica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua gestão?</h2>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contato">Entre em contato</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
