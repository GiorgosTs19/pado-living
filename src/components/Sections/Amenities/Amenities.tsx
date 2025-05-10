import { Parking } from '@/assets/icons/Parking.tsx';
import Wifi from '@/assets/icons/wifi.svg';
import Breakfast from '@/assets/icons/breakfast.svg';

export function Amenities() {
  return (
    <section className={'px-[5%] py-3 lg:py-10 grid grid-cols-3 gap-3 w-full mx-auto'}>
      {cards.map(card => (
        <div key={card.id} className={'p-2 border-subtitle flex flex-col items-center justify-center gap-y-[2rem] border-e-2 last:border-0'}>
          {card.icon}
          <h3 className={'w-full text-center font-serif text-xl max-w-md hidden md:block'}>{card.description}</h3>
        </div>
      ))}
    </section>
  );
}

const iconWrapperStyle = 'flex items-center justify-center h-10 w-10 border-2 border-border rounded-full';

const cards = [
  {
    id: 1,
    icon: (
      <div className={iconWrapperStyle}>
        <img src={Wifi} className="h-8 w-8" alt="Wifi" />
      </div>
    ),
    title: 'Free High-Speed Wi-Fi',
    description: 'Free Wi-Fi',
  },
  {
    id: 2,
    icon: (
      <div className={iconWrapperStyle}>
        <Parking className="h-8 w-8" />
      </div>
    ),
    title: 'Private Parking',
    description: 'Private parking',
  },
  {
    id: 4,
    icon: (
      <div className={iconWrapperStyle}>
        <img src={Breakfast} className="h-8 w-8" alt="Breakfast" />
      </div>
    ),
    title: 'Breakfast Included',
    description: 'Breakfast available',
  },
];
