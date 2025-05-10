import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Room2 from '@/assets/images/Room_2.jpg';
import Room3 from '@/assets/images/Room_3.jpg';
import Room4 from '@/assets/images/Room_4.jpg';
import Room5 from '@/assets/images/Room_6.jpg';
import { GalleryCardType } from '@/types.ts';
import { GalleryItem } from 'components/Sections/Gallery/GalleryItem.tsx';

export function Gallery() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  return (
    <section className={'w-full'} id={'Rooms'}>
      <div className="flex flex-col w-full">
        {cards.map(card => (
          <GalleryItem item={card} key={card.id} />
        ))}
      </div>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

// <AnimatePresence>
//   {active && typeof active === 'object' && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/20 h-full w-full z-10"
//     />
//   )}
// </AnimatePresence>
// <AnimatePresence>
//   {active && typeof active === 'object' ? (
//     <div className="fixed inset-0 grid place-items-center z-[100] h-full w-full">
//       {/* Pseudo-element for blur */}
//       <div className="absolute inset-0 bg-fill bg-center blur-4xl z-[-1] bg-semiTransparent" ></div>
//       <motion.button
//         key={`button-${active.id}`}
//         layout
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//         }}
//         exit={{
//           opacity: 0,
//           transition: {
//             duration: 0.05,
//           },
//         }}
//         className="flex absolute top-2 right-[5%] items-center justify-center bg-white rounded-full h-6 w-6 cursor-pointer"
//         onClick={() => setActive(null)}
//       >
//         <CloseIcon />
//       </motion.button>
//
//       <motion.div
//         layoutId={`card-${active.id}`}
//         className="relative w-full h-vdh md:h-fit md:max-h-[90%] flex-col g-transparent sm:rounded-3xl overflow-hidden flex items-center px-[5%] gap-4 z-[101]"
//       >
//         <img
//           src={active.src}
//           alt={`${active.id}`}
//           className="w-full max-w-md lg:max-w-2xl 2xl:max-w-4xl rounded-lg object-contain object-top"
//         />
//         <div className={'font-serif text-center text-lg xl:text-xl'}>
//           {getTranslation(`sections.rooms.${active.description}`)}
//         </div>
//       </motion.div>
//     </div>
//   ) : null}
// </AnimatePresence>

const cards: Array<GalleryCardType> = [
  {
    id: 1,
    src: Room2,
    title: 'title-2',
    description: 'description-2',
  },

  {
    id: 2,
    src: Room3,
    title: 'title-3',
    description: 'description-3',
  },
  {
    id: 3,
    src: Room4,
    title: 'title-4',
    description: 'description-4',
  },
  {
    id: 4,
    src: Room5,
    title: 'title-5',
    description: 'description-5',
  },
];
