import { BreakfastSection, Footer, Gallery, Location, Pado, Rules, TaxiModal } from '@/components';
import { CheckingInOut } from 'components/Sections/CheckingInOut';

export function Homepage() {
  return (
    <>
      <Pado />
      <Gallery />
      <CheckingInOut />
      <BreakfastSection />
      <Rules />
      <Location />
      <TaxiModal />
      <Footer />
    </>
  );
}
