import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    title: 'BÁSICO',
    subtitle: 'SOLO MÓDULOS BÁSICOS',
    price: '3,90',
    features: [
      'O Segredo Nº1 dos Atores Pornô.',
      'Material através da área de membros.',
      'Acesso por 12 meses.',
    ],
    buttonText: 'Quero Somente o Básico',
    bgColor: 'bg-card',
    textColor: 'text-card-foreground',
    borderColor: 'border-border',
    primary: false,
  },
  {
    title: 'COMBO COMPLETO',
    subtitle: 'TODA LA COLECCIÓN + BONO',
    price: '7,90',
    originalPrice: '59,90',
    features: [
      'O Segredo Nº1 dos Atores Pornô.',
      'BÔNUS #01: Guia de Hábitos Saudáveis.',
      'BÔNUS #02: Confiança Inabalável.',
      'BÔNUS #03: Comunicação Sedutora.',
      'BÔNUS #04: Dominando o Prazer.',
      'BÔNUS #05: Fitness Sexual.',
      'BÔNUS #06: Mente Sã, Corpo Potente.',
      'BÔNUS #07: Guia de Suplementos Naturais.',
    ],
    buttonText: 'Quero o Combo Completo',
    bgColor: 'bg-primary',
    textColor: 'text-primary-foreground',
    borderColor: 'border-primary',
    primary: true,
    badge: 'MAIS VENDIDO',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-12">
      <h2 className="mb-10 text-center font-headline text-3xl font-bold md:text-4xl">
        Escolha a Melhor Opção Para Você
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative flex flex-col rounded-2xl shadow-lg ${plan.borderColor} ${plan.primary ? 'border-2' : ''}`}
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
                <div className="mb-8 text-center">
                  {plan.originalPrice && (
                    <p className="text-lg text-muted-foreground line-through">
                      ${plan.originalPrice}
                    </p>
                  )}
                  <p className="font-headline text-6xl font-extrabold">
                    <span className="text-3xl font-normal">$</span>
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
                  size="lg"
                  className={`w-full text-lg font-bold ${plan.primary ? 'bg-background text-foreground hover:bg-background/90' : ''}`}
                >
                  {plan.buttonText}
                </Button>
                {plan.primary && (
                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    Atenção: Oferta por tempo limitado!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
