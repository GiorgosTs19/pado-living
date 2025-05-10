import { motion } from 'framer-motion';
import Room1 from '@/assets/images/Room_1.jpg';
import { useLang } from '@/lang';
export function Pado() {
  const { getTranslation } = useLang();

  return (
    <section className="px-[5%] py-10 md:py-10 lg:py-24">
      <div className="gap-x-20 gap-y-12 md:gap-y-16 lg:items-center">
        <motion.pre
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          viewport={{ amount: 0.35 }}
          className={'w-full text-wrap xl:text-xl 2xl:text-2xl text-center font-serif'}
        >
          {getTranslation('sections.pado.description')}
        </motion.pre>

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

// <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
//   viewport={{ amount: 0.35 }}
//   className="flex mb-6 text-2xl gap-4 justify-center sm:justify-start"
// >
//   <FaInstagram />
//   <FaFacebook />
// </motion.div>
