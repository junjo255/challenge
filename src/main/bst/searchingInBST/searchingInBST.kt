package main.bst.searchingInBST

import main.bst.Node

/**
Searching in a Binary Search Tree (Implementation)
https://www.educative.io/courses/data-structures-coding-interviews-javascript/qV6ZpW6E1l2https://www.educative.io/courses/data-structures-coding-interviews-javascript/qV6ZpW6E1l2

 */

object BST {

    fun inOrderPrint(currentNode: Node) {
	   currentNode.left?.let { this.inOrderPrint(it) }
	   println(currentNode.key)
	   currentNode.right?.let { this.inOrderPrint(it) }
    }
}

fun main() {
    val tree = Node(5)
    val keys = arrayOf(8, 15, 21, 3, 7, 2, 5, 10, 2, 3, 4, 6, 11)
    keys.forEach {
	   tree.insert(it)
    }

    BST.inOrderPrint(tree)
}

