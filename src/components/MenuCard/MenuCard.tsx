import Menus from '@/assets/Menus.json';
import Croissant from '@/assets/images/breakfast/croissant.png';
import FriedEgg from '@/assets/images/breakfast/fried-egg.png';
import { cn, replaceString } from '@/utils';
import { BsClock } from 'react-icons/bs';
import { useLang } from '@/lang';

type MenuCardProps = {
  label: string;
  menuId: 'A' | 'B';
  isOrderable?: boolean;
  remainingTime?: string;
  onOrder?: () => void;
};

const menus: Record<'A' | 'B', { title: string; items: string[]; imageSrc?: string }> = {
  A: {
    title: Menus.A.title,
    items: Menus.A.items,
    imageSrc: FriedEgg,
  },
  B: {
    title: Menus.B.title,
    items: Menus.B.items,
    imageSrc: Croissant,
  },
};

export function MenuCard({ label, menuId, isOrderable = false, remainingTime, onOrder }: MenuCardProps) {
  const menu = menus[menuId];
  const { getTranslation } = useLang();

  return (
    <div className={cn('rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl p-5 flex flex-col')}>
      <div className={'flex flex-col items-center gap-y-5 sm:gap-y-0 sm:flex-row sm:justify-between'}>
        <div
          className={`rounded-b-xl ${isOrderable ? 'bg-green-700' : 'bg-orange-600'}  py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-36 text-center`}
        >
          {label}
        </div>
        {remainingTime && (
          <div className="flex items-center text-sm text-gray-500 gap-1">
            <BsClock className={'text-secondary text-2xl'} />
            <span>{replaceString(getTranslation('sections.menus.orderWithin')!, { time: remainingTime })}</span>
          </div>
        )}
      </div>
      {/*<div className="relative h-56 overflow-hidden">*/}
      {/*  <img src={menu.imageSrc} alt={menu.title} className="h-full w-full object-contain transition-transform duration-500 hover:scale-105" />*/}
      {/*</div>*/}

      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{menu.title}</h2>
        <ul className="space-y-3 mb-6">
          {menu.items.map((item, index) => (
            <li key={index} className="border-b border-gray-100 pb-2 last:border-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800">{item}</h3>
                  {/*<p className="text-sm text-gray-500">{item.description}</p>*/}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {isOrderable ? (
        <button
          onClick={onOrder}
          className="w-36 max-w-md rounded-xl bg-primary text-secondary text-sm md:text-base font-medium py-2 hover:bg-subtitle transition mx-auto cursor-pointer "
        >
          Order Now
        </button>
      ) : (
        <div className="text-center text-xs md:text-sm text-secondary font-semibold h-full">Not available for order</div>
      )}
    </div>
  );
}
