import Image from 'next/image';

const mockups = [
  {
    src: 'https://i.imgur.com/WOZTYoc.png',
    alt: 'Capa do Ebook',
    'data-ai-hint': 'ebook cover',
  },
  {
    src: 'https://i.imgur.com/mSeXwTb.png',
    alt: 'Página interna do Ebook',
    'data-ai-hint': 'ebook page',
  },
  {
    src: 'https://i.imgur.com/XZau72M.png',
    alt: 'Ebook em um tablet',
    'data-ai-hint': 'ebook tablet',
  },
];

export function ProductMockup() {
  return (
    <section id="product" className="py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {mockups.map((mockup, index) => (
          <div
            key={index}
            className="group relative h-96 w-full transform overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={mockup.src}
              alt={mockup.alt}
              width={600}
              height={800}
              className="h-full w-full object-cover"
              data-ai-hint={mockup['data-ai-hint']}
            />
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-lg font-semibold text-muted-foreground">
        Versão digital. Acesso imediato após a compra.
      </p>
    </section>
  );
}
