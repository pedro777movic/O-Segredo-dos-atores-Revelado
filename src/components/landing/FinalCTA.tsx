import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="bg-secondary/20 py-20"
    >
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
          Está pronto para virar o jogo?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Tenha acesso imediato ao app-book e comece sua melhor performance ainda hoje.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <Button
            size="lg"
            className="w-full max-w-md rounded-full text-xl font-bold shadow-lg shadow-primary/30"
            asChild
          >
            <a href="#pricing">Quero o Ebook Agora</a>
          </Button>
          <p className="font-headline text-2xl font-extrabold tracking-wider text-primary">
            RISCO ZERO!
          </p>
        </div>
      </div>
    </section>
  );
}
