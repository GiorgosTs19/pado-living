import { useLang } from '@/lang';
import { RiMapPin2Line, RiRestaurantLine } from 'react-icons/ri';
import { Section, SectionHeader } from 'components/Section';
import { Button } from 'components/Button';
import { IoCafeOutline, IoCheckmarkDone } from 'react-icons/io5';
import { TiLocationArrowOutline } from 'react-icons/ti';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { ReactNode } from 'react';
import { CiMedicalCross } from 'react-icons/ci';

interface NearbyPlace {
  name: string;
  type: string;
  distance: string;
  description: string;
  route: string;
  icon?: ReactNode;
}

const nearbyPlaces: NearbyPlace[] = [
  {
    name: 'Faliraki Beach',
    type: 'Beach',
    distance: '~ 350m',
    description: 'Our rooms have direct access to this beautiful sandy beach.',
    route: 'https://maps.app.goo.gl/oeTNcGpjvjmFwjyD7',
    icon: <FaUmbrellaBeach />,
  },
  {
    name: 'Atlantic',
    type: 'Grocery',
    distance: '~ 100m',
    description: 'Local market with fresh produce, essentials, and beach supplies.',
    route: 'https://maps.app.goo.gl/Qn9YY7z6o1a5MmW17',
    icon: <MdOutlineLocalGroceryStore />,
  },
  {
    name: 'Trilogia Restaurant',
    type: 'Restaurant',
    distance: '~ 50m',
    description: 'Greek cuisine restaurant.',
    route: 'https://maps.app.goo.gl/UXmsJHYwq1D5VsMw6',
    icon: <RiRestaurantLine />,
  },
  {
    name: 'Cavo Costa Kouzina',
    type: 'Restaurant',
    distance: '~ 120m',
    description: 'Greek cuisine restaurant.',
    route: 'https://maps.app.goo.gl/H5DCCeCfSpFWRTFA6',
    icon: <RiRestaurantLine />,
  },
  {
    name: 'Aruba Cafe Bar',
    type: 'Cafe',
    distance: '~ 30m',
    description: 'Cozy cafe serving breakfast, lunch, and great coffee.',
    route: 'https://maps.app.goo.gl/prKvdav2wHGaFuat9',
    icon: <IoCafeOutline />,
  },
  {
    name: 'Pharmacy',
    type: 'Pharmacy',
    distance: '~ 800m',
    description: 'Full-service pharmacy for all your health needs.',
    route: 'https://maps.app.goo.gl/8H4autGa3zSb2B9r5',
    icon: <CiMedicalCross />,
  },
];

export const Location = () => {
  const { getTranslation } = useLang();
  return (
    <Section id="Location" className={'px-[5%]'}>
      <SectionHeader text={getTranslation('sections.location.title')!} />
      <div className="gap-10 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.7873505084463!2d28.2006972!3d36.3417033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149565fee5b4848f%3A0xc92369b9fb6a7a6e!2sPado%20living!5e0!3m2!1sel!2sgr!4v1746914775195!5m2!1sel!2sgr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          className={'min-h-[400px] max-w-[1200px] lg:min-h-[500px] rounded-xl shadow-xl mx-auto mb-10'}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

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
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=36.34176392950494,28.20069768362238&travelmode=driving"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Getting Here</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div>
                  <IoCheckmarkDone className={'text-chill text-3xl'} />
                </div>
                <div>
                  <span className="font-medium">{getTranslation('sections.location.airport.title')}</span>
                  <p className="text-sm text-muted-foreground">{getTranslation('sections.location.airport.description')}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div>
                  <IoCheckmarkDone className={'text-chill text-3xl'} />
                </div>
                <div>
                  <span className="font-medium">{getTranslation('sections.location.publicTransport.title')}</span>
                  <p className="text-sm text-muted-foreground">{getTranslation('sections.location.publicTransport.description')}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div>
                  <IoCheckmarkDone className={'text-chill text-3xl'} />
                </div>
                <div>
                  <span className="font-medium">{getTranslation('sections.location.parking.title')}</span>
                  <p className="text-sm text-muted-foreground">{getTranslation('sections.location.parking.description')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nearby places */}
      <div className="mt-12 px-[2%]">
        <h3 className="text-2xl font-semibold mb-6 text-center">Nearby Places</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyPlaces.map((place, index) => (
            <div key={index} className="p-5 border-b relative">
              <div className="flex justify-between">
                <div className={'flex items-center gap-2'}>
                  <h4 className="font-medium max-w-[200px]">{place.name}</h4>
                  <div className={'text-2xl'}>{place.icon}</div>
                </div>
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
