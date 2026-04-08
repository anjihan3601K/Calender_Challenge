import { motion } from "framer-motion";
import { isSameDay, isInRange } from "@/lib/calendar-types";
import type { CalendarNote, DateRange } from "@/lib/calendar-types";

interface DayCellProps {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  selection: DateRange;
  isSelecting: boolean;
  hoveredDate: Date | null;
  notes: CalendarNote[];
  isWeekend: boolean;
  onMouseDown: (date: Date) => void;
  onMouseEnter: (date: Date) => void;
  onMouseUp: () => void;
}

export function DayCell({
  date,
  isCurrentMonth,
  isToday,
  selection,
  isSelecting,
  hoveredDate,
  notes,
  isWeekend,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}: DayCellProps) {
  const effectiveEnd = isSelecting && hoveredDate ? hoveredDate : selection.end;
  const inRange = isInRange(date, selection.start, effectiveEnd);
  const isStart = selection.start && isSameDay(date, selection.start);
  const isEnd = effectiveEnd && isSameDay(date, effectiveEnd);

  const hasNotes = notes.some((n) => {
    const s = new Date(n.startDate + "T00:00:00");
    const e = new Date(n.endDate + "T00:00:00");
    return date >= s && date <= e;
  });

  const getClassName = () => {
    let base = "relative flex h-11 w-full items-center justify-center text-sm font-medium select-none cursor-pointer transition-colors duration-100";

    if (!isCurrentMonth) {
      base += " text-muted-foreground/30";
    } else if (isWeekend) {
      base += " text-primary";
    } else {
      base += " text-foreground";
    }

    if (isStart || isEnd) {
      base += " bg-primary text-primary-foreground rounded-lg font-bold";
    } else if (inRange) {
      base += " bg-calendar-selection";
    }

    if (isToday && !isStart && !isEnd) {
      base += " font-bold";
    }

    return base;
  };

  return (
    <motion.button
      type="button"
      onMouseDown={(e) => { e.preventDefault(); onMouseDown(date); }}
      onMouseEnter={() => onMouseEnter(date)}
      onMouseUp={onMouseUp}
      className={getClassName()}
      whileHover={{ scale: 1.15, backgroundColor: isStart || isEnd ? undefined : "var(--calendar-hover)" }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span className="relative z-10">{date.getDate()}</span>

      {/* Today indicator */}
      {isToday && !isStart && !isEnd && (
        <motion.span
          className="absolute inset-0 rounded-lg border-2 border-primary"
          layoutId="today-ring"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      )}

      {/* Note dot */}
      {hasNotes && (
        <motion.span
          className="absolute bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
        />
      )}
    </motion.button>
  );
}
