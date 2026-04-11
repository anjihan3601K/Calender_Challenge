// Indian public holidays (month is 0-indexed)
interface Holiday {
  name: string;
  emoji: string;
  month: number;
  day: number;
}

const FIXED_HOLIDAYS: Holiday[] = [
  { name: "New Year's Day", emoji: "🎆", month: 0, day: 1 },
  { name: "Republic Day", emoji: "🇮🇳", month: 0, day: 26 },
  { name: "Maha Shivaratri", emoji: "🔱", month: 1, day: 26 },
  { name: "Holi", emoji: "🎨", month: 2, day: 14 },
  { name: "Good Friday", emoji: "✝️", month: 3, day: 18 },
  { name: "Dr. Ambedkar Jayanti", emoji: "📘", month: 3, day: 14 },
  { name: "Eid ul-Fitr", emoji: "🌙", month: 2, day: 31 },
  { name: "May Day", emoji: "⚒️", month: 4, day: 1 },
  { name: "Buddha Purnima", emoji: "☸️", month: 4, day: 12 },
  { name: "Eid ul-Adha", emoji: "🕌", month: 5, day: 7 },
  { name: "Muharram", emoji: "🏴", month: 6, day: 6 },
  { name: "Independence Day", emoji: "🇮🇳", month: 7, day: 15 },
  { name: "Janmashtami", emoji: "🦚", month: 7, day: 16 },
  { name: "Milad-un-Nabi", emoji: "🌟", month: 8, day: 5 },
  { name: "Mahatma Gandhi Jayanti", emoji: "🕊️", month: 9, day: 2 },
  { name: "Dussehra", emoji: "🏹", month: 9, day: 2 },
  { name: "Diwali", emoji: "🪔", month: 9, day: 21 },
  { name: "Bhai Dooj", emoji: "🤝", month: 9, day: 23 },
  { name: "Guru Nanak Jayanti", emoji: "🙏", month: 10, day: 5 },
  { name: "Christmas Day", emoji: "🎄", month: 11, day: 25 },
];

// Additional holidays that vary by year — using 2026 approximate dates
function getFloatingHolidays(year: number): Holiday[] {
  // These dates shift each year based on lunar calendars
  // Using approximate 2026 dates as defaults
  if (year === 2026) {
    return [
      { name: "Pongal / Makar Sankranti", emoji: "🌾", month: 0, day: 14 },
      { name: "Basant Panchami", emoji: "🌼", month: 1, day: 2 },
      { name: "Ugadi / Gudi Padwa", emoji: "🎋", month: 2, day: 19 },
      { name: "Ram Navami", emoji: "🏛️", month: 3, day: 6 },
      { name: "Raksha Bandhan", emoji: "🧵", month: 7, day: 8 },
      { name: "Ganesh Chaturthi", emoji: "🐘", month: 7, day: 27 },
      { name: "Onam", emoji: "🌺", month: 8, day: 3 },
      { name: "Navratri Starts", emoji: "💃", month: 9, day: 3 },
      { name: "Karva Chauth", emoji: "🌝", month: 9, day: 15 },
      { name: "Chhath Puja", emoji: "🌅", month: 10, day: 8 },
    ];
  }
  // Fallback approximate dates for other years
  return [
    { name: "Pongal / Makar Sankranti", emoji: "🌾", month: 0, day: 14 },
    { name: "Basant Panchami", emoji: "🌼", month: 1, day: 5 },
    { name: "Ugadi / Gudi Padwa", emoji: "🎋", month: 2, day: 22 },
    { name: "Ram Navami", emoji: "🏛️", month: 3, day: 10 },
    { name: "Raksha Bandhan", emoji: "🧵", month: 7, day: 9 },
    { name: "Ganesh Chaturthi", emoji: "🐘", month: 8, day: 7 },
    { name: "Onam", emoji: "🌺", month: 8, day: 5 },
    { name: "Navratri Starts", emoji: "💃", month: 9, day: 7 },
    { name: "Karva Chauth", emoji: "🌝", month: 9, day: 17 },
    { name: "Chhath Puja", emoji: "🌅", month: 10, day: 10 },
  ];
}

export interface HolidayInfo {
  name: string;
  emoji: string;
}

export function getHolidaysForMonth(year: number, month: number): Map<number, HolidayInfo> {
  const map = new Map<number, HolidayInfo>();
  for (const h of FIXED_HOLIDAYS) {
    if (h.month === month) map.set(h.day, { name: h.name, emoji: h.emoji });
  }
  for (const h of getFloatingHolidays(year)) {
    if (h.month === month) map.set(h.day, { name: h.name, emoji: h.emoji });
  }
  return map;
}
