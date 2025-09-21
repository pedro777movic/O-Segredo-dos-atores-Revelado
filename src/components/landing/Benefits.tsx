import {
  Star,
  Zap,
  ThumbsUp,
  BrainCircuit,
  Smartphone,
  ShieldCheck,
} from 'lucide-react';

const benefits = [
  {
    icon: Star,
    text: 'Acesse os segredos dos bastidores da indústria, para ter controle total e performance máxima.',
  },
  {
    icon: ThumbsUp,
    text: 'Acabe com a insegurança e vire o homem que ela não esquece, que domina a relação.',
  },
  {
    icon: Zap,
    text: 'Prolongue o prazer e decida o momento certo de terminar, levando ela ao limite.',
  },
  {
    icon: BrainCircuit,
    text: 'Aguente o dobro do tempo sem perder a potência e a intensidade, do começo ao fim.',
  },
  {
    icon: Smartphone,
    text: 'Acesso imediato no seu celular com o app-book. Sem precisar instalar nada, basta acessar e usar.',
  },
  {
    icon: ShieldCheck,
    text: 'Método 100% seguro e discreto que você pode usar em qualquer lugar, a qualquer hora.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-8">
      <h2 className="mb-8 text-center font-headline text-3xl font-bold md:text-4xl">
        Benefícios do Segredo Nº1
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
