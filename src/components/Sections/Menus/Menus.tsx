import { useLang } from '@/lang';

export function Menus() {
  const { getTranslation } = useLang();

  return (
    <section className={'px-[5%] py-10 '} id={'Rooms'}>
      <h2
        className={'text-start text-3xl font-bold mb-10 ps-3 font-serif'}> {getTranslation(`sections.menus.title`)}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div
          className="relative backdrop-blur-md bg-semiTransparent ounded-2xl p-6 shadow-sm transition hover:shadow-lg rounded-lg">
          <div className="relative flex items-center gap-3 mb-4 w-full">
            <div className="text-xl">🥚</div>
            <h2 className="text-2xl font-semibold text-secondary)]">
              Classic Breakfast
            </h2>
            <div className={`rounded-4xl border-border ml-auto`}>
              Today's Menu
            </div>
          </div>
          <ul className="space-y-2 text-[var(--color-secondary)] text-base">
            <li
              className="pl-4 relative before:absolute before:left-0 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-border)]">Eggs
            </li>
            <li
              className="pl-4 relative before:absolute before:left-0 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-border)]">Toast
            </li>
            <li
              className="pl-4 relative before:absolute before:left-0 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-border)]">Butter
            </li>
            <li
              className="pl-4 relative before:absolute before:left-0 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-border)]">Jam
            </li>
            <li
              className="pl-4 relative before:absolute before:left-0 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-border)]">Fresh
              Juice
            </li>
            <li
              className="pl-4 relative before:absolute before:left-0 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-border)]">Coffee/Tea
            </li>
          </ul>
        </div>

        <div
          className="relative backdrop-blur-md bg-[var(--color-semiTransparent)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm transition hover:shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-xl">🥐</div>
            <h2 className="text-2xl font-semibold text-[var(--color-secondary)]">
              Continental Breakfast
            </h2>
          </div>
          <ul className="space-y-2 text-[var(--color-secondary)] text-base">
            <li
              className="pl-4 relative before:absolute before:left-0 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-border)]">Croissant
            </li>
            <li
              className="pl-4 relative before:absolute before:left-0 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-border)]">Yogurt
            </li>
            <li
              className="pl-4 relative before:absolute before:left-0 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-border)]">Granola
            </li>
            <li
              className="pl-4 relative before:absolute before:left-0 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-border)]">Fruit
            </li>
            <li
              className="pl-4 relative before:absolute before:left-0 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-border)]">Fresh
              Juice
            </li>
            <li
              className="pl-4 relative before:absolute before:left-0 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--color-border)]">Coffee/Tea
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}


const breakfastMenus = [
  {
    id: 1,
    title: "sections.menus.classicBreakfast.title",
    items: "sections.menus.classicBreakfast.items",
  },
  {
    id: 2,
    title: "sections.menus.continentalBreakfast.title",
    items: "sections.menus.continentalBreakfast.items",
  },
];