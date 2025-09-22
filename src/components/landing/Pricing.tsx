import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { DynamicScarcity } from './DynamicScarcity';

const plans = [
  {
    title: 'COMBO COMPLETO',
    subtitle: 'Acesso Imediato a Todo o Conteúdo',
    price: '37,00',
    currency: 'R$',
    originalPrice: '97,00',
    features: [
      'APP-BOOK: O Segredo Nº1 dos Atores',
      'Módulo 1: A Técnica da Sedução Magnética',
      'Módulo 2: O Método das Posições de Controle',
      'Módulo 3: Performance, Potência e Ejaculação',
    ],
    buttonText: 'Sim, quero o desempenho de um ator pornô',
    bgColor: 'bg-primary',
    textColor: 'text-primary-foreground',
    borderColor: 'border-primary',
    primary: true,
    badge: 'Mais de 1.750 usuários',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-8">
      <div className="mb-8 text-center">
        <h2 className="mb-2 font-headline text-3xl font-bold md:text-4xl">
          Garanta seu acesso antes que acabe
        </h2>
        <div className="flex items-center justify-center">
          <DynamicScarcity productName="O Segredo Nº1" />
        </div>
      </div>
      <div className="flex justify-center">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative flex w-full max-w-md flex-col rounded-2xl shadow-lg ${plan.borderColor} ${plan.primary ? 'border-2' : ''}`}
          >
            {plan.primary && (
              <div className="absolute -top-4 right-4 rotate-12 transform rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-black">
                {plan.badge}
              </div>
            )}
            <CardHeader
              className={`rounded-t-2xl ${plan.primary ? plan.bgColor : 'bg-secondary/30'} p-6 text-center ${plan.textColor}`}
            >
              <CardTitle className="text-xl font-bold uppercase">
                {plan.title}
              </CardTitle>
              <p className="text-sm font-semibold">{plan.subtitle}</p>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between p-8">
              <div>
                <div className="mb-6 text-center">
                  <p className="text-lg text-muted-foreground">
                    De{' '}
                    <span className="line-through">R${plan.originalPrice}</span>{' '}
                    por apenas:
                  </p>
                  <p className="font-headline text-6xl font-extrabold">
                    <span className="text-3xl font-normal">
                      {plan.currency}
                    </span>
                    {plan.price}
                  </p>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className={`w-full text-lg font-bold shadow-lg shadow-primary/30 animate-pulse ${plan.primary ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`}
                >
                  <a href="https://pay.cakto.com.br/ajsxsz2_562111">
                    {plan.buttonText}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
