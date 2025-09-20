export function VSL() {
  return (
    <section id="vsl" className="py-6">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-lg border-2 border-primary shadow-2xl shadow-primary/20">
          <div className="aspect-video w-full">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src="https://www.youtube.com/embed/3CZI25GBJF4?controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
