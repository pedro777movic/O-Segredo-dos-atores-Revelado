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
    text: 'Aprenda a trabalhar principalmente confiança, domínio corporal, resistência de ferro, consciência corporal e controle mental.',
  },
  {
    icon: BookMarked,
    text: 'Em formato de app de livro digital. Basta acessar e pronto. Acesso imediato!',
  },
  {
    icon: ShieldCheck,
    text: 'Seguro e discreto, para praticar rapidamente e obter máximos resultados.',
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
