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
import { DynamicScarcity } from '@/components/landing/DynamicScarcity';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Header />
        <div className="container mx-auto max-w-5xl px-4">
          <ImageCarousel />
          <p className="my-8 text-justify text-xl text-foreground md:text-2xl">
            São diversos segredos revelados num pequeno livro digital. Técnicas
            que a indústria adulta não quer que saibam, e que são utilizados
            pelos melhores atores para aumentar naturalmente{' '}
            <span className="font-bold text-primary">
              potência, resistência, retardação ejaculatória
            </span>
            , obtendo{' '}
            <span className="font-bold text-primary">controle total</span>.
            Perca a vergonha e o medo, e comece a desfrutar uma verdadeira
            relação sexual!
          </p>
          <section
            id="cta1"
            className="flex flex-col items-center gap-2 py-12 text-center"
          >
            <Button
              size="lg"
              className="w-full max-w-md animate-pulse rounded-full text-lg font-bold shadow-lg shadow-primary/30"
              asChild
            >
              <a href="#pricing">Descobrir o Segredo Agora!</a>
            </Button>
            <DynamicScarcity productName="O Segredo Nº1 dos Atores Pornô" />
          </section>
          <Separator className="my-8" />
          <Benefits />
          <Separator className="my-12" />
          <ProductMockup />
          <Separator className="my-12" />
          <WhatYouWillLearn />
          <Separator className="my-12" />
          <PersuasionSection />
          <Separator className="my-12" />
          <Guarantee />
          <Separator className="my-12" />
          <Pricing />
          <section
            id="cta2"
            className="flex flex-col items-center gap-2 py-12 text-center"
          >
            <Button
              size="lg"
              className="w-full max-w-md rounded-full text-lg font-bold shadow-lg shadow-primary/30"
              asChild
            >
              <a href="https://pay.cakto.com.br/ajsxsz2_562111">Descobrir Segredo!</a>
            </Button>
             <DynamicScarcity productName="O Segredo Nº1 dos Atores Pornô" />
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
