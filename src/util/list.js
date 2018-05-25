/**
 * Produces a copy of the specified list, sorted according to the specified
 * comparator.
 * @param list The list to sort
 * @param cmp The comparator
 */
export function sorted(list, cmp) {
    return [].concat(list)
        .sort(cmp);
}