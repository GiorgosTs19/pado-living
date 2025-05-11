// import Pharmacy from '@/assets/icons/pharmacy.svg';
// import Groceries from '@/assets/icons/groceries.svg';
import { useLang } from '@/lang';
import { useModal } from '@/hooks';

export function Location() {
  const { getTranslation } = useLang();
  const { setOpen } = useModal();

  return (
    <section id={'Location'} className="relative grid lg:grid-cols-2 gap-12 mt-20 px-4 md:px-[5%] py-16 w-full border-y-4 border-border">
      {/* Info Column */}
      <div className="relative backdrop-blur-xl p-10 space-y-8">
        <header>
          <h2 className="text-4xl font-serif font-bold text-secondary mb-2">How to Find Us</h2>
          <p className="text-base text-chill">Kallithea Av 17, Faliraki, Rhodes</p>
        </header>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {['2 min from the beach', 'Cafés & shops nearby', 'Parking available', 'Pharmacy 50m away'].map(item => (
            <span key={item} className="bg-silent text-secondary text-sm font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>

        {/* Details */}
        <div className="flex flex-col gap-y-3 text-sm md:text-base text-secondary">
          <h3 className="font-semibold mb-1">{getTranslation('sections.location.taxi.title')}</h3>
          <button
            className="cursor-pointer w-36 max-w-md rounded-xl bg-primary text-secondary text-sm md:text-base font-medium py-2 hover:bg-subtitle transition cursor-pointe "
            onClick={() => setOpen(true)}
            aria-label="Call a Taxi Modal"
          >
            {getTranslation('sections.location.taxi.callTaxi')}
          </button>
        </div>
      </div>

      {/* Map Column */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl border border-border w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.7873505084463!2d28.2006972!3d36.3417033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149565fee5b4848f%3A0xc92369b9fb6a7a6e!2sPado%20living!5e0!3m2!1sel!2sgr!4v1746914775195!5m2!1sel!2sgr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          className={'min-h-[300px]'}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/*<div className={'absolute top-5 right-3 z-30 flex flex-col gap-2'}>*/}
        {/*  <a*/}
        {/*    href="https://maps.app.goo.gl/uPXqnkFvDFs59uL69"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*    className=" rounded-xl text-secondary p-1 font-medium border-2 border-border transition"*/}
        {/*  >*/}
        {/*    <img src={Pharmacy} alt={'Pharmacy'} className={'h-6 w-6 md:h-10 md:w-10'} />*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    href="https://maps.app.goo.gl/ARGzPF4JKfstA7tcA"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*    className="rounded-xl text-secondary p-1 font-medium border-2 border-border transition"*/}
        {/*  >*/}
        {/*    <img src={Groceries} alt={'Groceries'} className={'h-6 w-6 md:h-10 md:w-10'} />*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}
