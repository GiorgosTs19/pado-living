import { Gallery, Location, Menus, Pado, TaxiModal } from '@/components';
import { CheckingInOut } from 'components/Sections/CheckingInOut';

export function Homepage() {
  return (
    <>
      <Pado />
      <Gallery />
      <CheckingInOut />
      <Menus />
      <Location />
      <TaxiModal />
    </>
  );
}
