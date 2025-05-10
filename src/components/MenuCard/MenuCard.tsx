import Menus from '@/assets/Menus.json';

type MenuCardProps = {
  label: string;
  menuId: 'A' | 'B';
  isOrderable?: boolean;
  remainingTime?: string;
};

const menus: Record<'A' | 'B', { title: string; items: string[] }> = {
  A: {
    title: Menus.A.title,
    items: Menus.A.items,
  },
  B: {
    title: Menus.B.title,
    items: Menus.B.items,
  },
};

export function MenuCard({ label, menuId, isOrderable = false, remainingTime }: MenuCardProps) {
  const menu = menus[menuId];

  return (
    <div className="rounded-2xl p-6 transition hover:border-primary bg-highlight font-serif flex flex-col">
      {/* Top Section */}
      <div className="flex mb-5 border-b-2 pb-3 items-center justify-between">
          <span className="text-xs md:text-base xl:text-xl text-secondary font-medium">{label}</span>
          {isOrderable && remainingTime && (
            <span className="text-xs md:text-sm text-secondary">{remainingTime} left</span>
          )}
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-secondary mb-4">
        {menu.title}
      </h2>

      {/* Menu Items */}
      <div className="flex flex-wrap gap-4 mb-5">
        {menu.items.map((item, i) => (
          <span key={i} className="text-sm md:text-base xl:text-lg text-chill">
            {item}
          </span>
        ))}
      </div>

      {/* Action */}
      {isOrderable ? (

        <button className="w-full max-w-md rounded-xl bg-primary text-secondary text-sm md:text-base font-medium py-2 hover:bg-subtitle transition mx-auto cursor-pointer">
          Order Now
        </button>

      ) : (
        <div className="text-center text-xs md:text-sm text-secondary font-semibold justify-self-end h-full flex items-center justify-center">
          Not available for order
        </div>
      )}
    </div>
  );
}
