/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let result = new ListNode(0);
  let currentNode = result;
  while (l1 && l2) {
      if(l1.val < l2.val){
          currentNode.next = l1;
          l1 = l1.next;
      }
      else{
          currentNode.next = l2;
          l2 = l2.next;
      }
      currentNode = currentNode.next;
  }
  if(l1){
      currentNode.next = l1;
  }
  else if(l2){
      currentNode.next = l2;
  }
  return result.next;
};
