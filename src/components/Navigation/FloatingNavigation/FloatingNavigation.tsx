import { AnimatePresence, MotionValue, motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { cn } from '@/utils';
import { CiMenuBurger } from 'react-icons/ci';
import { FiCoffee, FiMail } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import { useModal } from '@/hooks';
import { FaTaxi } from 'react-icons/fa';
import { TiInfoLargeOutline } from 'react-icons/ti';

export const FloatingNavigation = ({ desktopClassName, mobileClassName }: { desktopClassName?: string; mobileClassName?: string }) => {
  const { setOpen } = useModal();

  const openTaxiModal = useCallback(() => setOpen(true), [setOpen]);

  const items = useMemo(
    () => [
      { title: 'Checking In / Out', icon: <TiInfoLargeOutline className={'text-2xl text-secondary'} />, href: '#Rules' },
      { title: 'Breakfast', icon: <FiCoffee className={'text-lg text-secondary'} />, href: '#Breakfast' },
      { title: 'Contact', icon: <FiMail className={'text-md text-secondary'} />, href: '#Contact' },
      { title: 'Location', icon: <FaLocationDot className={'text-lg text-secondary'} />, href: '#Location' },
      { title: 'Taxi', icon: <FaTaxi className={'text-md text-secondary'} />, action: openTaxiModal },
    ],
    [openTaxiModal]
  );

  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: ReactNode; href?: string; action?: () => void }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn('fixed bottom-4 right-5 block md:hidden', className)}>
      <AnimatePresence>
        {open && (
          <motion.div layoutId="nav" className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2">
            {items.map((item, idx) =>
              item.action ? (
                <motion.button
                  onClick={item.action}
                  className="cursor-pointer relative flex aspect-square items-center justify-center rounded-full bg-highlight"
                >
                  {item.icon}
                </motion.button>
              ) : (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <a
                    href={item.href}
                    key={item.title}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                  >
                    <div className="h-4 w-4">{item.icon}</div>
                  </a>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <CiMenuBurger />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: ReactNode; href?: string; action?: () => void }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={e => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        'fixed top-10 left-[50%] -translate-x-1/2 min-w-md mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-chill px-4 pb-3 md:flex justify-between',
        className
      )}
    >
      {items.map(item => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  action,
}: {
  mouseX: MotionValue;
  title: string;
  icon: ReactNode;
  href?: string;
  action?: () => void;
}) {
  const ref = useRef<HTMLDivElement | HTMLButtonElement>(null);

  const distance = useTransform(mouseX, val => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return action ? (
    <motion.button
      // @ts-expect-error multiple ref types
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={action}
      className="cursor-pointer relative flex aspect-square items-center justify-center rounded-full bg-highlight"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 2, x: '-50%' }}
            className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
        {icon}
      </motion.div>
    </motion.button>
  ) : (
    <a href={href}>
      <motion.div
        // @ts-expect-error multiple ref types
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-highlight"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
