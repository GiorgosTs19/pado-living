import { useLang } from '@/lang';
import { useBreakfastMenuStatus } from '@/hooks';
import { MenuCard } from 'components/MenuCard';
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Textarea } from '@/components/TextArea';
import { CiForkAndKnife } from 'react-icons/ci';
import { Section, SectionHeader } from 'components/Section';
import { EARLIEST_BREAKFAST_SERVING_TIME, LATEST_BREAKFAST_SERVING_TIME, menus, NAVIGATION } from '@/constants.tsx';
import { TimeInput } from 'components/TimeInput';
import { motion, Variants } from 'framer-motion';

const rulesListVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: 'beforeChildren',
    },
  },
};

const ruleItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const cardsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const formVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const BreakfastSection = () => {
  const { getTranslation } = useLang();
  const inputRef = useRef<HTMLInputElement>(null);
  const { isOrderingOpen: canOrder, remainingTime, availableMenu: tomorrowMenu, todayMenu, nextAvailableDay } = useBreakfastMenuStatus();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '8:00',
    guests: '1',
    dietaryRestrictions: false,
    restrictions: '',
    menu: menus[tomorrowMenu].title,
  });

  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    if (inputFocused) {
      const timeout = setTimeout(() => setInputFocused(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [inputFocused]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDietaryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setFormData(prev => ({
      ...prev,
      dietaryRestrictions: checked,
      restrictions: !checked ? '' : prev.restrictions,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Submission logic here
  };

  const onOrder = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Section id={NAVIGATION.MENUS.id}>
      <SectionHeader text={getTranslation(`sections.menus.title`)!} />

      {/* Rules Section */}
      <motion.div
        className="mt-6 space-y-4 max-w-2xl mx-auto text-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.ul className="space-y-3 text-gray-700" variants={rulesListVariants} initial="hidden" animate="visible">
          {[
            getTranslation('sections.menus.rules.servingPeriod'),
            getTranslation('sections.menus.rules.cutoffTime'),
            getTranslation('sections.menus.rules.packaging'),
            getTranslation('sections.menus.rules.dietaryRestrictions'),
          ].map((text, i) => (
            <motion.li key={i} className="flex items-start gap-2" variants={ruleItemVariants}>
              <svg
                className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    i === 0
                      ? 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      : i === 1
                        ? 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                        : i === 2
                          ? 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          : 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  }
                />
              </svg>
              {/* Using dangerouslySetInnerHTML since your translations contain HTML */}
              <span dangerouslySetInnerHTML={{ __html: text! }} />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Menu Cards + Good to Know */}
      <motion.div
        className="flex flex-col gap-6 lg:grid lg:grid-cols-2 md:gap-10 max-w-5xl mx-auto mt-10"
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={cardVariants}>
          <MenuCard
            label={`Order for ${nextAvailableDay}`}
            menuId={tomorrowMenu}
            isOrderable={canOrder}
            remainingTime={remainingTime}
            onOrder={onOrder}
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <MenuCard label="Served Today" menuId={todayMenu} isOrderable={false} />
        </motion.div>

        <motion.div
          className="md:col-span-2 mt-2 p-4 bg-primary/60 rounded-2xl w-full mx-auto flex flex-col gap-4 shadow-sm border border-primary/20"
          variants={cardVariants}
        >
          <h4 className="font-medium text-secondary mb-2">{getTranslation('sections.menus.rules.goodToKnowTitle')}</h4>
          <p className="text-sm text-gray-700">{getTranslation('sections.menus.rules.goodToKnow')}</p>
        </motion.div>
      </motion.div>

      {/* Form Section */}
      <motion.div
        className="p-6 md:p-8 mt-10 max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={formVariants}
      >
        <div className="flex items-center gap-2 mb-4">
          <CiForkAndKnife className="text-secondary text-4xl" />
          <h3 className="text-2xl font-semibold">Request Breakfast</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <input
                ref={inputRef}
                name="name"
                id="name"
                onFocus={() => setInputFocused(true)}
                onChange={handleChange}
                className={`${
                  inputFocused ? 'shadow-gray-400 shadow-md transition-all rounded-t-lg' : ''
                } block w-full max-w-xl bg-white border-b border-border p-2 text-sm active:outline-none focus:outline-none`}
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="menu">
                Menu <span className={'text-gray-600'}>(auto-selected)</span>
              </label>
              <input
                className="w-full block max-w-xl text-gray-600 border-b border-border p-2 text-sm active:outline-none focus:outline-none"
                value={formData.menu}
                type={'text'}
                id="menu"
                name="menu"
                disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                min={(() => {
                  const tomorrow = new Date();
                  tomorrow.setDate(tomorrow.getDate() + 2);
                  return tomorrow.toISOString().split('T')[0];
                })()}
                onChange={handleChange}
                className="block w-full max-w-xl bg-white border-b border-border p-2 text-sm active:outline-none focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="time">Time</label>
              <TimeInput
                value={formData.time}
                id="time"
                name="time"
                minTime={EARLIEST_BREAKFAST_SERVING_TIME}
                maxTime={LATEST_BREAKFAST_SERVING_TIME}
                onChange={handleChange}
                interval={15}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="dietary" checked={formData.dietaryRestrictions} onChange={handleDietaryChange} />
            <label htmlFor="dietary" className="font-normal">
              I have dietary restrictions
            </label>
          </div>

          {formData.dietaryRestrictions && (
            <div className="space-y-2">
              <label htmlFor="restrictions">Please specify</label>
              <Textarea
                id="restrictions"
                name="restrictions"
                onChange={handleChange}
                value={formData.restrictions}
                placeholder="Allergies, vegetarian, etc."
                rows={4}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={!canOrder}
            className={`w-full mt-4 bg-secondary text-white py-2 rounded-md ${
              !canOrder ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary-dark'
            }`}
          >
            Submit Request
          </button>
        </form>
      </motion.div>
    </Section>
  );
};
