package main.bst.findHeightOfBST

import main.bst.Node

/**
site: www.educative.io
id: jun.jo249@gmail.com
password: Study1234

Find the Height of a BST

Problem Statement #
Implement a function findHeight(root) which returns the height of
a given binary search tree. An illustration is also provided for your understanding.

Height of a Node — the number of edges between a node and its deepest descendent
Height of a Tree — Height of its root node
Also, keep in mind that the height of an empty tree and leaf nodes is zero.

Input #
The root node for a binary search tree

Output #
Returns the maximum depth or height of a binary tree

Sample Input #
    bst = {
        6 -> 4,9
        4 -> 2,5
        9 -> 8,12
        12 -> 10,14
    }
where parent -> leftChild,rightChild
Sample Output #
3
*/

fun main() {
    val tree = Node(6)
    tree.insert(4)
    tree.insert(9)
    tree.insert(8)
    tree.insert(12)
    tree.insert(10)
    tree.insert(14)

//    println(findHeight(tree))
}

fun findHeight(
        node: Node
): Int? {
    var currentNode = node

    var leftHeight = currentNode.left?.let { findHeight(it) }
    var rightHeight = currentNode.right?.let { findHeight(it) }

    if (leftHeight != null) {
        if (leftHeight > rightHeight!!) {
            return leftHeight + 1
        } else {
            return rightHeight + 1
        }
    }


}