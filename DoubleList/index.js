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
    this.tail = undefined
  }
  insert(element,index) {
    // 先判断index的序列,0,最后和中间
    if(index >= 0 && index <= this.count) {
      let node = new DoubleNode(element)
      if(index === 0) {
        if(!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          this.head.previous = node
          this.head = node
        }
      } else if(index === this.count) {
        let cur = this.head
        while(cur.next) {
          cur = cur.next
        }
        cur.next = node
        node.previous = cur
      } else {
        const cur = this.head
        let last
        for(let i = 0; i < index; i++) {
          last = cur
          cur = cur.next
        }
        node.next = cur
        cur.previous = node 
        node.previous = last
        last.next = node
      }
      this.count++
      return true
    }
    return false
  }
  remove(index) {
    if(index >= 0 && index < this.count) {
      let cur = this.head
      if(this.size() === 1) {
        this.head = null
        this.tail = null
      } else if(this.size() === 0) {
        return false
      } else {
        if(index === 0) {
          this.head = cur.nex
        } else if(index === this.count - 1) {
          this.tail = this.tail.previous
        } else {
          for(let i = 0; i < index; i++) {
            const next = cur.next
            const pre = cur.previous
            pre.next = next
            next.previous = pre
          }
        }
      }
      this.count--
    }
    return false
  }
}

const doubleLinkedList = new DoubleLinkedList()
// doubleLinkedList.push(1)
// doubleLinkedList.push(3)
// doubleLinkedList.push(2)
// console.log(doubleLinkedList.toString())
doubleLinkedList.insert(1,0)
doubleLinkedList.insert(2,1)
doubleLinkedList.insert(3,2)
doubleLinkedList.insert(5,0)
doubleLinkedList.insert(88,4)
console.log(doubleLinkedList.toString())
