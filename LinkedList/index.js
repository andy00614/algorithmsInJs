import eq from '../Eq/eq'

/**
 * @method push(element)1
 * @method insert(element,position)1
 * @method getElementAt(index)1
 * @method remove(element)1
 * @method indexOf(element)1 返回链表在元素中的索引
 * @method removeAt(position)1
 * @method isEmpty() 1ture or false
 * @method size() 1
 * @method toString() 1 想着返回 1->2->3这种格式
 * 
 * 
 */
export class Node {
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
    // debugger
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
  /*removeAt(index) {
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
  }*/
  removeAt(index) {
    if(index >= 0 && index < this.count) {
      let current = this.head
      let previous
      for(let i = 0; i < index; i++) {
        previous = current
        current = current.next
      }
      // current会被垃圾回收
      previous.next = current.next
      this.count--
    } else {
      return false
    }
  }
  toString() {
    let str = ''
    let cur = this.head
    // debugger
    while(cur.next) {
      str += cur.element + '->'
      cur = cur.next
    }
    str += cur.element
    // TODO:可以思考一下for的循环次数和while的循环次数的不同
    // for(let i = 0 ;i < this.count; i++) {
    //   str += cur.element + '->'
    //   cur = cur.next
    // }
    return str
  }
  // remvoe的for实现方法
  /*remove(element) {
    if(this.head.element === element) {
      this.head = this.head.next
    } else {
      let previous = this.head
      for(let i = 0 ; i < this.count - 1; i++) {
        const cur = previous.next
        if(cur.element === element) {
          previous.next = cur.next
          return element
        }
        previous = cur
      }
      return false
    }
  }*/
  // remove的while实现方法
  remove(element) {
    if(this.head.element === element) {
      this.count--
      this.head = this.head.next
      return element
    } else {
      let previous = this.head
      let current = previous.next
      while(current.element) {
        if(current.element === element) {
          previous.next = current.next
          this.count--
          return element
        }
        previous = current
        current = current.next
      }
      return false
    }
  }
  getElementAt(index) {
    if(index >=0 && index < this.count) {
      let current = this.head
      for(let i = 0; i < index; i++) {
        current = current.next
      }
      return current.element
    }
    return false
  }
  indexOf(element) {
    let current = this.head
    for(let i = 0; i < this.count; i++) {
      if(current.element === element) {
        return i
      }
      current = current.next
    }
    return false
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
}

window.linkedList = new LinkedList()
console.log('isEmpty',linkedList.isEmpty())
linkedList.push(3)
console.log('size',linkedList.size())
console.log('isEmpty',linkedList.isEmpty())
linkedList.push(4)
linkedList.push(5)
console.log('isEmpty',linkedList.isEmpty())
console.log('size',linkedList.size())

// console.log(linkedList.getElementAt(2))
// linkedList.removeAt(3)
console.log('indexIs',linkedList.indexOf(5))
console.log('indexIs',linkedList.indexOf(4))
console.log('indexIs',linkedList.indexOf(4))

console.log(linkedList.remove(5))
console.log(linkedList.remove(3))
console.log(linkedList.toString())
// console.log(linkedList)