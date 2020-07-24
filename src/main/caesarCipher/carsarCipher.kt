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
//	println(caesarCipher("middle-Outz", 2)) // output: okffng-Qwvb
//	println(caesarCipher("middle", 2)) // output: okffng
//	println(caesarCipher("Hello_World!", 4)) // output: Lipps_Asvph!
//	println(caesarCipher("Ciphering.", 26)) // output: Ciphering.
//	println(caesarCipher("159357lcfd", 98)) // output: 159357fwzx
//	println(caesarCipher("D3q4", 0)) // output: D3q4
	println(caesarCipher("1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M", 27)) // output: 1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N
	println(caesarCipher("6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr", 87)) // output: 6MFE95QigCLQY85mee3WH2laic1jX8s6p2iBMeODrSs6GFMuIeWWa
	println(caesarCipher("Pz-/aI/J`EvfthGH", 66)) // output: Dn-/oW/X`SjthvUV
	println(caesarCipher("!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U", 62)) // output: !w-bL`-yX!.G`mVKmFlX/MaCyyvSS!CSwts.!g/`He`eJk1DGZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E
	println(caesarCipher("Pz-/aI/J`EvfthGH", 66)) // output: Dn-/oW/X`SjthvUV
	println(caesarCipher("DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.", 45)) // output: WGYcqh?u5a*5<EPuzl6?O5{3F].1aZ)io1OPj4(!][WS3Z)kbLC.VfNc9]7Zse?OrxC2wBIXP4ZRP*lvM8(oan9pVk]j!7xrthr.
}

fun caesarCipher(
		s: String,
		k: Int
): String {
	val alphabet ="abcdefghijklmnopqrstuvwxyz"
	val alphabetReg = Regex("[a-zA-Z]")
	var newStr = ""
	var i = 0
	val newK = if (k > 26) k % 26 else k

	while (i < s.length) {
		newStr +=
			if (!alphabetReg.matches(s[i].toString())) {
				s[i]
			} else {
				val indexOfChar = alphabet.indexOf(s[i].toLowerCase())

				if ((indexOfChar + newK) % (alphabet.length - 1) == 0) {
					val newChar = alphabet[alphabet.length - 1]
					if (s[i] == s[i].toUpperCase()) newChar.toUpperCase() else newChar
				} else {
					val newChar = alphabet[(indexOfChar + newK) % (alphabet.length)]
					if (s[i] == s[i].toUpperCase()) newChar.toUpperCase() else newChar
				}
			}
		i++
	}

	return newStr
}