import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MonthSwitcherProps {
  currentMonth: Date;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
}

export function MonthSwitcher({ currentMonth, onPrev, onNext, onToday }: MonthSwitcherProps) {
  const monthName = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button variant="ghost" size="icon" onClick={onPrev} className="h-9 w-9 rounded-full hover:bg-primary/10">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </motion.div>
        <motion.h2
          key={monthName}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="min-w-[180px] text-center text-lg font-bold tracking-tight text-foreground"
        >
          {monthName}
        </motion.h2>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button variant="ghost" size="icon" onClick={onNext} className="h-9 w-9 rounded-full hover:bg-primary/10">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button variant="outline" size="sm" onClick={onToday} className="gap-1.5 rounded-full text-xs font-semibold border-primary/30 hover:bg-primary/10 hover:text-primary">
          <CalendarDays className="h-3.5 w-3.5" />
          Today
        </Button>
      </motion.div>
    </div>
  );
}
