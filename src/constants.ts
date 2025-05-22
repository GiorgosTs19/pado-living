import Menus from 'assets/Menus.json';
import FriedEgg from 'assets/images/breakfast/fried-egg.png';
import Croissant from 'assets/images/breakfast/croissant.png';

type menuItemType = {
  name: string;
  description: string;
};

export const EARLIEST_BREAKFAST_SERVING_TIME = '08:00';
export const LATEST_BREAKFAST_SERVING_TIME = '11:00';

export const menus: Record<'A' | 'B', { title: string; items: menuItemType[]; imageSrc?: string }> = {
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
