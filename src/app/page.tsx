import { Header } from '@/components/landing/Header';
import { ImageCarousel } from '@/components/landing/ImageCarousel';
import { Button } from '@/components/ui/button';
import { DynamicScarcity } from '@/components/landing/DynamicScarcity';
import { Benefits } from '@/components/landing/Benefits';
import { ProductMockup } from '@/components/landing/ProductMockup';
import { PersuasionSection } from '@/components/landing/PersuasionSection';
import { Guarantee } from '@/components/landing/Guarantee';
import { SocialProof } from '@/components/landing/SocialProof';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Header />
        <div className="container mx-auto max-w-5xl px-4">
          <ImageCarousel />
          <section
            id="cta1"
            className="flex flex-col items-center gap-2 py-12 text-center"
          >
            <Button
              size="lg"
              className="w-full max-w-md animate-pulse rounded-full text-lg font-bold shadow-lg shadow-primary/30"
              asChild
            >
              <a href="#final-cta">Descobrir o Ebook Agora</a>
            </Button>
            <DynamicScarcity productName="O Segredo Nº1" />
          </section>
          <Separator className="my-8" />
          <Benefits />
          <Separator className="my-12" />
          <ProductMockup />
          <Separator className="my-12" />
          <PersuasionSection />
          <Separator className="my-12" />
          <Guarantee />
          <section
            id="cta2"
            className="flex flex-col items-center gap-2 py-12 text-center"
          >
            <Button
              size="lg"
              className="w-full max-w-md rounded-full text-lg font-bold shadow-lg shadow-primary/30"
              asChild
            >
              <a href="#final-cta">Descobrir Ebook</a>
            </Button>
            <p className="text-sm font-semibold text-primary">
              Não ficará disponível por muito tempo
            </p>
          </section>
          <Separator className="my-8" />
          <SocialProof />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
