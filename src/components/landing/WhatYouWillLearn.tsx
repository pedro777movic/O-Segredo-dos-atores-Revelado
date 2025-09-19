import Image from 'next/image';

const learningPoints = [
  {
    title: 'Controle da Sedução',
    description:
      'Neste módulo, você vai descobrir que sedução não é um truque barato, mas sim uma energia real que desperta desejo e cria conexão profunda. Os atores da indústria adulta sabem: a performance não começa na cama, mas muito antes. A forma como você olha, fala, toca e conduz a situação já prepara o terreno para uma experiência explosiva.',
    image: {
      src: 'https://i.imgur.com/wMmC5hx.jpeg',
      alt: 'Capa do Ebook com fundo preto e dourado',
      'data-ai-hint': 'ebook cover',
    },
  },
  {
    title: 'Movimentação',
    description:
      'Mantenha a excitação intensa, evite a monotonia, estimula diferentes zonas erógenas e aumente o prazer de ambos. Além disso, mostre domínio, criatividade e resistência, transmitindo mais poder e confiança na performance.',
    image: {
      src: 'https://i.imgur.com/bT7XP0L.jpeg',
      alt: 'Homem em controle',
      'data-ai-hint': 'man control',
    },
  },
  {
    title: 'Potência Máxima',
    description:
      'Descubra os segredos para ereções mais fortes e duradouras, sem depender de medicamentos. Métodos naturais que otimizam a circulação e a saúde sexual.',
    image: {
      src: 'https://i.imgur.com/CJhfPsK.jpeg',
      alt: 'Homem potente',
      'data-ai-hint': 'powerful man',
    },
  },
];

export function WhatYouWillLearn() {
  return (
    <section id="what-you-will-learn" className="py-12">
      <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
        O Que Você Vai Aprender
      </h2>
      <div className="space-y-12">
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
