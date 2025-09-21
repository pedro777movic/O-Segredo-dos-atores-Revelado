import { CheckCircle2 } from 'lucide-react';

const quickBenefits = [
  'Durar até 3x mais sem perder a potência',
  'Controlar o prazer e decidir quando terminar',
  'Deixar sua parceira no limite e pedindo mais',
  'Aumentar sua confiança em qualquer situação',
];

export function QuickBenefits() {
  return (
    <section id="quick-benefits" className="py-8">
      <div className="mx-auto max-w-3xl rounded-xl bg-secondary/30 p-8 shadow-lg">
        <h3 className="mb-6 text-center font-headline text-2xl font-bold md:text-3xl">
          O que você vai conseguir ainda hoje
        </h3>
        <ul className="space-y-4">
          {quickBenefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
              <span className="text-lg text-muted-foreground md:text-xl">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
