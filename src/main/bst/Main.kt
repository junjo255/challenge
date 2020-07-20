package main.bst

/**
https://bit.ly/3gDKc1J

			###### An Intro to Trees and Basic Tree Properties! ######
- Trees consist of vertices (nodes) and edges that connect them.
- Hierarchical.

- Root Node: A node with no parent nodes.
- Child Node: A node linked to an upper node (Parent Node).
- Parent Node: A node that has links to one or more Child Node.
- Sibling Node: Nodes that share the same Parent Node.
- Leaf Node: A node that doesn's have any Child Node
- Ancestor Nodes: The nodes on the path from a node d to the root node. Ancestor nodes
include node d's parents, grandparents, and so on.

- Depth of a node n: The length of the path from a node n to the root node.
- Height of a Tree: Height of its root node.


- Tree Types:
- Binary Trees
- Binary Search Trees
- AVL Trees
- Red-Black Trees
- 2-3 Trees


		###### What Makes a Tree 'Balanced'? ######
- A binary tree is height-balanced if, for each node in the tree, the difference between
the height of the right subtree and the left subtree is, at most, one.
-  | Height(leftSubTree) - Height(RightSubTree) | <= 1


			###### What is a Binary Tree? ######
- Types of Binary Trees:
- Complete Binary Trees: A complete binary tree is a binary tree in which all the levels
of the there are fully filled, except for perhaps the last level which can be filled
from left to right.
- The total number of nodes in a complete binary tree can be expressed as:
2^h <= total number of nodes <= 2^( h+1) - 1

- Full Binary Trees: A full or proper Binary Tree has the following characteristics:
- Every node has 0 or 2 children. No node can have 1 child.
- The total number of nodes in a Full Binary Tree of height 'h' can be expressed as:
2h + 1 <= total number of nodes <= 2^(h+1) - 1

- Perfect Binary Trees: A Binary Tree is said to be perfect if it is both full and complete.
- The total number of nodes in a perfect binary tree of height 'h', is given as: 2^(h+1) - 1
- The total number rof leaf nodes are given as 2^h or (n+1)/2


		###### What is a Binary Search Tree? ######
- BSTs are a special kind of binary tree where each node of the tree has key-value pairs.
- NodeValues(left subtree of Node n) < Node Value of Node n < NodeValues(right subtree of Node n)


			###### Pre-Order Traversal ######
 - The current node will be visited before its children nodes.
 - "root-left-right"


 			###### In-Order Traversal ######
 - "left-root-right"

 			###### Post-Order Traversal ######
 - "left-right-root"
 */

class Node (
	   var key: Int,
	   var left: Node? = null,
	   var right: Node? = null
) {

    fun find(value: Int): Node? = when {
	   this.key > value -> left?.find(value)
	   this.key < value -> right?.find(value)
	   else -> this
    }

    fun insert(value: Int) {
	   if (value > this.key) {
		  if (this.right == null) {
			 this.right = Node(value)
		  } else {
			 this.right?.insert(value)
		  }
	   } else if (value < this.key) {
		  if (this.left == null) {
			 this.left = Node(value)
		  } else {
			 this.left?.insert(value)
		  }
	   }
    }

    fun delete(value:Int) {
	   when {
		  value > key -> search(value, this.right, this)
		  value < key -> search(value, this.left, this)
		  else -> removeNode(this, null)
	   }
    }

    private fun search(
		  value: Int,
		  node: Node?,
		  parent: Node?
    ) {
	   if (node === null) {
		  println("value ($value) not present in the tree")
		  return
	   }

	   when {
		  value > node.key -> search(value, node.right, node)
		  value < node.key -> search(value, node.left, node)
		  value == node.key -> removeNode(node, parent)
	   }
    }

    private fun removeNode(
		  node: Node,
		  parent: Node?
    ) {
	   node.left?.let { leftChild ->
		  run {
			 node.right?.let {
				removeTwoChildNode(node)
			 } ?: removeSingleChildNode(node, leftChild)
		  }
	   } ?: run {
		  node.right?.let { rightChild -> removeSingleChildNode(node, rightChild) } ?: removeNoChildNode(node, parent)
	   }
	 }

    fun removeNoChildNode(node: Node, parent: Node?) {
	   parent?.let { p ->
		  if (node == p.left) {
			 p.left = null
		  } else if (node == p.right) {
			 p.right = null
		  }
	   } ?: throw IllegalStateException(
			 "Can not remove the root node without child nodes")

    }

    private fun removeTwoChildNode(node: Node) {
	   val leftChild = node.left!!
	   leftChild.right?.let {
		  val maxParent = findParentOfMaxChild(leftChild)
		  maxParent.right?.let {
			 node.key = it.key
			 maxParent.right = null
		  } ?: throw IllegalStateException("Node with max child must have the right child!")

	   } ?: run {
		  node.key = leftChild.key
		  node.left = leftChild.left
	   }

    }

    private fun findParentOfMaxChild(n: Node): Node {
	   return n.right?.let { r -> r.right?.let { findParentOfMaxChild(r) } ?: n }
			 ?: throw IllegalArgumentException("Right child must be non-null")

    }

    private fun removeSingleChildNode(
		  parent: Node,
		  child: Node
    ) {
	   parent.key = child.key
	   parent.left = child.left
	   parent.right = child.right
    }
}