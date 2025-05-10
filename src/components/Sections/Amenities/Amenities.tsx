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

const cards = [
  {
    id: 1,
    icon: <img src={Wifi} className={'h-8 md:h-14 lg:h-20'} alt={'Wifi'} />,
    title: 'Free High-Speed Wi-Fi',
    description: 'Stay connected anytime with fast, free internet throughout your stay.',
  },
  {
    id: 2,
    icon: <Parking className={'h-8 md:h-14 lg:h-20'} />,
    title: 'Private Parking',
    description: 'Secure, private parking available for your convenience during your stay.',
  },
  {
    id: 4,
    icon: <img src={Breakfast} className={'h-8 md:h-14 lg:h-20'} alt={'Breakfast'} />,
    title: 'Breakfast Included',
    description: 'Fresh local breakfast delivered daily with rotating menu options.',
  },
];
