import { useLang } from '@/lang';

export function Hero() {
  const { getTranslation } = useLang();
  return (
    <section
      className={`relative hero-bg bg-cover bg-no-repeat bg-center h-[70dvh] w-full flex flex-col items-center justify-center rounded-b-3xl gap-5`}
    >
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-[#E7E4DF] z-10 pointer-events-none rounded-b-3xl" />
      <h1 className="text-center px-4 text-5xl sm:text-7xl lg:text-9xl font-bold text-clip hero-bg bg-[center_50%] animate-bg-pan-down bg-cover lg:bg-[center_10%] text-shadow select-none h-fit lg:min-h-[150px]">
        {getTranslation('sections.hero.Title')}
      </h1>
    </section>
  );
}
