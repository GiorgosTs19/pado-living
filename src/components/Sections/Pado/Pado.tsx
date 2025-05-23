import { useLang } from '@/lang';

import { motion } from 'framer-motion';
import { FaArrowDownLong } from 'react-icons/fa6';
import { NAVIGATION } from '@/constants.tsx';

export function Pado() {
  const { getTranslation } = useLang();

  return (
    <div className="h-[90vh] flex flex-col items-center justify-center px-6 text-center text-secondary font-serif">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight"
      >
        {getTranslation('sections.hero.title')}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 text-xl sm:text-2xl italic"
      >
        {getTranslation('sections.hero.description')}
      </motion.h2>

      <a href={NAVIGATION.ROOMS.anchor} className="mt-36 text-2xl sm:text-3xl font-bold text-secondary mx-auto border border-border rounded-full p-3">
        <FaArrowDownLong />
      </a>
    </div>
  );
}
