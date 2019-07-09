import { LinkedList, Node } from '../LinkedList'

class StackInLinkedList extends LinkedList {
  push(element) {
    if(this.size() === 0) {
      this.head = new Node(element)
    } else {
      let cur = this.head
      while(cur.next) {
        cur = cur.next
      }
      cur.next = new Node(element)
    }
    this.count++
  }
  pop() {
    this.removeAt(this.size() - 1)
  }
}

console.log('_______________stackLinedList________-')
const stack = new StackInLinkedList()
stack.push(2)
stack.push(3)
stack.push(1)
// stack.pop()
// stack.pop()
console.log(stack.toString())


