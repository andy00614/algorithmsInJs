import { Node, LinkedList } from '../LinkedList'

class DoubleNode extends Node {
  constructor(element) {
    super(element) 
    this.previous = null
  }
}

export class DoubleLinkedList extends LinkedList {
  constructor(eqFn) {
    super(eqFn)
  }
}

const doubleLinkedList = new DoubleLinkedList()
doubleLinkedList.push(1)
doubleLinkedList.push(3)
doubleLinkedList.push(2)
console.log(doubleLinkedList.toString())