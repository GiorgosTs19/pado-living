import Room2 from '@/assets/images/Room_2.jpg';
import { useLang } from '@/lang';

export function Pado() {
  const { getTranslation } = useLang();
  return (
    <section className="relative w-full bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight font-serif ">{getTranslation('sections.pado.title')}</h1>
          <p className="text-lg text-muted font-serif ">{getTranslation('sections.pado.description')}</p>
        </div>

        {/* Hero Image */}
        <div className="w-full min-h-42 md:h-[400px] relative rounded-2xl overflow-hidden shadow-md">
          <img src={Room2} alt={'Cozy Mediterranean Airbnb'} className={'object-cover object-center'} />
        </div>
      </div>
    </section>
  );
}
