import { Gallery, Hero, Location, Menus, Pado, TaxiModal } from '@/components';

export function Homepage() {
  return (
    <>
      <Hero />
      <Pado />
      <Gallery />
      {/*<Amenities />*/}
      <Menus />
      <Location />
      <TaxiModal />
    </>
  );
}
