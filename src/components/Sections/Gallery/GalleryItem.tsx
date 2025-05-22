import { GalleryCardType } from '@/types.ts';
import { useLang } from '@/lang';

type Props = { item: GalleryCardType };

export function GalleryItem({ item }: Props) {
  const { getTranslation } = useLang();
  const { title, description, src } = item;

  return (
    <div className="relative w-full mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-md group">
      <img src={src} alt={title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
        <h2 className="text-2xl font-semibold">{getTranslation(`sections.rooms.${title}`)}</h2>
        <p className="text-sm mt-2">{getTranslation(`sections.rooms.${description}`)}</p>
      </div>
    </div>
  );
}
