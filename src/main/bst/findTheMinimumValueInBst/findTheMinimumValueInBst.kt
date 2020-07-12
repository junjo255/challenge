package main.bst.findTheMinimumValueInBst

/**
	Find the Minimum Value in Binary Search Tree

	Implement the findMin(root) function which will find the minimum value
	in a given Binary Search Tree. Remember, a Binary Search Tree is a Binary Tree
	that satisfies the following property. An illustration is also provided to jog
	your memory.

	NodeValues(LeftSubtree) <= CurrentNodeValue < NodeValues(RightSubTree)

	Input #
	The root node for a binary search tree

	Output #
	Returns minimum integer value from a given binary search tree

	Sample Input #
	The root node of an object of the BinarySearchTree class which contains data such as

		bst = {
		6 -> 4,9
		4 -> 2,5
		9 -> 8,12
		12 -> 10,14
		}
		where parent -> leftChild,rightChild
		Sample Output #
		2
 */