/**
 * Maximum Block Volume
 * Given the left view and front view of the skyline of a block as two arrays,
 * find the maximum total height of buildings in the block.
 *
 * For both of the matrices below,
 * Left view of the skyline is [4, 2, 3].
 * Front View of the skyline is [3, 2, 3, 4]
 *
 * Based on the left and front view, the volume we'd be able to build on the block could be
 *        [3, 2, 3, 4]      [3, 2, 3, 4]
 *        [2, 2, 2, 2] or  [2, 2, 2, 1]
 *        [3, 2, 3, 3]      [1, 2, 3, 3]
 *
 * The total height of building in the first matrix is the largest possible.
 * Therefore the maximum total volume for the left and front views given is sum of the first matrix 31.
 * The solution should take no more than O(NlogN + MlogM) time and O(1) space.
 *
 * Additional Example
 *     Input gives two arrays.
 *     left view [3, 5]
 *     front view [2, 5]
 *
 *     Output 12.
 *     Because the largest block volume to build is
 *     [2, 3]
 *     [2, 5]
 *     Return sum 2 + 3 + 2 + 5 = 12
 *
 * Solution
 *     Analyse the test cases and we'll find a pattern of the maximum height of a building at (i,j) is
 *     min(left_view[i], front_view[j])
 *     Therefore the naive solution is iterate through every cell in the MxN matrix and figure out the max height of each building, which takes O(MN) time.
 *     A more optimal solution is to sort the input arrays and find the sum of each row based on the sum of previous row.
 *     Assume after sorting, left_view [2, 3, 4], front_view is [2, 3, 3, 4].
 *     Assume after sorting, left_view [2, 3, 4], front_view is [2, 3, 3, 4].
 *     When i = 0, left_view[0] is 2. Every building in front_view is no less than 2.
 *     Therefore the tallest building possible for the row 0 is 2. The total volume for row 0 is 2 * len(front_view) = 8.
 *     When i = 1, left_view[1] is 3.
 *     One value in front_view is 2, which is less than 3. Therefore the max volume for row 1 is [2, 3, 3, 3].
 *     When i = 2, left_view[2] is 3.
 *     One value in front_view is 2, which is less than 3. Therefore the max volume for row 2 is [2, 3, 3, 3].
 *     When i = 3, left_view[3] is 4.
 *     First three values in front_view is is less than 4. Therefore the max volume for row 2 is [2, 3, 3, 4].
 *     The total for each row is sum(front_view elements < left_view[i]) + remaining element size * left_view[i].
 *     We just need to find the split point index j in front_view[j - 1] < left_view[i] and front_view[j] >= left_view[i].
 *     The total for each row will be sum(front_view[0:j]) + left_view[i] * (len(front_view) - j).
 *     Find the split index j for every row and sum up the row totals. Getting the total takes O(M + N) if arrays are sorted. Sorting two arrays takes O(MlogM + NlogN).
 *     Getting the total takes O(M + N) if arrays are sorted. Sorting two arrays takes O(MlogM + NlogN).
 *
 * Implementation
 *    def max_building_volume(left, front):
 *         left = sorted(left)
 *         front = sorted(front)
 *         i = 0
 *         sum_to_ith = 0 # prefix sum of 0 to ith building in current row up
 *         total = 0 #total volume
 *         for h in left:
 *              while i < len(front) and h >= front[i]:
 *                   sum_to_ith += front[i]
 *                   i += 1
 *                   total += (sum_to_ith + (len(front) - i) * h)
 *                   return total
 */