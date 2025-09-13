import {
  Star,
  Leaf,
  Ban,
  BrainCircuit,
  BookMarked,
  ShieldCheck,
} from 'lucide-react';

const benefits = [
  {
    icon: Star,
    text: 'O mais utilizado no momento pela indústria adulta. Alta performance vinda dos bastidores, passada de ator para ator',
  },
  {
    icon: Leaf,
    text: 'Natural e prático. Não depende de medicamentos, produtos ou acessórios.',
  },
  {
    icon: Ban,
    text: 'Focado em prazer sexual mais performance. Não deixe de desfrutar do prazer e garantir que a sua parceira tenha a melhor experiência sexual dela!',
  },
  {
    icon: BrainCircuit,
    text: 'Focado em segurança mental + performance física.',
  },
  {
    icon: BookMarked,
    text: 'Em formato digital, com acesso imediato.',
  },
  {
    icon: ShieldCheck,
    text: 'Seguro e discreto, sem julgamentos.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-12">
      <h2 className="mb-10 text-center font-headline text-3xl font-bold md:text-4xl">
        Benefícios do Segredo Nº1
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-lg bg-secondary/30 p-6"
          >
            <benefit.icon className="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
            <p className="text-lg text-muted-foreground">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
