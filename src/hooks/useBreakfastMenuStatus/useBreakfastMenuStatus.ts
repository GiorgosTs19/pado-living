import { useMemo } from 'react';

const CUTOFF_HOUR = 20;

function getMenuForDate(date: Date): 'A' | 'B' {
  const day = date.getDate(); // 1–31
  return day % 2 === 0 ? 'A' : 'B'; // Even = A, Odd = B
}

function getTomorrow(): Date {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
}

function getTodayCutoff(): Date {
  const cutoff = new Date();
  cutoff.setHours(CUTOFF_HOUR, 0, 0, 0);
  return cutoff;
}

function getRemainingTimeUntil(date: Date): string {
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  if (diffMs <= 0) return '0h 0m';

  const totalMinutes = Math.floor(diffMs / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}

export function useBreakfastMenuStatus() {
  const now = new Date();
  const today = new Date();
  const tomorrow = getTomorrow();
  const cutoffTime = getTodayCutoff();

  const todayMenu = getMenuForDate(today);
  const tomorrowMenu = getMenuForDate(tomorrow);
  const canOrder = now.getTime() < cutoffTime.getTime();
  const nextAvailableDay = tomorrow.toLocaleDateString(undefined, {
    weekday: 'long',
  });

  const remainingTime = getRemainingTimeUntil(cutoffTime);

  return useMemo(
    () => ({
      isOrderingOpen: canOrder,
      cutoffTime,
      remainingTime,
      availableMenu: tomorrowMenu,
      todayMenu,
      canOrder,
      nextAvailableDay,
    }),
    [canOrder, cutoffTime, remainingTime, tomorrowMenu, todayMenu, nextAvailableDay]
  );
}
