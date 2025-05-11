import { Gallery, Hero, Location, Menus, Pado, TaxiModal } from '@/components';
import { CheckingInOut } from 'components/Sections/CheckingInOut';

export function Homepage() {
  return (
    <>
      <Hero />
      <Pado />
      <Gallery />
      <CheckingInOut />
      <Menus />
      <Location />
      <TaxiModal />
    </>
  );
}
