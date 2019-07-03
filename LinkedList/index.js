import eq from '../Eq/eq'

/**
 * @method push(element)
 * @method insert(element,position)
 * @method getElementAt(index)
 * @method remove(element)
 * @method indexOf(element) 返回链表在元素中的索引
 * @method removeAt(position)
 * @method isEmpty() ture or false
 * @method size()
 * @method toString() 想着返回 1->2->3这种格式
 * 
 * 
 */
class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}

export class LinkedList {
  constructor(eqFn = eq) {
    this.count = 0
    this.head = undefined
    this.eqFn = eqFn
  }
  push(element) {
    if(!this.head) {
      this.head = new Node(element)
    } else {
      let node = this.head
      while(node.next) {
        node = node.next
      }
      node.next = new Node(element)
    }
    this.count++
  }
  removeAt(index) {
    debugger
    if(index >= 0 && index <= this.count) {
      let current = this.head
      if(index === 0) {
        this.head = current.next
      } else {
        let previous
        for(let i = 0; i < index; i++) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.count--;
      return current.element
    }
    return current.element
  }
}

const linkedList = new LinkedList()
linkedList.push(3)
linkedList.push(4)
linkedList.push(5)

linkedList.removeAt(1)
console.log(linkedList)