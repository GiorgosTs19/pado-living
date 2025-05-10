import Room2 from '@/assets/images/Room_2.jpg';

export function Pado() {
  return (
    <section className="relative w-full bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">Welcome to Pado Living</h1>
          <p className="text-lg text-muted">
            Just a short walk from the beach, our freshly renovated rooms offer comfort, calm, and convenience in the heart of Faliraki.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full min-h-42 md:h-[400px] relative rounded-2xl overflow-hidden shadow-md">
          <img src={Room2} alt={'Cozy Mediterranean Airbnb'} className={'object-cover object-center'} />
          {/*<Image*/}
          {/*  src={heroImage}*/}
          {/*  alt="Cozy Mediterranean Airbnb"*/}
          {/*  fill*/}
          {/*  className="object-cover object-center"*/}
          {/*  priority*/}
          {/*/>*/}
        </div>
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
