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
    text: '',
    'data-ai-hint': 'confident man',
    width: 1080,
    height: 1350,
  },
  {
    src: 'https://i.imgur.com/NfukaYy.jpeg',
    alt: 'Sombra de um homem musculoso',
    text: '',
    'data-ai-hint': 'strong man',
    width: 1080,
    height: 1350,
  },
  {
    src: 'https://i.imgur.com/B6vWVoa.jpeg',
    alt: 'Casal em momento íntimo',
    text: '',
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
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  className="h-auto w-full object-cover"
                  data-ai-hint={slide['data-ai-hint']}
                />
                {slide.text && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <h2 className="font-headline text-3xl font-bold text-white md:text-5xl">
                      {slide.text}
                    </h2>
                  </div>
                )}
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
