import { FaPhoneAlt } from 'react-icons/fa';
import Taxi from '@/assets/icons/taxi.svg';
import { useLang } from '@/lang';
import { AnimatePresence, motion } from 'motion/react';
import { IoCloseOutline } from 'react-icons/io5';
import { useModal } from '@/hooks';

export function TaxiModal() {
  const { getTranslation } = useLang();
  const { open, setOpen } = useModal();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="alert"
          className="select-none font-serif text-center mx-auto w-3/4 lg:max-w-lg rounded-lg border border-stone bg-highlight p-4 shadow-lg sm:p-6 lg:p-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100"
        >
          <div className="flex justify-between">
            <div className={'flex items-center gap-4'}>
              <span className="shrink-0 rounded-full bg-secondary p-2 text-white">
                <FaPhoneAlt className={'text-highlight h-6 w-6'} />
              </span>

              <p className="font-medium sm:text-lg text-secondary">{getTranslation('sections.location.taxi.title')}</p>
            </div>

            <IoCloseOutline
              className={'h-6 w-6 cursor-pointer border-2 rounded-full'}
              onClick={() => setOpen(false)}
              aria-label={'Close Taxi Modal'}
            />
          </div>
          <img src={Taxi} alt={'Taxi'} className={'h-16 w-16 md:h-20 md:w-20 mx-auto border-2 border-border rounded-full p-2'} />
          <p className="mt-4 text-gray-600">{getTranslation('sections.location.taxi.modalDescription')}</p>

          <div className="mt-6 flex gap-4 justify-center">
            <a href={`tel:${getTranslation('sections.location.taxi.vasilis.phone')}`} className="underline underline-offset-5">
              {getTranslation('sections.location.taxi.vasilis.name')}
            </a>
            <a href={`tel:${getTranslation('sections.location.taxi.thomas.phone')}`} className="underline underline-offset-5">
              {getTranslation('sections.location.taxi.thomas.name')}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
