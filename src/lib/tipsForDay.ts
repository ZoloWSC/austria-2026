import { tips } from "../data/tips";
import type { Tip } from "../data/types";

/**
 * Map each chapter (1-10) to the tip ids that are most relevant on that day.
 * Tips not mapped to a day still show in the global "Tips" section of the home page.
 */
// BLANK TRIP — map tip ids to day numbers when configuring a new trip.
const TIP_IDS_PER_DAY: Record<number, string[]> = {};

export function tipsForDay(dayNumber: number): Tip[] {
  const ids = TIP_IDS_PER_DAY[dayNumber] ?? [];
  return ids
    .map(id => tips.find(t => t.id === id))
    .filter((t): t is Tip => !!t);
}
