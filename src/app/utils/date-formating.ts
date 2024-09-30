export function formatDateToISODate(date: Date | string) {
  return new Date(date as Date).toISOString().split('T')[0];
}
