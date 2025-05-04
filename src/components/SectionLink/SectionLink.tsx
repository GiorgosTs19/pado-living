import { clsx } from 'clsx';

export function SectionLink({
  className,
  text,
  href,
}: {
  className: string;
  text: string;
  href: string;
}) {
  return (
    <div className={clsx('relative group flex-grow')}>
      <a href={href} className={className}>
        {text}
      </a>
      <div
        className={`absolute -bottom-1 left-0 h-[2px] bg-secondary transition-all duration-500 ease-in-out w-0 group-hover:w-1/3`}
      />
    </div>
  );
}
