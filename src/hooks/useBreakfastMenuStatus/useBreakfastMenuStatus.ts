import { useEffect, useState, useMemo } from 'react';

const CUTOFF_HOUR = 20;
const INTERVAL_MS = 60_000;

function getCutoffFor(date: Date): Date {
  const cut = new Date(date);
  cut.setHours(CUTOFF_HOUR, 0, 0, 0);
  return cut;
}

function offsetDays(base: Date, days: number): Date {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  return d;
}

function formatRemaining(ms: number): string {
  if (ms <= 0) return '0h 0m';
  const totalMins = Math.floor(ms / 60_000);
  return `${Math.floor(totalMins / 60)}h ${totalMins % 60}m`;
}

type BreakfastMenuStatus = {
  isOrderingOpen: boolean;
  cutoffTime: Date;
  remainingTime: string;
  todayMenu: 'A' | 'B';
  availableMenu: 'A' | 'B';
  nextAvailableDay: string;
};

export function useBreakfastMenuStatus(): BreakfastMenuStatus {
  // 1) keep “now” ticking every minute
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  // 2) compute today’s cutoff and tomorrow’s cutoff
  const todayCutoff = useMemo(() => getCutoffFor(now), [now]);
  const tomorrowCutoff = useMemo(() => getCutoffFor(offsetDays(now, 1)), [now]);

  // 3) pick the “next cutoff” based on current time
  const beforeCutoff = now < todayCutoff;
  const nextCutoff = beforeCutoff ? todayCutoff : tomorrowCutoff;

  // 4) compute remaining time until that cutoff
  const remainingTime = useMemo(() => formatRemaining(nextCutoff.getTime() - now.getTime()), [now, nextCutoff]);

  // 5) determine which day you can order for:
  //    – before cutoff → tomorrow
  //    – after cutoff → day after tomorrow
  const daysAhead = beforeCutoff ? 1 : 2;
  const nextDate = useMemo(() => offsetDays(now, daysAhead), [now, daysAhead]);

  // 6) menus
  const todayMenu = useMemo(() => getMenuForDate(now), [now]);
  const availableMenu = useMemo(() => getMenuForDate(nextDate), [nextDate]);

  return {
    isOrderingOpen: beforeCutoff,
    cutoffTime: nextCutoff,
    remainingTime,
    todayMenu,
    availableMenu,
    nextAvailableDay: nextDate.toLocaleDateString(undefined, {
      weekday: 'long',
    }),
  };
}

// helper (unchanged)
function getMenuForDate(date: Date): 'A' | 'B' {
  return date.getDate() % 2 === 0 ? 'A' : 'B';
}
