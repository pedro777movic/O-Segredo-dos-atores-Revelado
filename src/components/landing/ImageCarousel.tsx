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
    src: 'https://i.imgur.com/Nayc6wW.jpeg',
    alt: 'Homem confiante',
    'data-ai-hint': 'confident man',
    width: 1080,
    height: 1350,
  },
  {
    src: 'https://i.imgur.com/NfukaYy.jpeg',
    alt: 'Sombra de um homem musculoso',
    'data-ai-hint': 'strong man',
    width: 1080,
    height: 1350,
  },
  {
    src: 'https://i.imgur.com/JSdHY67.jpeg',
    alt: 'Casal em momento íntimo',
    'data-ai-hint': 'intimate couple',
    width: 1080,
    height: 1350,
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
        <CarouselContent className="-ml-4 h-[650px]">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-4">
              <div className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain"
                  data-ai-hint={slide['data-ai-hint']}
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
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
