import { useLang } from '@/lang';
import { Section, SectionHeader } from 'components/Section';
import { motion } from 'framer-motion';
import { NAVIGATION } from '@/constants.tsx';
import { FaLock, FaWifi } from 'react-icons/fa';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function CheckingInOut() {
  const { getTranslation } = useLang();

  return (
    <Section id={NAVIGATION.INFO.id}>
      <SectionHeader text={getTranslation('sections.rules.title')!} />

      <div className="flex flex-col gap-8 text-base md:text-lg text-secondary w-full items-center">
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-3xl mx-auto"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-3">
            <h4 className="font-medium text-lg border-b pb-2">{getTranslation('sections.rules.checkin.title')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  <strong>{getTranslation('sections.rules.checkin.standardTime')}</strong>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{getTranslation('sections.rules.checkin.keypad')}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{getTranslation('sections.rules.checkin.earlyRequest')}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-lg border-b pb-2">{getTranslation('sections.rules.checkout.title')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  <strong>{getTranslation('sections.rules.checkout.standardTime')}</strong>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{getTranslation('sections.rules.checkout.lockedDoor')}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{getTranslation('sections.rules.checkout.lightsOff')}</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 p-5 bg-primary/10 rounded-2xl w-full max-w-3xl mx-auto flex flex-col gap-4 shadow-sm border border-primary/20"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title */}
          <div>
            <h4 className="text-lg font-semibold text-secondary">{getTranslation('sections.rules.wifi.title')}</h4>
            <p className="text-sm text-secondary/70 mt-1">{getTranslation('sections.rules.wifi.description')}</p>
          </div>

          {/* Wi-Fi Name */}
          <div className="flex items-center gap-3 text-gray-800">
            <FaWifi className="text-primary text-lg" />
            <span className="text-sm lg:text-base font-medium">{getTranslation('sections.rules.wifi.name')}</span>
          </div>

          {/* Wi-Fi Password */}
          <div className="flex items-center gap-3 text-gray-800">
            <FaLock className="text-primary text-base" />
            <span className="text-sm lg:text-base font-mono">{getTranslation('sections.rules.wifi.password')}</span>
          </div>
        </motion.div>
        <motion.div
          className="mt-6 p-4 bg-primary/60 rounded-2xl w-full max-w-3xl mx-auto flex flex-col gap-4 shadow-sm border border-primary/20"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className="font-medium text-secondary mb-2">{getTranslation('sections.rules.note.title')}</h4>
          <p className="text-sm lg:text-base">{getTranslation('sections.rules.note.content1')}</p>
          <p className="text-sm">{getTranslation('sections.rules.note.content2')}</p>
        </motion.div>
      </div>
    </Section>
  );
}
