package main.caesarCipher

/**
https://www.hackerrank.com/challenges/caesar-cipher-1/problem
Julius Caesar protected his confidential information by encrypting it using a cipher.
Caesar's cipher shifts each letter by a number of letters. If the shift takes you past
the end of the alphabet, just rotate back to the front of the alphabet.
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

   Original alphabet:      abcdefghijklmnopqrstuvwxyz
   Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

For example, the given cleartext s= There's-a-starman-waiting-in-the-sky and the alphabet is rotated by k=3.
The encrypted string is Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb.

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

#### Function Description
Complete the caesarCipher function in the editor below. It should return the encrypted string.

caesarCipher has the following parameter(s):
  - s: a string in cleartext
  - k: an integer, the alphabet rotation factor


#### Input Format

The first line contains the integer, , the length of the unencrypted string.
The second line contains the unencrypted string, .
The third line contains , the number of letters to rotate the alphabet by.

#### Output Format
For each test case, print the encoded string.

#### Sample Input
  11
  middle-Outz
  2

#### Sample Output
  okffng-Qwvb

#### Explanation
Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

m -> o
i -> k
d -> f
d -> f
l -> n
e -> g
-    -
O -> Q
u -> w
t -> v
z -> b
 */
fun main() {
	println(caesarCipher("middle-Outz", 2)) // output: okffng-Qwvb
	println(caesarCipher("middle", 2)) // output: okffng

}

fun caesarCipher(
		s: String,
		k: Int
): String {
	val alphabet ="abcdefghijklmnopqrstuvwxyz"
	val specialChar = Regex("[!@#$%^&*()\\-'+]")
	var newStr = ""
	var i = 0

	while (i < s.length) {
		newStr +=
			if (specialChar.matches(s[i].toString())) {
				s[i]
			} else {
				val indexOfChar = alphabet.indexOf(s[i])

				if ((indexOfChar + k) % (alphabet.length - 1) == 0) {
					val newChar = alphabet[alphabet.length - 1]
					if (s[i] == s[i].toUpperCase()) newChar.toUpperCase() else newChar
				} else {
					val newChar = alphabet[(indexOfChar + k) % (alphabet.length - 1)]
					if (s[i] == s[i].toUpperCase()) newChar.toUpperCase() else newChar
				}
			}
		i++
	}

	return newStr
}