import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

interface HeroSectionProps {
  currentMonth: Date;
}

export function HeroSection({ currentMonth }: HeroSectionProps) {
  const year = currentMonth.getFullYear();
  const monthName = currentMonth.toLocaleDateString("en-US", { month: "long" }).toUpperCase();

  return (
    <div className="relative w-full overflow-hidden">
      {/* Spiral binding effect */}
      <div className="relative z-10 flex justify-center gap-3 py-2">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.03, duration: 0.3 }}
            className="h-4 w-4 rounded-full border-2 border-muted-foreground/30 bg-background"
          />
        ))}
      </div>

      {/* Hero Image */}
      <motion.div
        className="relative aspect-[2/1] w-full overflow-hidden md:aspect-[3/1]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={heroBanner}
          alt="Adventure landscape for the calendar"
          className="h-full w-full object-cover"
          width={1920}
          height={960}
        />

        {/* Blue geometric overlay */}
        <motion.div
          className="absolute bottom-0 right-0 flex flex-col items-end justify-end"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg viewBox="0 0 300 200" className="h-24 w-36 md:h-40 md:w-60" preserveAspectRatio="none">
            <polygon points="300,0 300,200 0,200" className="fill-primary" />
          </svg>
        </motion.div>

        {/* Year + Month text */}
        <motion.div
          className="absolute bottom-3 right-3 z-10 text-right md:bottom-5 md:right-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.p
            key={year}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-lg font-light tracking-wider text-primary-foreground md:text-2xl"
          >
            {year}
          </motion.p>
          <motion.h1
            key={monthName}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-black tracking-tight text-primary-foreground md:text-4xl"
          >
            {monthName}
          </motion.h1>
        </motion.div>
      </motion.div>
    </div>
  );
}
