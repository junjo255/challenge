/**
 * Tree Game
 *
 * Data Structure:
 *    class TreeNode {
 *         TreeNode parent; //parent node
 *         TreeNode left; //left child
 *         TreeNode right; //right child
 *     }
 *
 * Question:
 *     Two people in a game, player scores by claiming nodes in binary tree, tree node class as shown above.
 *     The player who eventually owns more nodes wins the game.
 *     Player A and B each claims a node at first.
 *     After the first round, a player will only be able to claim a node adjacent to any node owned by himself.
 *     A tree node is adjacent to its parent, left right and right child.
 *     A node owned cannot be re-claimed.
 *     End game when all nodes are owned.
 *     If player A gets the first claim at node N, find whether it is possible for player B to win.
 *     If yes, find out which node player B should claim at his first move.
 *
 * Follow up:
 *     if player B takes the first hand instead, which node should he pick?
 *     class TreeNode {
 *           TreeNode parent; //parent node
 *           TreeNode left; //left child
 *           TreeNode right; //right child
 *     }
 *
 * Solution:
 *     class TreeNode {
 *           int id;
 *           TreeNode left;
 *           TreeNode right;
 *           TreeNode parent;
 *
 *           TreeNode(int id) {
 *                 this.id = id;
 *           }
 *     }
 *
 *     The opponent's first move on Node N divides the tree into 3 components - left subtree, right subtree and parent branch of N.
 *     Your best move is to claim a node adjacent to Node N at the biggest component.
 *     Function countNodes() counts the sizes of 3 components. Function win() finds the largest component, whose size is your score.
 */

// public static boolean win(TreeNode root, TreeNode n) { //N is the first move by opponent
//     int sizeParent = countNodes(n.parent, n); //size of parent component
//     int sizeLeft = countNodes(n.left, n);   //size of left subtree component
//     int sizeRight = countNodes(n.right, n); //size of right subtree component
//
//     int myScore = Math.max(Math.max(sizeParent, sizeLeft), sizeRight); //I take the biggest component
//     int treeSize = 1 + sizeParent + sizeLeft + sizeRight;
//     int opponentScore = treeSize - myScore; //opponent takes remaining nodes
//     System.out.print("my best score is " + myScore + "/" + treeSize + ". ");
//     if(myScore > opponentScore) {
//         TreeNode bestmove = myScore == sizeParent ? n.parent: myScore == sizeLeft ? n.left : n.right;
//         System.out.println("my first move on " + bestmove.id);
//     }
//     return myScore > opponentScore;
// }
//
// private static int countNodes(TreeNode node, TreeNode ignore) {
//     if(node == null) return 0;
//     int count = 1;
//     if(node.parent != ignore) {
//         count += countNodes(node.parent, node);
//     }
//     if(node.left != ignore) {
//         count += countNodes(node.left, node);
//     }
//     if(node.right != ignore) {
//         count += countNodes(node.right, node);
//     }
//     return count;
// }
// Solution to the followup:
//
//     /*
//             To find the best move we must count the sizes of 3 adjacent components for every node in the tree.
//             If exists a node whose biggest adjacent component is smaller than treesize/2, the node is your best move, cuz your opponent won't be able to get a score higher than treesize/2.
//             In some cases there is no winning play, like on a tree with 2 nodes.
//
//             We can store the component sizes of every node in a 2-dimensional cache.
//             1st dimension: node
//             2nd dimension: which component (parent, left or right)
//             value: size of component
//
//         */
//
//     public static int bestMove(TreeNode root) {
//     if(root == null) return -1;
//     if(root.left == null && root.right == null) return root.id;
//
//     // map stores size of every component
//     // each node at most has 3 components - to its left, to its right, to its top (parent)
//     // Map>
//     Map> components = new HashMap<>();
//     TreeNode dummy = new TreeNode(-1);
//     dummy.left = root;
//
//     //calculate size of child components for all nodes
//     getComponentSize(dummy, root, components);
//
//     int treeSize = components.get(dummy).get(root);
//     for(TreeNode node: components.keySet()) {
//         int maxComponentSize = 0; //maximum score possible for opponent
//         for(int size: components.get(node).values()) {
//             if(size > maxComponentSize) maxComponentSize = size;
//         }
//         if(treeSize / 2.0 > maxComponentSize) { //opponent cannot get half of the tree. You win.
//             return node.id; //best first move
//         }
//     }
//     return -1; //no winning play
// }
//
// private static int getComponentSize(TreeNode n, TreeNode branch, Map> components) {
//     if(n == null || branch == null) return 0;
//
//     if(components.containsKey(n) && components.get(n).containsKey(branch)) {
//         return components.get(n).get(branch); // component size of a branch from node n (n excluded)
//     }
//     // a node n has 3 branches at most - parent, left, right
//     if(!components.containsKey(n)) {
//         components.put(n, new HashMap<>());
//     }
//
//     int size = 1; // 1 is the size of TreeNode branch
//     if(branch == n.left || branch == n.right) {
//         //size of the subtree 'branch' is size(branch.left) + size(branch.right) + 1
//         size += getComponentSize(branch, branch.left, components);
//         size += getComponentSize(branch, branch.right, components);
//     } else { //else when (branch == n.parent)
//         //see the tree from left-side or right-side view (see parent as a child; see one of the children as parent)
//         //size of the component is size(branch.parent) + size(branch.left/right child)
//         size += getComponentSize(branch, branch.parent, components);
//         size += branch.left == n ? getComponentSize(branch, branch.right, components) : getComponentSize(branch, branch.left, components);
//     }
//     components.get(n).put(branch, size); // cache the result of recursion
//     getComponentSize(n, n.parent, components); // calculate size of parent component for current node
//     return size;
// }
