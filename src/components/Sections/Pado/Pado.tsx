import Room2 from '@/assets/images/Room_2.jpg';
import { useLang } from '@/lang';

// export function Pado() {
//   const { getTranslation } = useLang();
//   return (
//     <section className="relative w-full bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
//       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
//         {/* Text Content */}
//         <div className="flex flex-col gap-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight font-serif ">{}</h1>
//           <p className="text-lg text-muted font-serif ">{getTranslation('sections.pado.description')}</p>
//         </div>
//
//         {/* Hero Image */}
//         <div className="w-full min-h-42 md:h-[400px] relative rounded-2xl overflow-hidden shadow-md">
//           <img src={Room2} alt={'Cozy Mediterranean Airbnb'} className={'object-cover object-center'} />
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from 'motion/react';

export function Pado() {
  const { getTranslation } = useLang();
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center font-serif text-secondary">
      <div className="px-4 py-5 md:py-30">
        <h1 className="font-serif relative text-center px-4 text-5xl sm:text-7xl lg:text-9xl font-bold text-shadow-lg select-none h-fit min-h-[50px] lg:min-h-[150px] ">
          {getTranslation('sections.hero.title')}
        </h1>
        <h2 className="text-2xl lg:text-6xl font-serif font-bold tracking-tight text-center mt-3">Where Design Meets Comfort</h2>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative mx-auto max-w-xl py-4 text-center text-lg font-normal "
        >
          {getTranslation('sections.pado.description')}
        </motion.p>
        {/*<motion.div*/}
        {/*  initial={{*/}
        {/*    opacity: 0,*/}
        {/*  }}*/}
        {/*  animate={{*/}
        {/*    opacity: 1,*/}
        {/*  }}*/}
        {/*  transition={{*/}
        {/*    duration: 0.3,*/}
        {/*    delay: 1,*/}
        {/*  }}*/}
        {/*  className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"*/}
        {/*>*/}
        {/*  <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">*/}
        {/*    Explore Now*/}
        {/*  </button>*/}
        {/*  <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">*/}
        {/*    Contact Support*/}
        {/*  </button>*/}
        {/*</motion.div>*/}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative mt-5 "
        >
          <div className="w-full overflow-hidden rounded-xl ">
            <img src={Room2} alt="Hero" className="aspect-[16/9] h-auto w-full object-cover" height={1000} width={1000} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
