import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Clock } from 'lucide-react';

const plans = [
  {
    title: 'COMBO COMPLETO',
    subtitle: 'Visualize o conteúdo abaixo',
    price: '47,00',
    currency: 'R$',
    originalPrice: '97,00',
    features: [
      'APP-BOOK O SEGREDO Nº1 DOS ATORES PORNÔS: Todos os Segredos Revelados',
      'Sedução: Performance Antes da Cama',
      'Posição: O Que Diferencia O Homem Comum Dos Mestres Da Performance',
      'Performance e Potência: Domine a Retardação Ejaculatória e Obtenha Máxima Potência',
    ],
    buttonText: 'Liberar o Segredo Agora',
    bgColor: 'bg-primary',
    textColor: 'text-primary-foreground',
    borderColor: 'border-primary',
    primary: true,
    badge: 'OFERTA DE LANÇAMENTO',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-8">
      <h2 className="mb-2 text-center font-headline text-3xl font-bold md:text-4xl">
        O que você vai receber
      </h2>
      <p className="mb-8 flex items-center justify-center gap-2 text-center text-lg font-semibold text-primary">
        <Clock className="h-5 w-5" />
        <span>Oferta por tempo limitado!</span>
      </p>
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
                    De <span className="line-through">R${plan.originalPrice}</span> por apenas:
                  </p>
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
                  asChild
                  size="lg"
                  className={`w-full text-lg font-bold ${plan.primary ? 'bg-background text-foreground hover:bg-background/90' : ''}`}
                >
                  <a href="https://pay.cakto.com.br/ajsxsz2_562111">{plan.buttonText}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
