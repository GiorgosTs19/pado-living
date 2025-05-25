import { useEffect, useState, useMemo } from 'react';

const CUTOFF_HOUR = 20;
const INTERVAL_MS = 60000;

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
  availableMenu: 'A' | 'B';
  nextAvailableDay: string;
};

export function useBreakfastMenuStatus(): BreakfastMenuStatus {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const todayCutoff = useMemo(() => getCutoffFor(now), [now]);
  const tomorrowCutoff = useMemo(() => getCutoffFor(offsetDays(now, 1)), [now]);

  const beforeCutoff = now < todayCutoff;
  const nextCutoff = beforeCutoff ? todayCutoff : tomorrowCutoff;

  const remainingTime = useMemo(() => formatRemaining(nextCutoff.getTime() - now.getTime()), [now, nextCutoff]);

  const daysAhead = beforeCutoff ? 1 : 2;
  const nextDate = useMemo(() => offsetDays(now, daysAhead), [now, daysAhead]);

  const availableMenu = useMemo(() => getMenuForDate(nextDate), [nextDate]);

  return {
    isOrderingOpen: beforeCutoff,
    cutoffTime: nextCutoff,
    remainingTime,
    availableMenu,
    nextAvailableDay: `${nextDate.toLocaleDateString('en-US', {
      weekday: 'long',
    })} ${nextDate.getDate().toString().padStart(2, '0')}/${(nextDate.getMonth() + 1).toString().padStart(2, '0')}`,
  };
}

function getMenuForDate(date: Date): 'A' | 'B' {
  const reference = new Date(2024, 0, 1); // Jan 1, 2024
  const diffInTime = date.setHours(0, 0, 0, 0) - reference.setHours(0, 0, 0, 0);
  const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
  return diffInDays % 2 === 0 ? 'A' : 'B';
}
