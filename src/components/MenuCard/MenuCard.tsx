import Menus from '@/assets/Menus.json';

type MenuCardProps = {
  label: string;
  menuId: 'A' | 'B';
  isOrderable?: boolean;
  remainingTime?: string;
};

const menus: Record<'A' | 'B', { title: string; items: string[]; imageSrc?: string }> = {
  A: {
    title: Menus.A.title,
    items: Menus.A.items,
    imageSrc: Menus.A.imageSrc,
  },
  B: {
    title: Menus.B.title,
    items: Menus.B.items,
    imageSrc: Menus.B.imageSrc,
  },
};

export function MenuCard({ label, menuId, isOrderable = false, remainingTime }: MenuCardProps) {
  const menu = menus[menuId];

  return (
    <div className="relative flex flex-col md:flex-row bg-white shadow-sm border border-slate-200 rounded-lg w-full h-full">
      <div className="relative p-2.5 md:w-2/6 shrink-0 overflow-hidden flex items-center justify-center">
        <img src={menu.imageSrc} alt={menu.title} className=" object-cover object-center rounded-full h-32 w-32 z-30" />
      </div>

      <div className="p-6 flex flex-col md:w-4/6">
        <div className="flex mb-5 border-b-2 pb-3 items-center justify-between">
          <div className="rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-36 text-center">
            {label}
          </div>
          <span className="text-xs md:text-base xl:text-xl text-secondary font-medium"></span>
          {isOrderable && remainingTime && <span className="text-xs md:text-sm text-secondary">{remainingTime} left</span>}
        </div>
        <h4 className="mb-2 text-slate-800 text-xl font-semibold">{menu.title}</h4>
        <div className="flex flex-wrap gap-4 mb-5">
          {menu.items.map((item, i) => (
            <span key={i} className="text-sm md:text-base xl:text-lg text-chill">
              {item}
            </span>
          ))}
        </div>
        {isOrderable ? (
          <button className="w-36 max-w-md rounded-xl bg-primary text-secondary text-sm md:text-base font-medium py-2 hover:bg-subtitle transition mx-auto cursor-pointer">
            Order Now
          </button>
        ) : (
          <div className="text-center text-xs md:text-sm text-secondary font-semibold justify-self-end h-full flex items-center justify-center">
            Not available for order
          </div>
        )}
      </div>
    </div>
  );
}
