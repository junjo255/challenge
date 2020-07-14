package main.bst.searchingInBST
/**
Searching in a Binary Search Tree (Implementation)
https://www.educative.io/courses/data-structures-coding-interviews-javascript/qV6ZpW6E1l2https://www.educative.io/courses/data-structures-coding-interviews-javascript/qV6ZpW6E1l2

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

