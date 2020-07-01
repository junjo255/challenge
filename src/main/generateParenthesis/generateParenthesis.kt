package main.generateParenthesis

import java.util.*

/**
 22. Generate Parenthesis
 Given n pairs of parentheses, write a function to
 generate all combinations of well-formed parentheses.

 For example, given n = 3, a solution set is:

 [
 "((()))",
 "(()())",
 "(())()",
 "()(())",
 "()()()"
 ]
 */

fun main() {
 generateParentheses(3).forEach{ println(it) }
}

fun generateParentheses(n: Int): List<String> {
 val result = ArrayList<String>()
 recurse(result, "", 2*n, 0)
 return result
}

fun recurse(
        list: MutableList<String>,
        str: String,
        maxLength: Int,
        sum: Int
) {
 if (sum == 1) return

 if (sum < -maxLength/2) return

 if (str.length == maxLength) return

 if (str.length == maxLength && sum == 0) list.add(str)

 recurse(list, "$str(", maxLength, sum-1)
 recurse(list, "$str)", maxLength, sum+1)
}