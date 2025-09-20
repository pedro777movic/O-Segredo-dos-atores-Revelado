import {
  Star,
  Leaf,
  Ban,
  BrainCircuit,
  Smartphone,
  ShieldCheck,
} from 'lucide-react';

const benefits = [
  {
    icon: Star,
    text: 'Acesse segredos que só circulam nos bastidores da indústria, usados por atores pornôs para ter controle total no sexo.',
  },
  {
    icon: Leaf,
    text: 'Possuir confiança durante toda a relação.',
  },
  {
    icon: Ban,
    text: 'Prolongue o prazer e decida o momento certo para a ejaculação.',
  },
  {
    icon: BrainCircuit,
    text: 'Máxima resistência física e mental para estender seu tempo na cama.',
  },
  {
    icon: Smartphone,
    text: 'Acesso imediato, leitura rápida. Em formato de app-book. Basta acessar com seu login e senha e pronto.',
  },
  {
    icon: ShieldCheck,
    text: 'Seguro e discreto, cabe no seu bolso. Para acessar rapidamente quando quiser.',
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
