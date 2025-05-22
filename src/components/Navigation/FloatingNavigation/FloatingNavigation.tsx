import { motion } from 'motion/react';
import { ReactNode, useCallback, useMemo } from 'react';
import { cn } from '@/utils';
import { FiCoffee } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import { useModal } from '@/hooks';
import { FaTaxi } from 'react-icons/fa';
import { TiInfoLargeOutline } from 'react-icons/ti';

export const FloatingNavigation = ({ desktopClassName, mobileClassName }: { desktopClassName?: string; mobileClassName?: string }) => {
  const { setOpen } = useModal();

  const openTaxiModal = useCallback(() => setOpen(true), [setOpen]);

  const items = useMemo(
    () => [
      { title: 'Info', icon: <TiInfoLargeOutline className={'text-2xl text-primary lg:text-secondary'} />, href: '#CheckInOut' },
      { title: 'Breakfast', icon: <FiCoffee className={'text-lg text-primary lg:text-secondary'} />, href: '#Breakfast' },
      { title: 'Location', icon: <FaLocationDot className={'text-lg text-primary lg:text-secondary'} />, href: '#Location' },
      { title: 'Taxi', icon: <FaTaxi className={'text-[1.2rem] text-primary lg:text-secondary'} />, action: openTaxiModal },
    ],
    [openTaxiModal]
  );

  return (
    <>
      {/* Mobile Bottom Floating Dock */}
      <FloatingDock
        items={items}
        className={cn(
          'z-10 fixed bottom-0 left-0 right-0 bg-chill px-4 py-3 flex justify-around items-center h-16 rounded-t-2xl lg:hidden',
          mobileClassName
        )}
      />

      {/* Desktop Sticky Top Navigation */}
      <FloatingDock
        items={items}
        className={cn(
          'hidden lg:flex sticky top-4 left-[50%] transform justify-around -translate-x-1/2 bg-semiTransparent rounded-full max-w-lg mx-auto px-6 py-2 shadow-md gap-8 z-50',
          desktopClassName
        )}
        labelsOnly
      />
    </>
  );
};

const FloatingDock = ({
  items,
  className,
  labelsOnly = false,
}: {
  items: { title: string; icon: ReactNode; href?: string; action?: () => void }[];
  className?: string;
  labelsOnly?: boolean;
}) => {
  return (
    <nav className={className} aria-label="Floating Navigation">
      {items.map(item => (
        <IconContainer key={item.title} {...item} labelsOnly={labelsOnly} />
      ))}
    </nav>
  );
};

function IconContainer({
  icon,
  href,
  action,
  labelsOnly = false,
  title,
}: {
  icon: ReactNode;
  href?: string;
  action?: () => void;
  labelsOnly?: boolean;
  title: string;
}) {
  const content = (
    <motion.div
      className={cn(
        'flex flex-col items-center justify-center cursor-pointer rounded-full p-2 transition-colors duration-200',
        labelsOnly ? 'hover:bg-primary ' : ''
      )}
      title={labelsOnly ? undefined : undefined}
    >
      <div className={cn(labelsOnly ? 'hidden' : 'text-2xl')}>{icon}</div>
      {labelsOnly && <span className="mt-1 text-xs font-semibold select-none">{(action ? title : '') + (href ? itemTitleFromHref(href) : '')}</span>}
    </motion.div>
  );

  if (action) {
    return (
      <motion.button onClick={action} type="button" aria-label="action button">
        {content}
      </motion.button>
    );
  }

  if (href) {
    return (
      <a href={href} aria-label={`Navigate to ${itemTitleFromHref(href)}`}>
        {content}
      </a>
    );
  }

  return content;
}

function itemTitleFromHref(href: string) {
  // Map href to a simple label for the desktop nav label (can be customized)
  if (href === '#CheckInOut') return 'Info';
  if (href === '#Breakfast') return 'Breakfast';
  if (href === '#Location') return 'Location';
  return '';
}
