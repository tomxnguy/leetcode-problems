Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
      let dummy = new ListNode(0, head); // Dummy node before head
  let current = dummy;

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next; // Skip the node
    } else {
      current = current.next; // Move to the next node
    }
  }

  return dummy.next; // Return new head (skipping dummy)
};
