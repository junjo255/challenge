package main.bst.deletionInBST

import main.bst.Node

/**
  Deletion in BST (Implementation)
  https://www.educative.io/courses/data-structures-coding-interviews-javascript/gxpKvxzoR9Y

 */


fun main() {
  val tree = Node(4)
  val keys = arrayOf(2, 15, 21, 3, 7, 2, 5, 10, 2, 3, 4, 6, 11)
  keys.forEach {
    tree.insert(it)
  }

  tree.delete(21)

  println(tree.find(21))  //output: null
}