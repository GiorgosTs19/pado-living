import { useLang } from '@/lang';

export function Hero() {
  const { getTranslation } = useLang();
  return (
    <section
      className={`relative hero-bg bg-center bg-contain bg-no-repeat min-h-64 md:h-[70dvh] md:bg-cover w-full flex flex-col items-center justify-center`}
    >
      {/* Blurred background overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/10 z-0" />

      {/* Foreground content */}
      <h1 className="relative text-center px-4 text-5xl sm:text-7xl lg:text-9xl font-bold text-shadow-lg select-none h-fit min-h-[50px] lg:min-h-[150px] z-10 opacity-100 text-clip bg-primary bg-cover ">
        {getTranslation('sections.hero.title')}
      </h1>
    </section>
  );
}
