import { motion } from 'framer-motion';
import Room2 from '@/assets/images/Room_2.jpg';
import Room3 from '@/assets/images/Room_3.jpg';
import Room4 from '@/assets/images/Room_4.jpg';
import Room5 from '@/assets/images/Room_6.jpg';
import { GalleryCardType } from '@/types.ts';
import { GalleryItem } from 'components/Sections/Gallery/GalleryItem.tsx';
import { Section, SectionHeader } from 'components/Section';
import { useLang } from '@/lang';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Gallery() {
  const { getTranslation } = useLang();

  return (
    <Section id="Rooms" className="px-[5%] max-w-7xl mx-auto sm:px-6 md:px-12 py-10">
      <SectionHeader text={getTranslation('sections.rooms.title')!} className={'md:text-5xl mb-4'} />

      <div className="columns-1 sm:columns-2 gap-4 space-y-4">
        {cards.map(card => (
          <motion.div
            key={card.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // animate once when 30% visible
          >
            <GalleryItem item={card} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const cards: Array<GalleryCardType> = [
  {
    id: 1,
    src: Room2,
    title: 'title-2',
    description: 'description-2',
  },
  {
    id: 2,
    src: Room3,
    title: 'title-3',
    description: 'description-3',
  },
  {
    id: 3,
    src: Room4,
    title: 'title-4',
    description: 'description-4',
  },
  {
    id: 4,
    src: Room5,
    title: 'title-5',
    description: 'description-5',
  },
];
