import { GalleryCardType } from '@/types.ts';
import { useLang } from '@/lang';

type Props = { item: GalleryCardType };

export function GalleryItem({ item }: Props) {
  const { getTranslation } = useLang();
  const { id, title, description, src } = item;
  const shouldReverse = id % 2 === 0;

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 w-full border-b-4 border-border`}>
      <img src={src} alt={title} className={`w-full order-1 object-cover object-center ${shouldReverse ? 'lg:order-1' : 'lg:order-none'}`} />
      <div
        className={`px-[5%] gap-y-[3rem] text-secondary min-h-64 bg-subtitle font-serif flex flex-col justify-center text-lg text-center order-0 ${shouldReverse ? 'lg:order-none' : 'lg:order-1'}`}
      >
        <h1 className={'text-3xl xl:text-6xl'}>{getTranslation(`sections.rooms.${title}`)}</h1>
        <p className={'text-xl xl:text-3xl '}>{getTranslation(`sections.rooms.${description}`)}</p>
      </div>
    </div>
  );
}
