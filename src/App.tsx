
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";

const queryClient = new QueryClient();

const App = () => {
  const [isMobileApp, setIsMobileApp] = useState(false);

  useEffect(() => {
    // Check if running as a Capacitor app
    const checkPlatform = async () => {
      try {
        const { Capacitor } = await import('@capacitor/core');
        setIsMobileApp(Capacitor.isNativePlatform());
      } catch (error) {
        console.error('Capacitor not available:', error);
        setIsMobileApp(false);
      }
    };

    checkPlatform();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            {isMobileApp ? <MobileFooter /> : <Footer />}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
