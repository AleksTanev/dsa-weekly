const removeDuplicatesFromLL = (head) => {

  let current = head;

  while (current.next) {

    if (current.value === current.next.value) {
      current.next = current.next.next || null;
      continue;
    }
    current = current.next;
  }

  return head;
}


const linkedList = { value: 1, next: { value: 2, next: { value: 2, next: { value: 2, next: { value: 4, next: { value: 4, next: null }}}}}}

console.log(removeDuplicatesFromLL(linkedList));