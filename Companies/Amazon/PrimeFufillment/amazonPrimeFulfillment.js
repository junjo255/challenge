/**
 * Amazon is planning to release a new order prioritization algorithm to optimize
 * fulfilling Prime deliveries on time. All orders (Prime or otherwise) are given
 * an alphanumeric ID code.
 *
 * However, Prime order are given additional metadata that consists of a space
 * delimited list of lowercase English letters, whereas non-prime orders are
 * given metadata that consists only of a space delimited string of positive integers.
 *
 * Each order is therefore defined as their alphanumeric id code, followed by a space,
 * followed by their space delimited metadata.
 *
 * You have been tasked with sorting a list of all orders in the order queue to assist
 * in prioritization of fulfillment. They should be sorted according to the following
 * order:
 *    1. The Prime orders should be returned first, sorted by lexicographic sort of the
 *       alphabetic metadata.
 *    2. Only in the case of ties, the identifier should be used as a backup sort.
 *    3. The remaining non-prime orders must all come after, in the original order they
 *       were given in the input.
 *
 * Write a function or method to sort the orders according to this system.
 *
 * Input:
 *    The input to the function/method consists of two arguments:
 *       1. numOrders, an integer representing the number of orders.
 *       2. orderList, a list of strings repressenting all of the orders.
 *
 * Output:
 *    Return a list of strings representing the correctly prioritized orders.
 *
 * Note:
 *    The order identifier consists of only lower case English character and numbers.
 *
 * Examples:
 *    Input:
 *       numOrders = 6
 *       orderList =
 *           [zid 93 12]
 *           [fp kindle book]
 *           [10a echo show]
 *           [17g 12 25 6]
 *           [abl kindle book]
 *           [125 echo dot second generation]
 *
 *     output:
 *           [125 echo dot second generation]
 *           [10a echo show]
 *           [abl kindle book]
 *           [fp kindle book]
 *           [zid 93 12]
 *           [17g 12 25 6]
 *
 * Explanation:
 *    There are four Prime orders (lines with words) in this order list. Because "echo"
 *    comes before "kindle", those lines should come first, with "dot" coming before "show".
 *    Because two lines have the metadata "kindle book", their tie should be broken by the identifier,
 *    where "abl" comes before "fp". Finally, the non-Prime numeric orders should come last,
 *    in the original order, they were in the input.
 */