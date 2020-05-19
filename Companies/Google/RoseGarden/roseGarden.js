/**
 * Rose Garden
 * Given an array a of roses. For example [1, 2, 4, 9, 3, 4, 1]
 * a[i] means rose i will bloom on day a[i].
 * Here the first rose will bloom on day 1, the second rose will bloom on day 2, etc. etc.
 * Also given an int k, which is the minimum number of adjacent bloom roses required for a bouquet.
 * and an int n, which is the number of bouquets we need.
 * return the earliest day that we can get n bouquets of roses.
 *
 * for example:
 * a = [1, 2, 4, 9, 3, 4, 1], k = 2, n = 2
 *
 * day 1:
 * the first and the last rose bloom.
 * [b, n, n, n, n, n, b]
 *
 * day 2:
 * the second rose bloom
 * [b, b, n, n, n, n, b]
 * Here the first two bloom roses make a bouquet.
 *
 * day 3: [b, b, n, n, b, n, b]
 *
 * day4: [b, b, n, n, b, b, b]
 * Here the last three bloom roses make a bouquet, meeting the required n = 2 bouquets of bloom roses.
 * So return day 4.
 */