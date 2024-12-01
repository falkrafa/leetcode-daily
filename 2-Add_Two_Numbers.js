function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let result = new ListNode(0);
  let currentNode = result;
  while (l1 || l2 || carry) {
      let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      carry = Math.floor(sum / 10);
      currentNode.next = new ListNode(sum % 10);
      currentNode = currentNode.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
  }
  return result.next;
};
