import { useLang } from '@/lang';
import { useBreakfastMenuStatus } from '@/hooks';
import { MenuCard } from 'components/MenuCard';

export function Menus() {
  const { getTranslation } = useLang();

  const { isOrderingOpen: canOrder, remainingTime, availableMenu: tomorrowMenu, todayMenu, nextAvailableDay } = useBreakfastMenuStatus();

  return (
    <section className={'px-[5%] py-10 bg-primary/60'} id={'Breakfast'}>
      <h2 className={'text-start text-4xl font-bold mb-10 ps-3 '}> {getTranslation(`sections.menus.title`)}</h2>

      <div className="grid lg:grid-cols-2 gap-8 ">
        <div className="text-base md:text-lg lg:text-xl text-secondary flex flex-col justify-center bg-white rounded-2xl shadow-md">
          <div className="p-6 md:p-8 lg:px-10">
            <p className="mb-3">{getTranslation('sections.menus.rules.orderCutoff')}</p>
            <p dangerouslySetInnerHTML={{ __html: getTranslation('sections.menus.rules.cutoffTime')! }} />
          </div>

          <div className="p-6 md:p-8 lg:px-10 pt-0">
            <p dangerouslySetInnerHTML={{ __html: getTranslation('sections.menus.rules.rotation')! }} />
          </div>

          <div className="p-6 md:p-8 lg:px-10 pt-0">
            <p dangerouslySetInnerHTML={{ __html: getTranslation('sections.menus.rules.packaging')! }} />
          </div>

          <div className="p-6 md:p-8 lg:px-10 pt-0">
            <p>{getTranslation('sections.menus.rules.thanks')}</p>
          </div>
        </div>

        <div className={'flex flex-col justify-between gap-10'}>
          <MenuCard label={`Order for ${nextAvailableDay}`} menuId={tomorrowMenu} isOrderable={canOrder} remainingTime={remainingTime} />
          <MenuCard label="Served Today" menuId={todayMenu} isOrderable={false} />
        </div>
      </div>
    </section>
  );
}
