// Sapaan dan format waktu yang mengikuti jam perangkat pengguna.

export function greetingFor(date = new Date()) {
  const hour = date.getHours();
  if (hour >= 4 && hour < 11) return 'Selamat pagi';
  if (hour >= 11 && hour < 15) return 'Selamat siang';
  if (hour >= 15 && hour < 19) return 'Selamat sore';
  return 'Selamat malam';
}

export function isEvening(date = new Date()) {
  const hour = date.getHours();
  return hour >= 16 || hour < 4;
}

const dayFormatter = new Intl.DateTimeFormat('id-ID', { weekday: 'long', day: 'numeric', month: 'long' });

export function formatDay(date = new Date()) {
  return dayFormatter.format(date);
}

export function formatClock(date = new Date()) {
  return `${String(date.getHours()).padStart(2, '0')}.${String(date.getMinutes()).padStart(2, '0')}`;
}
