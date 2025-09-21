import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="bg-gradient-to-b from-background to-secondary/20 pb-24 pt-12 text-center md:pb-32">
      <div className="container mx-auto max-w-4xl px-4">
        <h1
          className={cn(
            'font-headline text-4xl font-black uppercase tracking-tight text-foreground drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] md:text-6xl',
            '[text-wrap:balance]'
          )}
          style={{ textShadow: '0px 2px 4px hsl(var(--primary) / 0.5)' }}
        >
          O Segredo Nº1 dos Atores Pornôs Revelado{' '}
          <span className="text-primary">
            – Aprenda a Dominar Sua Performance na Cama
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Descubra como os melhores da indústria conseguem o controle e a
          resistência que 99% dos homens não têm — e como você pode ter os
          mesmos resultados ainda hoje.
        </p>
      </div>
    </header>
  );
}
