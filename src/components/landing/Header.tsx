import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="bg-gradient-to-b from-background to-secondary/20 py-12 text-center">
      <div className="container mx-auto max-w-4xl px-4">
        <h1
          className={cn(
            'font-headline text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl'
          )}
        >
          O Segredo Nº1 dos Atores P** para{' '}
          <span className="text-primary">
            durar mais, dar mais prazer e ser inesquecível
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
