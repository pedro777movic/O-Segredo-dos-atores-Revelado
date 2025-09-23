import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const authorPoints = [
  'Controlar a ejaculação naturalmente',
  'Aumentar potência e resistência mesmo em condições extremas',
  'Dar prazer inesquecível para qualquer parceira',
];

export function AuthorSection() {
  return (
    <section id="author" className="py-8 md:py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 rounded-xl bg-secondary/30 p-8 shadow-lg md:grid-cols-2 md:gap-12 md:p-12">
        <div className="relative aspect-square h-auto w-full max-w-sm justify-self-center overflow-hidden rounded-lg shadow-2xl md:aspect-[3/4]">
          <Image
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1974&auto=format&fit=crop"
            alt="Jason Steele, ex-ator e autor do guia"
            fill
            className="object-cover"
            data-ai-hint="man portrait"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Quem Revela Esses Segredos?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Essas técnicas não foram inventadas em laboratório. Elas vêm direto dos bastidores da indústria pornô, onde homens são obrigados a entregar performance máxima sob pressão.
          </p>
          <p className="mt-4 text-muted-foreground">
            O responsável por revelar isso é{' '}
            <span className="font-bold text-primary">Jason Steele</span> – ex-ator que, por anos, viveu a pressão de nunca poder falhar. Ali, ele descobriu que existe um manual invisível, passado de ator para ator, que ensina como:
          </p>
          <ul className="mt-4 space-y-2">
            {authorPoints.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground">
            Agora, Jason Steele reuniu tudo isso no APP-BOOK prático e direto:{' '}
            <span className="font-bold text-foreground">
              “O Segredo Nº1 dos Atores Pornôs”
            </span>.
          </p>
          <p className="mt-6 font-semibold italic text-primary">
            👉 Se funciona em cena, sob pressão… imagine na vida real.
          </p>
        </div>
      </div>
    </section>
  );
}
