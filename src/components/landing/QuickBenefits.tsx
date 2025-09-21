import { CheckCircle2 } from 'lucide-react';

const quickBenefits = [
  'Controle absoluto da ejaculação',
  'Prazer até ela pedir pra parar',
  'Confiança de um verdadeiro macho alfa',
  'Leve ela ao limite todas as vezes',
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
