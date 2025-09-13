import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { generateTestimonialLikeQuotes } from '@/ai/flows/generate-testimonial-like-quotes';

const baseTestimonials = [
  'Foi o santo remédio. Fui de uns 5 min para mais de 1 hora fácil, e só paro agora quando a gata goza 😈',
  'Amoor, como você ficou tão bom tão rápido? Quero muito mais, vamos nos ver amanhã de novo, por favor, preciso transar com você!!',
  'Valeu muito a pena! Elas ficam loucas, tem garota implorando pra transar comigo, querem gozar toda hora. Meu corpo e minha mente ficaram em outro nível. Obrigado',
];

const userNames = ['Carlos M.', 'Ricardo S. + Júlia A.', 'Paulo G.', 'Fernando L.', 'Ana P.'];

const userAvatars = [
  `https://picsum.photos/seed/men0/100/100`,
  'https://i.imgur.com/Yt2Thye.jpeg',
  'https://i.imgur.com/8RODqEe.jpeg',
  `https://picsum.photos/seed/couple1/100/100`,
  `https://picsum.photos/seed/couple2/100/100`,
]

export async function SocialProof() {
  let quotes = baseTestimonials;
  try {
    const result = await generateTestimonialLikeQuotes({
      baseTestimonials,
      numberOfQuotes: 5,
    });
    if (result.quotes && result.quotes.length > 0) {
      quotes = result.quotes;
    }
  } catch (error) {
    console.error('Failed to generate testimonials, using base testimonials.', error);
    // On error, we just use the base testimonials
    quotes = baseTestimonials; 
  }

  const avatars = userAvatars;

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
          {quotes.map((quote, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="h-full bg-secondary/30">
                  <CardContent className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                    <Avatar className="h-20 w-20">
                      <AvatarImage
                        src={avatars[index % avatars.length]}
                        alt={`Depoimento de ${userNames[index % userNames.length]}`}
                        data-ai-hint="man portrait"
                      />
                      <AvatarFallback>
                        {userNames[index % userNames.length]
                          ?.split(' ')
                          .map(n => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <blockquote className="flex-grow text-lg font-medium text-foreground">
                      &ldquo;{quote}&rdquo;
                    </blockquote>
                    <p className="font-bold text-primary">
                      {userNames[index % userNames.length]}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
