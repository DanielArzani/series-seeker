/**
 * Formats a given date string into a more readable format for users.
 *
 * @param dateString - The ISO 8601 date string to format.
 *
 * @example
 * const readableDate = formatDateForUser('2012-03-31T22:02:33Z');
 * // Expected output (depending on the system's timezone): "March 31, 2012, 10:02 PM"
 */
export const formatDateForUser = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true, // Use `false` for 24-hour format
  }).format(date);
};
