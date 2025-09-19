import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section id="guarantee" className="py-12">
      <div className="mx-auto max-w-3xl rounded-xl border-2 border-primary bg-secondary/30 p-8 text-center shadow-lg shadow-primary/10">
        <ShieldCheck className="mx-auto h-16 w-16 text-primary" />
        <h3 className="mt-4 font-headline text-2xl font-bold md:text-3xl">
          Garantia de 7 Dias
        </h3>
        <p className="mt-2 text-lg text-muted-foreground md:text-xl">
          Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do
          seu investimento.
        </p>
      </div>
    </section>
  );
}
