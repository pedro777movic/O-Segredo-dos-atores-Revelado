export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary/30 py-6 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        <p>
          &copy; {currentYear} O Segredo Nº1 Dos Atores Pornôs. Todos os direitos reservados.
        </p>
        <p className="mt-2">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
        </p>
      </div>
    </footer>
  );
}
