import { FaPhoneAlt } from 'react-icons/fa';
import Taxi from '@/assets/icons/taxi.svg';
import { useLang } from '@/lang';
import { AnimatePresence, motion } from 'framer-motion';
import { IoCloseOutline } from 'react-icons/io5';
import { useModal } from '@/hooks';

export function TaxiModal() {
  const { getTranslation } = useLang();
  const { open, setOpen } = useModal();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-white/30 backdrop-blur-sm bg-opacity-40 z-40"
            onClick={() => {
              setOpen(false);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            role="alert"
            className="fixed top-1/2 left-1/2 z-50 w-11/12 max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-highlight p-6 shadow-lg font-serif text-center select-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="shrink-0 rounded-full bg-secondary p-2 text-white">
                  <FaPhoneAlt className="text-highlight h-6 w-6" />
                </span>
                <p className="font-medium text-secondary sm:text-lg">{getTranslation('sections.location.taxi.title')}</p>
              </div>

              <IoCloseOutline className="h-6 w-6 cursor-pointer border-2 rounded-full" onClick={() => setOpen(false)} aria-label="Close Taxi Modal" />
            </div>

            <img src={Taxi} alt="Taxi" className="mx-auto mt-6 h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-border p-2" />

            <p className="mt-4 text-gray-600">{getTranslation('sections.location.taxi.modalDescription')}</p>

            <div className="mt-6 flex justify-center gap-4">
              <a href={`tel:${getTranslation('sections.location.taxi.vasilis.phone')}`} className="underline underline-offset-4">
                {getTranslation('sections.location.taxi.vasilis.name')}
              </a>
              <a href={`tel:${getTranslation('sections.location.taxi.thomas.phone')}`} className="underline underline-offset-4">
                {getTranslation('sections.location.taxi.thomas.name')}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
