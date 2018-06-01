/**
 * Produces a copy of the specified list, sorted according to the specified
 * comparator.
 * @param list The list to sort
 * @param cmp The comparator
 */
export const sorted = (list, cmp) => [].concat(list).sort(cmp);

export const filtered = (list, filter) => [].concat(list).filter(filter);