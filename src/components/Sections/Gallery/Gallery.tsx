import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLang } from '@/lang';
import Room1 from '@/assets/images/Room_1.jpg';
import Room2 from '@/assets/images/Room_2.jpg';
import Room3 from '@/assets/images/Room_3.jpg';
import Room4 from '@/assets/images/Room_4.jpg';

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
    <section className={'px-[5%] py-10'} id={'Rooms'}>
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
          <div className="fixed inset-0 grid place-items-center z-[100]">
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
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.id}`}
              className="w-full max-w-[750px] h-vdh md:h-fit md:max-h-[90%] flex-col bg-transparent sm:rounded-3xl overflow-hidden flex items-center px-[5%]"
            >
              <img
                src={active.src}
                alt={`${active.id}`}
                className="w-full rounded-lg object-contain object-top"
              />
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul
        className={`max-w-2xl xl:max-w-full mx-auto w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-start gap-4 ${active ? 'blur-lg' : ''}`}
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
                  'absolute w-full h-full flex items-center justify-center z-10 group-hover:hidden'
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
                  width={100}
                  height={100}
                  src={card.src}
                  alt={`${card.id}`}
                  className="h-60 w-full rounded-lg object-cover object-top"
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
    overlay: 'View-1',
  },
  {
    id: 2,
    src: Room2,
    overlay: 'View-2',
  },

  {
    id: 3,
    src: Room3,
    overlay: 'View-3',
  },
  {
    id: 4,
    src: Room4,
    overlay: 'View-4',
  },
];
