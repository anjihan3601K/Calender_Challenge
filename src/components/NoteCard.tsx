import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import type { CalendarNote } from "@/lib/calendar-types";

interface NoteCardProps {
  note: CalendarNote;
  onDelete: (id: string) => void;
}

const colorMap: Record<string, string> = {
  peach: "bg-note-peach",
  mint: "bg-note-mint",
  lavender: "bg-note-lavender",
  sky: "bg-note-sky",
  rose: "bg-note-rose",
};

export function NoteCard({ note, onDelete }: NoteCardProps) {
  const startDate = new Date(note.startDate + "T00:00:00");
  const endDate = new Date(note.endDate + "T00:00:00");
  const startStr = startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const endStr = endDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const isSame = note.startDate === note.endDate;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group relative rounded-xl ${colorMap[note.color] || "bg-note-peach"} p-4 shadow-sm`}
    >
      <motion.button
        type="button"
        onClick={() => onDelete(note.id)}
        className="absolute right-2 top-2 rounded-lg p-1.5 text-foreground/30 opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.8 }}
      >
        <Trash2 className="h-3.5 w-3.5" />
      </motion.button>
      <div className="flex items-start gap-3">
        <motion.span
          className="text-2xl"
          whileHover={{ scale: 1.3, rotate: 15 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {note.emoji}
        </motion.span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-foreground leading-relaxed">{note.text}</p>
          <p className="mt-1.5 text-xs text-muted-foreground">
            {isSame ? startStr : `${startStr} — ${endStr}`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
