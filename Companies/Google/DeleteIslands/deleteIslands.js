/**
 * Given a binary grid where 0 represents water and 1 represents land. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. Delete all islands except their borders. A border is land adjacent to water. You may assume all four edges of the grid are surrounded by water.

 Example 1:
 Input:
 [[0, 0, 0, 1, 1, 1],
 [0, 0, 0, 1, 1, 1],
 [1, 1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1, 1]]

 Output:
 [[0, 0, 0, 1, 1, 1],
 [0, 0, 0, 1, 0, 1],
 [1, 1, 1, 1, 0, 1],
 [1, 0, 0, 0, 0, 1],
 [1, 1, 1, 1, 1, 1]]
 Example 2:
 Input:
 [[1, 1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1, 1]]

 Output:
 [[1, 1, 1, 1, 1, 1],
 [1, 0, 0, 0, 0, 1],
 [1, 0, 0, 0, 0, 1],
 [1, 0, 0, 0, 0, 1],
 [1, 1, 1, 1, 1, 1]]
 Example 3:
 Input:
 [[1, 1, 1, 0, 1, 1, 1],
 [1, 1, 1, 0, 1, 1, 1],
 [1, 1, 1, 0, 1, 1, 1],
 [0, 0, 0, 0, 1, 1, 1],
 [1, 1, 1, 0, 1, 1, 1]]

 Output:
 [[1, 1, 1, 0, 1, 1, 1],
 [1, 0, 1, 0, 1, 0, 1],
 [1, 1, 1, 0, 1, 0, 1],
 [0, 0, 0, 0, 1, 0, 1],
 [1, 1, 1, 0, 1, 1, 1]]
 */