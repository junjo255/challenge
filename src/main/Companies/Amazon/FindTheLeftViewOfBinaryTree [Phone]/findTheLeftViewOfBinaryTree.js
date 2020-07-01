/**
 AWS phone interview
 Find the left view of binary tree
 1
 / \
 2  3
 /\   \
 4 5   6
 /  /
 7  8
 /
 9
 return [1, 2, 4, 7, 9]

 public List leftView(TreeNode root) {
        List leftview = new ArrayList<>();
        Queue q = new LinkedList<>();
        if(root != null) q.add(root);
        while(!q.isEmpty()) {
            leftview.add(q.peek().val);
            Queue nextLevel = new LinkedList<>();
            while(!q.isEmpty()) {
                TreeNode node = q.poll();
                if(node.left != null) nextLevel.add(node.left);
                if(node.right != null) nextLevel.add(node.right);
            }
            q = nextLevel;
        }
        return leftview;
    }
 */