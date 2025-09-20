import Image from 'next/image';

const learningPoints = [
  {
    title: 'Sedução',
    description:
      'Neste módulo, você vai descobrir que sedução não é um truque barato, mas sim uma energia real que desperta desejo e cria conexão profunda. Os atores da indústria adulta sabem: a performance não começa na cama, mas muito antes. A forma como você olha, fala, toca e conduz a situação já prepara o terreno para uma experiência explosiva.',
    image: {
      src: 'https://i.imgur.com/wMmC5hx.jpeg',
      alt: 'Capa do Ebook com fundo preto e dourado',
      'data-ai-hint': 'ebook cover',
    },
  },
  {
    title: 'Posição',
    description:
      'Se existe um segredo que diferencia os homens comuns dos mestres da performance sexual, ele está aqui. Não basta apenas “saber algumas posições”. O que faz a diferença é como você joga com elas, alternando ritmo, intensidade e conexão para transformar o sexo em uma experiência dinâmica e inesquecível.',
    image: {
      src: 'https://i.imgur.com/WfSi2pw.jpeg',
      alt: 'Homem em controle',
      'data-ai-hint': 'man control',
    },
  },
  {
    title: 'Performance e potência',
    description:
      'Você vai aprender a controlar sua excitação, aumentar sua resistência e manter firmeza mesmo nas situações mais intensas. Aqui revelamos exercícios práticos que dão controle absoluto sobre o momento do clímax. Além disso, mostramos hábitos físicos e alimentares que sustentam a potência natural, e técnicas usadas nos bastidores por atores profissionais para performance e para entrar em cena sempre confiantes.',
    image: {
      src: 'https://i.imgur.com/PcQnoFn.jpeg',
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
