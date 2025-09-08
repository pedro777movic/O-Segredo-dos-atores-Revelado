import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    title: 'COMBO COMPLETO',
    subtitle: 'Visualize parte da coleção',
    price: '47,00',
    currency: 'R$',
    originalPrice: '97,00',
    features: [
      'O Segredo Nº1 dos Atores Pornô.',
      'Ejaculação precoce e hábitos de masturbação',
      'Ansiedade na performance',
      'Postura errada e músculos pélvicos fracos',
      'Dominando a sexualidade masculina e Técnicas dos mestres',
      'Mente capacitada e Poderes da Respiração',
      'Controle do corpo e Corpo Potente',
      'Controle da parceira e Super Habilidades Sexuais',
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
        O que você vai receber
      </h2>
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
                <div className="mb-8 text-center">
                  {plan.originalPrice && (
                    <p className="text-lg text-muted-foreground line-through">
                      {plan.currency}
                      {plan.originalPrice}
                    </p>
                  )}
                  <p className="font-headline text-6xl font-extrabold">
                    <span className="text-3xl font-normal">{plan.currency}</span>
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
