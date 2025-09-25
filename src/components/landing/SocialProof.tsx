'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote:
      "Não falho mais. Fui de uns 5 minutos pra mais de 1 hora e só paro porque ela pede. Me sinto um ator pornô agora, rs. Valeu!",
    name: 'André F., 25 anos, Paraty/RJ',
    avatar: 'https://images.unsplash.com/photo-1654514489490-bfa99f660e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxnYXJvdG98ZW58MHx8fHwxNzU4MzM4MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'man portrait'
  },
  {
    quote:
      "Amor, o que você tá fazendo pra conseguir fazer eu chegar lá tão rápido? Sério, tá me deixando louca! Já quero de novo",
    name: 'Andressa e Diogo, ambos 22 anos, São Paulo/SP',
    avatar: 'https://i.imgur.com/Yt2Thye.jpeg',
    'data-ai-hint': 'happy couple'
  },
  {
    quote:
      "Agora sempre que vou trans*r parece que estou em um filme pornô. A potência é outra. Elas ficam loucas, tem garota implorando pra dormir comigo de novo.",
    name: 'Paulo, 27 anos, Joinville/SC',
    avatar: 'https://i.imgur.com/8RODqEe.jpeg',
    'data-ai-hint': 'man smiling'
  },
  {
    quote:
      "Quem mais gostou foi minha noiva, nosso sexo ficou maravilhoso. Antes ela até fazia umas piadinhas por causa da minha performance, mas já parou, agora eu que vou até ela não aguentar mais.",
    name: 'Fernando, 33 anos, Cuiabá/MT',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    'data-ai-hint': 'man selfie'
  },
  {
    quote:
      "Eu tava sem confiança porque quase sempre decepcionava as mulheres que eu ficava. Mas é nítida a diferença agora do que eu consigo fazer na cama, não tenho mais limites. Obrigado aí, salvou mesmo!",
    name: 'Samuel, 30 anos, Petrolina/PE',
    avatar: 'https://images.unsplash.com/photo-1700955532354-5e490b711789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxnYXJvdG98ZW58MHx8fHwxNzU4MzMियांMjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'confident couple'
  },
];


export function SocialProof() {
  return (
    <section id="social-proof" className="py-8">
      <div className="text-center">
        <h2 className="mb-4 font-headline text-3xl font-bold md:text-4xl">
          Centenas de homens já transformaram sua vida íntima
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Veja o que eles estão dizendo após descobrir o segredo.
        </p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
        className="mx-auto w-full max-w-6xl"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="h-full rounded-xl border-2 border-transparent bg-secondary/30 transition-all hover:border-primary">
                  <CardContent className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                    <Avatar className="h-20 w-20 border-2 border-primary/50">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={`Depoimento de ${testimonial.name}`}
                        data-ai-hint={testimonial['data-ai-hint']}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          ?.split(' ')
                          .map(n => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <blockquote className="flex-grow text-lg font-medium text-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <p className="font-bold text-primary">
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-1rem] md:left-4" />
        <CarouselNext className="right-[-1rem] md:right-4" />
      </Carousel>
    </section>
  );
}
