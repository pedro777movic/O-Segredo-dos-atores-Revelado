import { Header } from '@/components/landing/Header';
import { ImageCarousel } from '@/components/landing/ImageCarousel';
import { Button } from '@/components/ui/button';
import { Benefits } from '@/components/landing/Benefits';
import { ProductMockup } from '@/components/landing/ProductMockup';
import { PersuasionSection } from '@/components/landing/PersuasionSection';
import { Guarantee } from '@/components/landing/Guarantee';
import { SocialProof } from '@/components/landing/SocialProof';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Separator } from '@/components/ui/separator';
import { Pricing } from '@/components/landing/Pricing';
import { Footer } from '@/components/landing/Footer';
import { WhatYouWillLearn } from '@/components/landing/WhatYouWillLearn';
import { VSL } from '@/components/landing/VSL';
import { SeductionLevels } from '@/components/landing/SeductionLevels';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Header />
        <div className="container mx-auto max-w-5xl px-4">
          <VSL />
          <ImageCarousel />
          <div className="my-2 text-center">
            <p className="text-xl text-foreground md:text-2xl">
              Descubra os segredos da indústria adulta para uma alta performance
              sexual. Aprenda as técnicas dos melhores atores pornôs para
              melhorar naturalmente sua{' '}
              <span className="font-bold text-primary">
                resistência, controle e prazer
              </span>
              .
            </p>
          </div>
          <section
            id="cta1"
            className="flex flex-col items-center gap-2 py-2 text-center"
          >
            <Button
              size="lg"
              className="w-full max-w-md animate-pulse rounded-full text-lg font-bold shadow-lg shadow-primary/30"
              asChild
            >
              <a href="#pricing">Descobrir o Segredo!</a>
            </Button>
          </section>
          <Separator className="my-2" />
          <SeductionLevels />
          <Separator className="my-2" />
          <Benefits />
          <Separator className="my-2" />
          <ProductMockup />
          <Separator className="my-2" />
          <WhatYouWillLearn />
          <Separator className="my-2" />
          <PersuasionSection />
          <Separator className="my-2" />
          <Guarantee />
          <Separator className="my-2" />
          <Pricing />
          <section
            id="cta2"
            className="flex flex-col items-center gap-2 py-2 text-center"
          >
            <Button
              size="lg"
              className="w-full max-w-md rounded-full text-lg font-bold shadow-lg shadow-primary/30"
              asChild
            >
              <a href="https://pay.cakto.com.br/ajsxsz2_562111">Descobrir Segredo!</a>
            </Button>
            <p className="mt-2 text-sm font-semibold text-primary">
              Não ficará disponível por muito tempo!
            </p>
          </section>
          <Separator className="my-2" />
          <SocialProof />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
