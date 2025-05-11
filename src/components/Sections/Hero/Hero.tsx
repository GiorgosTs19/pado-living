import { useLang } from '@/lang';

export function Hero() {
  const { getTranslation } = useLang();

  return (
    <section className="relative min-h-dvh w-full flex flex-col items-center justify-center text-secondary">
      {/* Dark overlay with blur */}
      <div className="absolute inset-0 bg-secondary/30 backdrop-blur-xs z-0 border-b-4 border-border" />

      {/* Foreground content */}
      <div className="relative z-10 text-center px-4 gap-y-5 flex flex-col">
        <h1 className="font-serif relative text-center px-4 text-5xl sm:text-7xl lg:text-9xl font-bold text-shadow-lg select-none h-fit min-h-[50px] lg:min-h-[150px] z-10 opacity-100 text-clip bg-primary bg-cover ">
          {getTranslation('sections.hero.title')}
        </h1>
        <h2 className="text-2xl lg:text-6xl font-serif font-bold tracking-tight text-white">Where Design Meets Comfort</h2>
      </div>
    </section>
  );
}
