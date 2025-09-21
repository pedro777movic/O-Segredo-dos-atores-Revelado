import { Header } from '@/components/landing/Header';
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
import { QuickBenefits } from '@/components/landing/QuickBenefits';
import { DynamicScarcity } from '@/components/landing/DynamicScarcity';
import { AppBookExplanation } from '@/components/landing/AppBookExplanation';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <Header />
        <div className="container mx-auto -mt-12 max-w-5xl px-4 md:-mt-20">
          <ProductMockup />
        </div>
        <div className="container mx-auto max-w-5xl px-4">
          <section
            id="cta-hero"
            className="flex flex-col items-center gap-2 py-8 text-center"
          >
            <Button
              size="lg"
              className="w-full max-w-md animate-pulse rounded-full text-lg font-bold shadow-lg shadow-primary/30"
              asChild
            >
              <a href="#pricing">Quero meu acesso agora</a>
            </Button>
            <DynamicScarcity productName="O Segredo Nº1" />
          </section>

          <QuickBenefits />
          <Separator className="my-8" />
          <AppBookExplanation />
          <Separator className="my-8" />
          <Benefits />
          <section
            id="cta-benefits"
            className="flex flex-col items-center gap-2 py-8 text-center"
          >
            <Button
              size="lg"
              className="w-full max-w-md rounded-full text-lg font-bold shadow-lg shadow-primary/30"
              asChild
            >
              <a href="#pricing">Descobrir agora o segredo</a>
            </Button>
          </section>
          <Separator className="my-8" />
          <PersuasionSection />
          <Separator className="my-8" />
          <SocialProof />
          <section
            id="cta-social"
            className="flex flex-col items-center gap-2 py-8 text-center"
          >
            <Button
              size="lg"
              className="w-full max-w-md rounded-full text-lg font-bold shadow-lg shadow-primary/30"
              asChild
            >
              <a href="#pricing">Quero meu acesso agora</a>
            </Button>
          </section>
          <Separator className="my-8" />
          <WhatYouWillLearn />
          <Separator className="my-8" />
          <Pricing />
          <Separator className="my-8" />
          <Guarantee />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
