import { AppWindow } from 'lucide-react';

export function AppBookExplanation() {
  return (
    <section id="app-book-explanation" className="py-8">
      <div className="mx-auto max-w-3xl rounded-xl bg-secondary/30 p-8 text-center shadow-lg">
        <AppWindow className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 font-headline text-2xl font-bold md:text-3xl">
          Mais que um Ebook: Um APP-BOOK Interativo
        </h3>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          O APP-BOOK não é apenas um livro digital: é seu guia interativo de alta performance sexual. Todo conteúdo foi adaptado para um formato prático, com navegação fácil, exercícios passo a passo e acesso instantâneo. Transforme sua performance de qualquer lugar, sem precisar imprimir ou carregar arquivos pesados.
        </p>
      </div>
    </section>
  );
}
