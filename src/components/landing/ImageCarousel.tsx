'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const slides = [
  {
    src: 'https://i.imgur.com/wMmC5hx.jpeg',
    alt: 'Homem confiante',
    text: 'Controle Absoluto',
    'data-ai-hint': 'confident man',
  },
  {
    src: 'https://i.imgur.com/HoULabq.jpeg',
    alt: 'Sombra de um homem musculoso',
    text: 'Experiência inesquecível para sua parceira',
    'data-ai-hint': 'strong man',
  },
  {
    src: 'https://i.imgur.com/B6vWVoa.jpeg',
    alt: 'Casal em momento íntimo',
    text: 'Resistência Sexual',
    'data-ai-hint': 'intimate couple',
  },
];

export function ImageCarousel() {
  return (
    <section className="py-12">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-2xl md:h-96">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  data-ai-hint={slide['data-ai-hint']}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <h2 className="font-headline text-3xl font-bold text-white md:text-5xl">
                    {slide.text}
                  </h2>
                </div>
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
