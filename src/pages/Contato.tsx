
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contato() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h1 className="text-3xl font-bold mb-6">Entre em Contato</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input placeholder="Nome completo" />
                  </div>
                  <div>
                    <Input type="email" placeholder="E-mail" />
                  </div>
                  <div>
                    <Input placeholder="Telefone" />
                  </div>
                  <div>
                    <Textarea placeholder="Mensagem" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">Enviar mensagem</Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-primary/5 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">Informações de Contato</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Telefone</p>
                      <a href="tel:+5511999999999" className="text-muted-foreground">
                        (11) 99999-9999
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <a href="mailto:contato@opurple.com.br" className="text-muted-foreground">
                        contato@opurple.com.br
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-muted-foreground">
                        São Paulo, SP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
