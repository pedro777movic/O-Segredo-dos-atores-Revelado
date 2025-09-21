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
      'Foi o santo remédio. Fui de uns 5 min para mais de 1 hora fácil, e só paro agora quando a gata goza 😈',
    name: 'André F., 25 anos, Paraty/RJ',
    avatar: 'https://images.unsplash.com/photo-1654514489490-bfa99f660e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxnYXJvdG98ZW58MHx8fHwxNzU4MzM4MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'man portrait'
  },
  {
    quote:
      'Amoor, como você ficou tão bom tão rápido? Quero muito mais, vamos nos ver amanhã de novo, por favor, preciso transar com você!!',
    name: 'Andressa e Diogo, ambos 22 anos, São Paulo/SP',
    avatar: 'https://i.imgur.com/Yt2Thye.jpeg',
    'data-ai-hint': 'happy couple'
  },
  {
    quote:
      'Valeu muito a pena! Elas ficam loucas, tem garota implorando pra transar comigo, querem gozar toda hora. Meu corpo e minha mente ficaram em outro nível. Obrigado',
    name: 'Paulo, 27 anos, Joinville/SC',
    avatar: 'https://i.imgur.com/8RODqEe.jpeg',
    'data-ai-hint': 'man smiling'
  },
  {
    quote:
      "Minha noiva agora está feliz. Nossa vida sexual ficou maravilhosa. Ela também parou com as piadinhas sem graça pois agora consigo durar até ela gozar",
    name: 'Fernando, 33 anos, Cuiabá/MT',
    avatar: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxob21lbXxlbnwwfHx8fDE3NTc3MzE2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'man selfie'
  },
  {
    quote:
      'Eu não tinha confiança porque naquelas horas eu sempre decepcionava as mulheres que eu ficava. Obrigado! A sensação é que agora eu sou outro homem, não tenho mais limites na cama!',
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
          Homens Comuns, Resultados de Ator
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
