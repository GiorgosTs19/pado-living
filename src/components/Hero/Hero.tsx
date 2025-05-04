export function Hero() {
  return (
    <section
      className={`relative hero-bg bg-cover bg-no-repeat bg-center h-dvh w-full flex items-center justify-center rounded-b-3xl`}
    >
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#E7E4DF] z-10 pointer-events-none rounded-b-3xl" />
      <div className="text-white text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold">Pado Living</h1>
        <p className="mt-4 text-lg sm:text-xl">Relax. Recharge. Repeat.</p>
      </div>
    </section>
  );
}
