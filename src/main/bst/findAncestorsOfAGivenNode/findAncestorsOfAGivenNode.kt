package main.bst.findAncestorsOfAGivenNode

/**
site: www.educative.io
id: jun.jo249@gmail.com
password: Study1234

Find Ancestors of a Given Node in a BST

Problem Statement #
Implement the findAncestors(root, k) function which will find the ancestors
of the node whose value is “k”. Here root is the root node of a binary search tree and k is an integer
value of a node whose ancestors you need to find. An illustration is also given. Your code is evaluated
on the tree given in the example.

Input #
The root node of a BST and any number k

Output #
Returns all the ancestors of k in the binary search tree in a JavaScript array.
Remember to turn it into a string before returning it!

Sample Input #
    bst = {
        6 -> 4,9
        4 -> 2,5
        9 -> 8,12
        12 -> 10,14
    }
where parent -> leftChild,rightChild

k = 10

Sample Output #
str([12,9,6])
*/