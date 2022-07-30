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
export function formatYears(
  startYear: number | undefined,
  endYear: number | undefined,
  useParentheses: boolean
): string {
  if (!startYear) {
    console.warn("No startYear found.");
    return "";
  }

  const endYearText = endYear
    ? `'${endYear.toString().substring(2)}`
    : "present";

  const yearRangeText =
    startYear === endYear
      ? startYear.toString()
      : `${startYear}${SEP_YEARS}${endYearText}`;

  return withParentheses(yearRangeText, useParentheses);
}

function withParentheses(text: string, useParentheses: boolean): string {
  return useParentheses ? `(${text})` : text;
}

/**
 * Returns a string representing the list of programming languages.
 */
export function formatLangs(langs: string[]): string {
  return langs.join(" | ");
}
