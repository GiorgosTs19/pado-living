import {
  MdOutlineBeachAccess,
  MdOutlineBed,
  MdOutlineFreeBreakfast,
  MdOutlineLocalParking,
} from 'react-icons/md';

export function Amenities() {
  return (
    <section
      className={
        'px-[5%] py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full mx-auto'
      }
    >
      {cards.map((card) => (
        <div
          key={card.id}
          className={
            'p-2 border-subtitle flex flex-col items-center justify-center gap-3 border-b-2 sm:border-b-0 sm:border-e-2 sm:nth-[2]:border-e-0 lg:nth-[2]:border-e-2 md:border-e-2 last:border-0'
          }
        >
          <div className={'text-5xl text-secondary'}>{card.icon}</div>
          <h3 className={'w-full text-center'}>{card.title}</h3>
        </div>
      ))}
    </section>
  );
}

const cards = [
  {
    id: 1,
    icon: <MdOutlineBeachAccess />,
    title: 'Perfectly Located in Faliraki',
    description:
      'Just a short 8-minute walk from Faliraki Beach, Pado Living offers easy access to the sun and sea. Explore the area’s local attractions and enjoy a relaxing stay surrounded by natural beauty.',
  },
  {
    id: 2,
    icon: <MdOutlineBed />,
    title: 'Modern Amenities for Your Comfort',
    description:
      'Relax in air-conditioned rooms featuring a flat-screen TV, minibar, and private bathrooms. Some rooms offer balconies with garden or city views, creating a peaceful space to unwind.',
  },

  {
    id: 3,
    icon: <MdOutlineFreeBreakfast />,
    title: 'Fresh Breakfast Every Morning',
    description:
      'Wake up to a delicious continental breakfast, prepared fresh daily. Start your morning right with a variety of tasty options to energize you for the day ahead.',
  },
  {
    id: 4,
    icon: <MdOutlineLocalParking />,
    title: 'Peaceful Garden & Free Parking',
    description:
      'Enjoy a tranquil garden setting and the convenience of free private parking during your stay. Whether relaxing outdoors or exploring the city, comfort is always at your doorstep.',
  },
];
