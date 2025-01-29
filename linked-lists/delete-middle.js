//You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

 //using fast and slow pointers, we find the middle of the list
 //find middle of list in slow pointer
 //assign slow to next node and deleted the next node
var deleteMiddle = function(head) {
    if (!head || !head.next) return null;
    let fast = head;
    let slow = head;
    let prev = null
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next
        fast = fast.next.next;
    }
    prev.next = slow.next
    return head;
}
