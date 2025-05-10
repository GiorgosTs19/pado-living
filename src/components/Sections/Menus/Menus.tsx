import { useLang } from '@/lang';
import { useBreakfastMenuStatus } from '@/hooks';
import { MenuCard } from 'components/MenuCard';

export function Menus() {
  const { getTranslation } = useLang();

  const { isOrderingOpen: canOrder, cutoffTime, remainingTime, availableMenu: tomorrowMenu, todayMenu, nextAvailableDay } = useBreakfastMenuStatus();

  console.log(canOrder, cutoffTime, remainingTime, tomorrowMenu, todayMenu, nextAvailableDay);

  return (
    <section className={'px-[5%] py-10'} id={'Breakfast'}>
      <h2 className={'text-start text-3xl font-bold mb-10 ps-3 font-serif'}> {getTranslation(`sections.menus.title`)}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <>
          <MenuCard label={`Order for ${nextAvailableDay}`} menuId={tomorrowMenu} isOrderable={canOrder} remainingTime={remainingTime} />
          <MenuCard label="Served Today" menuId={todayMenu} isOrderable={false} />
        </>
      </div>
    </section>
  );
}
