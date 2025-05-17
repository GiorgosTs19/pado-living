import { useState, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

type CollapsibleProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  locked?: boolean;
};

export function Collapsible({ title, children, defaultOpen = false, locked = false }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(prev => (locked ? prev : !prev))}
        className={`w-full flex items-center justify-between px-4 py-3 font-semibold bg-chill ${!locked ? 'hover:bg-chill/80' : ''} transition border-0`}
      >
        <span>{title}</span>
        {!locked && (
          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <FaChevronDown size={20} />
          </motion.span>
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto', opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
