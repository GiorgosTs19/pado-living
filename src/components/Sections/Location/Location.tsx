import { useLang } from '@/lang';
import { useModal } from '@/hooks';
import { RiMapPin2Line } from 'react-icons/ri';
import { Section } from 'components/Section';
import { Button } from 'components/Button';
import { IoCheckmarkDone } from 'react-icons/io5';
import { TiLocationArrowOutline } from 'react-icons/ti';

export function LocationS() {
  const { getTranslation } = useLang();
  const { setOpen } = useModal();

  return (
    <section id={'Location'} className="relative grid lg:grid-cols-2 gap-12 px-4 md:px-[5%] py-16 w-full">
      {/* Info Column */}
      <div className="relative backdrop-blur-xl space-y-8">
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
        <div className="flex flex-col gap-y-3 text-sm md:text-base  text-secondary">
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

interface NearbyPlace {
  name: string;
  type: string;
  distance: string;
  description: string;
  route: string;
}

const nearbyPlaces: NearbyPlace[] = [
  {
    name: 'Faliraki Beach',
    type: 'Beach',
    distance: '~ 350m',
    description: 'Our villa has direct access to this beautiful sandy beach.',
    route: 'https://maps.app.goo.gl/oeTNcGpjvjmFwjyD7',
  },
  {
    name: 'Super Market Atlantic',
    type: 'Grocery',
    distance: '~ 100m',
    description: 'Local market with fresh produce, essentials, and beach supplies.',
    route: 'https://maps.app.goo.gl/Qn9YY7z6o1a5MmW17',
  },
  {
    name: 'Trilogia Restaurant',
    type: 'Restaurant',
    distance: '~ 50m',
    description: 'Greek cuisine restaurant.',
    route: 'https://maps.app.goo.gl/UXmsJHYwq1D5VsMw6',
  },
  {
    name: 'Cavo Costa Kouzina',
    type: 'Restaurant',
    distance: '~ 120m',
    description: 'Greek cuisine restaurant.',
    route: 'https://maps.app.goo.gl/H5DCCeCfSpFWRTFA6',
  },
  {
    name: 'Aruba Cafe Bar',
    type: 'Cafe',
    distance: '~ 30m',
    description: 'Cozy cafe serving breakfast, lunch, and great coffee.',
    route: 'https://maps.app.goo.gl/prKvdav2wHGaFuat9',
  },
  {
    name: 'Chatzimanolis Emmanouil',
    type: 'Pharmacy',
    distance: '~ 800m',
    description: 'Full-service pharmacy for all your health needs.',
    route: 'https://maps.app.goo.gl/8H4autGa3zSb2B9r5',
  },
];

export const Location = () => {
  return (
    <Section id="Location" className={'px-0 w-full'}>
      <div className="gap-8 w-full">
        {/* Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.7873505084463!2d28.2006972!3d36.3417033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149565fee5b4848f%3A0xc92369b9fb6a7a6e!2sPado%20living!5e0!3m2!1sel!2sgr!4v1746914775195!5m2!1sel!2sgr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          className={'min-h-[400px] lg:min-h-[500px]'}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Location info */}
        <div className="flex flex-col md:flex-row gap-6 justify-center px-[5%] py-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <RiMapPin2Line className="text-secondary text-2xl lg:text-3xl" />
              <h3 className="text-xl font-semibold">Address</h3>
            </div>
            <address className="flex flex-col md:flex-row not-italic mb-4 text-gray-700 gap-3">
              <span>Kallithea Av 17</span>

              <span>Faliraki</span>

              <span>Rhodes Greece</span>
            </address>
            <Button>
              <a href="https://goo.gl/maps/HkGtC47sYbWCbCXZ6" target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Getting Here</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <IoCheckmarkDone className={'text-chill text-2xl'} />
                <div>
                  <span className="font-medium">From Rhodes International Airport (RHO):</span>
                  <p className="text-sm text-muted-foreground">Approximately 15 km — 20 minutes by car depending on traffic.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <IoCheckmarkDone className={'text-chill text-2xl'} />
                <div>
                  <span className="font-medium">Public Transportation:</span>
                  <p className="text-sm text-muted-foreground">
                    Bus stops are within walking distance. Local taxis and car rentals are also readily available.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <IoCheckmarkDone className={'text-chill text-2xl'} />
                <div>
                  <span className="font-medium">Parking:</span>
                  <p className="text-sm text-muted-foreground">Free on-premises parking.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nearby places */}
      <div className="mt-12 px-[5%]">
        <h3 className="text-2xl font-semibold mb-6 text-center">Nearby Places</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyPlaces.map((place, index) => (
            <div key={index} className="p-5 border-b relative">
              <div className="flex justify-between">
                <h4 className="font-medium max-w-[200px]">{place.name}</h4>
                <span className="bg-primary/50 text-chill text-xs py-1 px-2 rounded-full items-center flex">{place.distance}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{place.type}</p>
              <p className="text-sm mt-2">{place.description}</p>
              <div className="absolute bottom-0 right-0 p-1 bg-primary/70 rounded-tl-lg cursor-pointer">
                <a href={place.route} target="_blank" rel="noopener noreferrer">
                  <TiLocationArrowOutline className="text-secondary text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
