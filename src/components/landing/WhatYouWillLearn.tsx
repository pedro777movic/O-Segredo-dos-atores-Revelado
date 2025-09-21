import Image from 'next/image';

const learningPoints = [
  {
    title: 'Técnica 1: Sedução Magnética',
    description:
      'Descubra que a performance não começa na cama, mas na energia que você projeta. Aprenda a usar o olhar, o toque e a condução para criar uma tensão irresistível, preparando o terreno para uma experiência explosiva, exatamente como os profissionais da indústria adulta fazem.',
    image: {
      src: 'https://i.imgur.com/wMmC5hx.jpeg',
      alt: 'Capa do Ebook com fundo preto e dourado',
      'data-ai-hint': 'ebook cover',
    },
  },
  {
    title: 'Técnica 2: Posições de Controle',
    description:
      'Transforme cada relação em uma experiência inesquecível. Conheça posições estratégicas e jogos que aumentam prazer, prolongam o desempenho e deixam sua parceira completamente satisfeita. Técnicas testadas nos bastidores da indústria adulta, adaptadas para você aplicar de forma prática e imediata.',
    image: {
      src: 'https://i.imgur.com/bT7XP0L.jpeg',
      alt: 'Homem em controle',
      'data-ai-hint': 'man control',
    },
  },
  {
    title: 'Método 3: Performance e Potência Máxima',
    description:
      'Descubra os segredos que os atores pornôs usam para manter ereções firmes, durar mais tempo e ter controle total da performance. Aprenda técnicas comprovadas para transformar insegurança em confiança absoluta, aumentar resistência e dominar cada momento na cama. Resultados que você sente desde a primeira aplicação.',
    image: {
      src: 'https://i.imgur.com/PcQnoFn.jpeg',
      alt: 'Homem potente',
      'data-ai-hint': 'powerful man',
    },
  },
];

export function WhatYouWillLearn() {
  return (
    <section id="what-you-will-learn" className="py-8">
      <h2 className="mb-10 text-center font-headline text-3xl font-bold md:text-4xl">
        O Que Você Vai Aprender no APP-BOOK
      </h2>
      <div className="space-y-10">
        {learningPoints.map((point, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-8 md:flex-row"
          >
            <div className="relative h-64 w-48 flex-shrink-0">
              <Image
                src={point.image.src}
                alt={point.image.alt}
                width={600}
                height={800}
                className="h-full w-full rounded-lg object-cover shadow-lg"
                data-ai-hint={point.image['data-ai-hint']}
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-headline text-2xl font-bold text-primary">
                {point.title}
              </h3>
              <p className="mt-2 text-lg text-muted-foreground">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
