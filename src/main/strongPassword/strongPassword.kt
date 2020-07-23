package main.strongPassword

import kotlin.math.min

/**
https://www.hackerrank.com/challenges/strong-password/problem
Louise joined a social networking site to stay in touch with her friends. The signup page required her to
input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

- Its length is at least 6.
- It contains at least one digit.
- It contains at least one lowercase English character.
- It contains at least one uppercase English character.
- It contains at least one special character. The special characters are: !@#$%^&*()-+

She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she
typed, can you find the minimum number of characters she must add to make her password strong?

Note: Here's the set of types of characters in a form you can paste in your solution:
numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"
 */

fun main() {
    println(minimumNumber(3, "Ab1")) // output: 3
    println(minimumNumber(11, "#HackerRank")) // output: 1
    println(minimumNumber(4, "4700")) // output: 3
    println(minimumNumber(4, "goxg")) // output: 3
    println(minimumNumber(7, "AUzs-nV")) // output: 1
}

fun minimumNumber (
        n: Int,
        password: String
): Int {
    var count = 0
    val specialChar = Regex("[!@#$%^&*()\\-+]")
    val lowerCase = Regex("[a-z]")
    val upperCase = Regex("[A-Z]")
    val numbers = Regex("[0-9]")

    var specialCharFlag = false
    var lowerCaseFlag = false
    var upperCaseFlag = false
    var numbersFlag = false

    password.let {
        if (specialChar.containsMatchIn(it)) specialCharFlag = true
        if (lowerCase.containsMatchIn(it)) lowerCaseFlag = true
        if (upperCase.containsMatchIn(it)) upperCaseFlag = true
        if (numbers.containsMatchIn(it)) numbersFlag = true

        if (!specialCharFlag) count++
        if (!lowerCaseFlag) count++
        if (!upperCaseFlag) count++
        if (!numbersFlag) count++

        return if ((n < 6) && (n + count > 6)) count else if ((n < 6) && (n + count <= 6)) 6 - n else count
    }
}
