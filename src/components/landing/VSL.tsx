import { PlayCircle } from 'lucide-react';

export function VSL() {
  return (
    <section id="vsl" className="py-12">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-lg border-2 border-primary shadow-2xl shadow-primary/20">
          <div
            className="aspect-video w-full bg-secondary/30"
          >
            {/* 
              This is a placeholder for your video.
              Replace this div with your video embed code (e.g., iframe from YouTube/Vimeo).
              Example for YouTube:
              <iframe 
                className="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/40">
                <PlayCircle className="h-20 w-20 text-white/70 transition-transform hover:scale-110" />
                <p className="text-lg font-semibold text-white/80">Assista à apresentação para descobrir o segredo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
