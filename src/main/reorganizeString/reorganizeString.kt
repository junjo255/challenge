package main.reorganizeString

/**
 767. Reorganize String

 Given a string S, check if the letters can be rearranged so that
 two characters that are adjacent to each other are not the same.

 If possible, output any possible result.
 If not possible, return the empty string.

 Example 1:

 Input: S = "aab"
 Output: "aba"
 Example 2:

 Input: S = "aaab"
 Output: ""
 Note:

 S will consist of lowercase letters and have length in range [1, 500].

 */


fun main() {
 val map = "aabbbbbbbbcccccc".groupBy { it }.mapValues { it.value.count() }
 val sortedMap = map.toSortedMap(compareByDescending { map[it] })

 println(map)
 println(sortedMap)
}

//fun reorganizeString(
//        str: String
//): String {
//   val result = ""
//   val map = str.groupBy { it }.mapValues { it.value.count() }.toSortedMap()
//   val sortedMap = map.toSortedMap(compareByDescending { map[it] })
//
////   sortedMap.forEach { (k,v) ->
////       if ()
////
////   }
//
//}