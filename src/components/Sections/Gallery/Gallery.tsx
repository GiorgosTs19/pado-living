import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLang } from '@/lang';
import Room1 from '@/assets/images/Room_1.jpg';
import Room2 from '@/assets/images/Room_2.jpg';
import Room3 from '@/assets/images/Room_3.jpg';
import Room4 from '@/assets/images/Room_4.jpg';
import Room5 from '@/assets/images/Room_6.jpg';

export function Gallery() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const { getTranslation } = useLang();

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
    <section className={'px-[5%] py-10 '} id={'Rooms'}>
      <h2 className={'text-start text-3xl font-bold mb-10 ps-3 font-serif'}> {getTranslation(`sections.rooms.title`)}</h2>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 grid place-items-center z-[100] h-full w-full">
            {/* Pseudo-element for blur */}
            <div className="absolute inset-0 bg-fill bg-center blur-4xl z-[-1] bg-semiTransparent" ></div>
            <motion.button
              key={`button-${active.id}`}
              layout
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
              className="flex absolute top-2 right-[5%] items-center justify-center bg-white rounded-full h-6 w-6 cursor-pointer"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.id}`}
              className="relative w-full h-vdh md:h-fit md:max-h-[90%] flex-col g-transparent sm:rounded-3xl overflow-hidden flex items-center px-[5%] gap-4 z-[101]"
            >
              <img
                src={active.src}
                alt={`${active.id}`}
                className="w-full max-w-md lg:max-w-2xl 2xl:max-w-4xl rounded-lg object-contain object-top"
              />
              <div className={'font-serif text-center text-lg xl:text-xl'}>
                {getTranslation(`sections.rooms.${active.description}`)}
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul
        className={`mx-auto w-full flex flex-wrap items-center justify-center 2xl:justify-start gap-9 ${active ? '' : ''}`}
      >
        {cards.map((card) => (
          <motion.li
            layoutId={`card-${card.id}`}
            key={card.id}
            onClick={() => setActive(card)}
            className={`p-4 flex flex-col rounded-xl cursor-pointer ${active ? 'pointer-events-none' : ''}`}
          >
            <div className="relative flex gap-4 flex-col w-full group">
              <div
                className={
                  'font-serif px-2 text-xs md:text-base lg:text-lg 2xl:text-2xl text-center font-bold italic absolute w-full h-full flex items-center justify-center z-10 group-hover:hidden'
                }
              >
                {getTranslation(`sections.rooms.${card.overlay}`)}
              </div>
              <motion.div
                layoutId={`image-${card.id}`}
                whileHover={{ opacity: 1, scale: 1.1 }}
                initial={{ opacity: 0.4, scale: 1 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={card.src}
                  alt={`${card.id}`}
                  className="h-20 sm:h-30 md:h-40 2xl:h-50 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
            </div>
          </motion.li>
        ))}
      </ul>
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



const cards = [
  {
    id: 1,
    src: Room1,
    overlay: 'view-1',
    description: 'description-1',
  },
  {
    id: 2,
    src: Room2,
    overlay: 'view-2',
    description: 'description-2',
  },

  {
    id: 3,
    src: Room3,
    overlay: 'view-3',
    description: 'Description-3',
  },
  {
    id: 4,
    src: Room4,
    overlay: 'view-4',
    description: 'description-4',
  },
  {
    id: 5,
    src: Room5,
    overlay: 'view-5',
    description: 'description-5',
  },
];