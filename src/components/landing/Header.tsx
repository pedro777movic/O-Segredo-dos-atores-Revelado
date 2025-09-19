import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="bg-gradient-to-b from-background to-secondary/20 py-20 text-center">
      <div className="container mx-auto max-w-4xl px-4">
        <h1
          className={cn(
            'font-headline text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl'
          )}
        >
          DESCRUBRA A TÉCNICA MAIS UTILIZADA NESTE MOMENTO PELA{' '}
          <span className="text-primary">INDÚSTRIA ADULTA</span>
        </h1>
        <p className="mt-4 font-headline text-3xl font-bold uppercase md:text-4xl">
          <span className="text-primary">
            O Segredo Nº1 dos Atores Pornô
          </span>
        </p>
        <p className="mt-2 font-headline text-2xl font-bold md:text-3xl">
          O ápice da potência sexual masculina moderna. Em formato de app-book.
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Você já se perguntou como os atores pornôs conseguem performances
          intensas, longas e inesquecíveis, mesmo em frente às câmeras, sob
          pressão e com tantas pessoas assistindo?
        </p>
      </div>
    </header>
  );
}
