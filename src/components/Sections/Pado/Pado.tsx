import { motion } from 'framer-motion';
import Room1 from '@/assets/images/Room_1.jpg';
import { useLang } from '@/lang';
import { SectionLink } from 'components/SectionLink';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export function Pado() {
  const { getTranslation } = useLang();

  return (
    <section className="px-[5%] pt-10 md:pt-10 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-16 lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
            viewport={{ amount: 0.35 }}
            className="flex mb-6 text-2xl gap-4 justify-center sm:justify-start"
          >
            <FaInstagram />
            <FaFacebook />
          </motion.div>
          <motion.pre
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            viewport={{ amount: 0.35 }}
            className={'w-full text-wrap xl:text-xl 2xl:text-2xl'}
          >
            {getTranslation('sections.pado.description')}
          </motion.pre>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
            className="mt-6 flex flex-wrap gap-4 md:mt-8 justify-between"
            viewport={{ amount: 0.35 }}
          >
            <SectionLink
              className={'block w-full border-e-2 hover xl:text-xl 2xl:text-2xl'}
              href={'#Rooms'}
              text={getTranslation('sections.pado.buttons.rooms')!}
            />
            <SectionLink
              className={'block w-full border-e-2 hover xl:text-xl 2xl:text-2xl'}
              href={'#Rooms'}
              text={getTranslation('sections.pado.buttons.breakfast')!}
            />
            <SectionLink
              className={'block w-full hover xl:text-xl 2xl:text-2xl'}
              href={'#Rooms'}
              text={getTranslation('sections.pado.buttons.contact')!}
            />
          </motion.div>
        </div>

        {/* Logo */}
        <motion.img
          initial={{ opacity: 0, y: '50%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
          width={100}
          height={100}
          src={Room1}
          alt={`Room Card`}
          className="h-full w-full rounded-lg object-cover object-top hidden lg:block"
          viewport={{ amount: 0.35 }}
        />
      </div>
    </section>
  );
}
