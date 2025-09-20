import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote:
      'Foi o santo remédio. Fui de uns 5 min para mais de 1 hora fácil, e só paro agora quando a gata goza 😈',
    name: 'André F., 27 anos, Paraty/RJ',
    avatar: 'https://picsum.photos/seed/men0/100/100',
    'data-ai-hint': 'man portrait'
  },
  {
    quote:
      'Amoor, como você ficou tão bom tão rápido? Quero muito mais, vamos nos ver amanhã de novo, por favor, preciso transar com você!!',
    name: 'Diogo V. + Júlia A.',
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
      'Minha esposa está mais feliz do que nunca. Nossa vida sexual mudou completamente, parece que voltamos ao início do namoro!',
    name: 'Fernando L.',
    avatar: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxob21lbXxlbnwwfHx8fDE3NTc3MzE2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'man selfie'
  },
  {
    quote:
      'Eu não tinha confiança nenhuma, mas depois de aplicar as técnicas, me sinto outro homem. É incrível o poder que a gente tem e não sabe.',
    name: 'Lucas T.',
    avatar: 'https://images.unsplash.com/photo-1654514457969-8bbb5cdf9468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxnYXJvdG98ZW58MHx8fHwxNzU3NzMxNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'data-ai-hint': 'confident couple'
  },
];


export function SocialProof() {
  return (
    <section id="social-proof" className="py-12">
      <div className="text-center">
        <h2 className="mb-4 font-headline text-3xl font-bold md:text-4xl">
          O Que Eles Estão Dizendo
        </h2>
        <p className="mb-10 text-lg text-muted-foreground">
          São centenas de relatos dos homens e das suas parceiras
        </p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="mx-auto w-full max-w-4xl"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="h-full bg-secondary/30">
                  <CardContent className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                    <Avatar className="h-20 w-20">
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
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
}
