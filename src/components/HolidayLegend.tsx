import { useMemo } from "react";
import { motion } from "framer-motion";
import { getHolidaysForMonth } from "@/lib/holidays";

interface HolidayLegendProps {
  currentMonth: Date;
}

export function HolidayLegend({ currentMonth }: HolidayLegendProps) {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const holidays = useMemo(() => {
    const map = getHolidaysForMonth(year, month);
    return Array.from(map.entries())
      .sort(([a], [b]) => a - b)
      .map(([day, info]) => ({ day, ...info }));
  }, [year, month]);

  if (holidays.length === 0) return null;

  const monthName = currentMonth.toLocaleString("en-IN", { month: "long" });

  return (
    <div>
      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
        🎉 {monthName} Holidays
      </h3>
      <div className="grid gap-1">
        {holidays.map(({ day, name, emoji }, i) => (
          <motion.div
            key={`${month}-${day}`}
            className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs transition-colors hover:bg-muted/50"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 + i * 0.04 }}
          >
            <span className="text-sm">{emoji}</span>
            <span className="font-medium text-foreground leading-tight">{name}</span>
            <span className="ml-auto shrink-0 text-[10px] text-muted-foreground">{day} {monthName.slice(0, 3)}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
