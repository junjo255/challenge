/**
 Given an ArrayList of Nodes, with each Node having an ID and a parent ID, determine whether the List is given in preorder.


 class Node:
 def __init__(self, ID, parent):
 self.ID = ID
 self.parentID = parent
 self.left = None
 self.right = None

 #function to identify if given is preorder
 '''
 Create a stack to store nodes in the current path when traversing.
 Push node[i] into stack once node[i] is verified to be valid (valid only when parent of node[i] is in stack.
 In preorder a parent must show up earlier than its child)
 Whenever stack top is not the parent of node[i], pop until parent of node[i] is at stack top. Push node[i].
 If all nodes popped but parent of node[i] still not found, then node[i] is not in preorder sequence.
 '''
 def isPreorder(nodes):
 if not nodes:
 return True

 st = [nodes[0].ID]
 i = 1
 while i < len(nodes):
 if not st:
 return False
 if st[-1] is nodes[i].parentID:
 st.append(nodes[i].ID)
 i += 1
 else:
 st.pop()
 return True
 */