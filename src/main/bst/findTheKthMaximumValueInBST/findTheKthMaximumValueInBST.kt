package main.bst.findTheKthMaximumValueInBST

import main.bst.Node
import main.bst.searchingInBST.BST

/**
	Find the Kth Maximum Value in a Binary Search Tree

	Implement a function findKthMax(root,k) which will take a BST and any number
	“k” as an input and return kth maximum number from that tree.
	Assume that “k” will always be less than or equal to the total
	number of nodes.

	Input #
	The root node for a binary search tree and any number k

	Output #
	Returns kth maximum value from the given tree

	Sample Input #
	bst = {
	6 -> 4,9
	4 -> 2,5
	9 -> 8,12
	12 -> 10,14
	}
	where parent -> leftChild,rightChild

	k = 3
	Sample Output #
	10
 */


fun findKthMax(
	   root : Node,
	   k: Int
): Int {
    var list = mutableListOf<Int>()

    list = inOrderPrint(root, list)

    return list[list.size-k]
}

fun inOrderPrint(
	   currentNode: Node,
	   list: MutableList<Int>
): MutableList<Int> {
    currentNode.left?.let { inOrderPrint(it, list) }
    list.add(currentNode.key)
    currentNode.right?.let { inOrderPrint(it, list) }

    return list
}

fun main() {
    val tree = Node(6)
    val keys = arrayOf(4, 9, 2, 5, 8, 12, 10, 14)
    keys.forEach {
	   tree.insert(it)
    }

    println(findKthMax(tree, 3))
}