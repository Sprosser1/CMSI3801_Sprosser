class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function isPalindrome(head) {
    // Reverse an array
    function reverseArray(arr) {
      return arr.slice().reverse();
    }
  
    let values = [];
    let currentNode = head;
  
    // Traverse the linked list and push values into the array
    while (currentNode !== null) {
      values.push(currentNode.val);
      currentNode = currentNode.next;
    }
  
    // Create a reverse of the array
    let reversedValues = reverseArray(values);
  
    // Compare the original array with its reverse
    for (let i = 0; i < values.length; i++) {
      if (values[i] !== reversedValues[i]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  // Create a palindrome linked list: 1 -> 2 -> 3 -> 2 -> 1
  const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1)))));
  console.log(isPalindrome(list)); // true
  
  // Create a non-palindrome linked list: 1 -> 2 -> 3 -> 4
  const nonPalindromeList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
  console.log(isPalindrome(nonPalindromeList)); // false