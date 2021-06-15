/**
 * Separator to use between years.
 *
 * This is the en-dash character.
 */
const SEP_YEARS: string = "–";

/**
 * Returns a string representing the year range.
 *
 * If start year is given but no end year, then it will be assumed it is until
 * the present. If end year is given but no start year, then it will be assumed
 * they are in the same year.
 */
export function formatYears(startYear?: number, endYear?: number): string {
  if (startYear) {
    var endYearText = endYear
      ? `'${endYear.toString().substring(2)}`
      : "present";
    return `(${startYear}${SEP_YEARS}${endYearText})`;
  } else if (endYear) {
    return `(${endYear})`;
  } else {
    return "";
  }
}

/**
 * Returns a string representing the list of programming languages.
 */
export function formatLangs(langs: [string]): string {
  return langs.join(" | ");
}
