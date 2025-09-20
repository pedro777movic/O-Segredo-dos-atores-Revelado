import Image from 'next/image';

const mockups = [
  {
    src: 'https://i.imgur.com/4FVC9e0.jpeg',
    alt: 'Capa do Ebook',
    'data-ai-hint': 'ebook cover',
  },
  {
    src: 'https://i.imgur.com/CYP4ykz.jpeg',
    alt: 'Ebook em um tablet',
    'data-ai-hint': 'ebook tablet',
  },
];

export function ProductMockup() {
  return (
    <section id="product" className="py-12">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {mockups.map((mockup, index) => (
          <div
            key={index}
            className="group relative aspect-[3/4] w-full transform overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={mockup.src}
              alt={mockup.alt}
              fill
              className="object-contain"
              data-ai-hint={mockup['data-ai-hint']}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-lg font-semibold text-muted-foreground">
        Versão digital que cabe no bolso
      </p>
    </section>
  );
}
