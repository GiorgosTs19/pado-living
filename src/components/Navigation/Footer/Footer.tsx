import { FiMail, FiPhone, FiCoffee } from 'react-icons/fi';
import { useCallback, useMemo } from 'react';
import { useLang } from '@/lang';
import { useModal } from '@/hooks';
import { NAVIGATION } from '@/constants.tsx';
import { LuGalleryVerticalEnd } from 'react-icons/lu';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { BsClipboard2Check } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { FaTaxi } from 'react-icons/fa';
import { motion } from 'motion/react';
import { cn } from '@/utils';
import { TbBrandBooking } from 'react-icons/tb';

export function Footer() {
  const { getTranslation } = useLang();

  const { setOpen } = useModal();

  const openTaxiModal = useCallback(() => setOpen(true), [setOpen]);

  const items = useMemo(
    () => [
      {
        title: NAVIGATION.ROOMS.title,
        icon: <LuGalleryVerticalEnd className={'text-xl text-secondary'} />,
        href: NAVIGATION.ROOMS.anchor,
      },
      {
        title: NAVIGATION.INFO.title,
        icon: <TiInfoLargeOutline className={'text-2xl text-secondary'} />,
        href: NAVIGATION.INFO.anchor,
      },
      { title: NAVIGATION.MENUS.title, icon: <FiCoffee className={'text-lg text-secondary'} />, href: NAVIGATION.MENUS.anchor },
      {
        title: NAVIGATION.RULES.title,
        icon: <BsClipboard2Check className={'text-lg text-secondary'} />,
        href: NAVIGATION.RULES.anchor,
      },
      {
        title: NAVIGATION.LOCATION.title,
        icon: <FaLocationDot className={'text-lg text-secondary'} />,
        href: NAVIGATION.LOCATION.anchor,
      },
      { title: NAVIGATION.TAXI.title, icon: <FaTaxi className={'text-[1.2rem] text-secondary'} />, action: openTaxiModal },
    ],
    [openTaxiModal]
  );

  const translate = useCallback((text: string) => getTranslation(`sections.footer.${text}`), [getTranslation]);
  return (
    <footer className="bg-primary/70 text-sm text-gray-700 mt-20 px-[2%] lg:px-0 pt-10 pb-32 lg:pb-10 rounded-t-3xl lg:rounded-t-none">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 px-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">{translate('place')}</h2>
          <p className="mt-2 italic text-[15px] text-gray-600">{translate('description')}</p>
          <div className={'flex gap-4 mt-3'}>
            <TbBrandBooking className={'text-xl text-secondary'} />
            <a href={translate('bookingLink')} target="_blank" className="underline hover:text-gray-800 underline-offset-5">
              {translate('findUsOnBooking')}
            </a>
          </div>
          <div className="mt-6 space-y-5 text-[15px]">
            <p className="font-medium">{translate('host')}</p>
            <p className="flex items-center gap-2">
              <FiMail className="text-gray-500" />
              <a href={translate('email')} className="underline hover:text-gray-800 underline-offset-5">
                {translate('email')}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FiPhone className="text-gray-500" />
              <a href={translate('phone')} target="_blank" className="underline hover:text-gray-800 underline-offset-5">
                {translate('whatsUp')}
              </a>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Explore</h3>
          <nav className="grid grid-cols-2 space-y-2 text-[15px]">
            {items.map(item => {
              const content = (
                <motion.div
                  className={cn('w-full flex gap-3 items-center justify-between cursor-pointer rounded-full p-2 transition-colors duration-200')}
                  title={item.title}
                >
                  <div className={'text-2xl'}>{item.icon}</div>
                  <span className="mt-1 text-xs font-semibold select-none text-start w-full ">{item.title}</span>
                </motion.div>
              );

              if (item.action) {
                return (
                  <motion.button onClick={item.action} type="button" aria-label="action button">
                    {content}
                  </motion.button>
                );
              }

              if (item.href) {
                return (
                  <a href={item.href} aria-label={`Navigate to ${item.title}`}>
                    {content}
                  </a>
                );
              }

              return content;
            })}
          </nav>
        </div>

        <div className="flex flex-col justify-end text-left text-[15px] gap-5">
          <div>
            <p>
              <span className={'mr-1'}>{translate('websiteBy')}</span>
              <a
                href={translate('portfolioLink')}
                target="_blank"
                rel="noopener noreferrer"
                className={'underline hover:text-gray-800 underline-offset-5'}
              >
                {translate('developer')}
              </a>
            </p>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0">{translate('rightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}
