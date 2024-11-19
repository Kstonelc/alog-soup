class SoupNode {
  constructor(value) {
    this.value = value; // 节点存储的数据
    this.next = null; // 指向下一个节点的指针
  }
}

export class SoupLinkedList {
  constructor() {
    this.head = null; // 链表头节点
    this.size = 0; // 链表长度
  }

  // 添加节点到链表尾部
  append(value) {
    const newNode = new SoupNode(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  getList() {
    const values = [];
    let currentNode = this.head;

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values;
  }

  // 遍历链表
  traverse() {
    let traverseList = [];
    if (this.head === null) {
      console.log("[AlgoSoup]: Empty linked list");

      return;
    }

    let current = this.head;

    while (current !== null) {
      console.log("[AlgoSoup]: current Node value: ", current.value);
      traverseList.push(current.value);
      current = current.next; // Move to the next node
    }

    return traverseList;
  }

  // 在指定位置插入节点
  insert(value, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }
    const newNode = new SoupNode(value);

    if (index === 0) {
      // 插入到头部
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        // 找到插入点
        previous = current;
        current = current.next;
        i++;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
  }

  // 删除指定位置的节点
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    let current = this.head;

    if (index === 0) {
      // 删除头节点
      this.head = current.next;
    } else {
      let previous = null;
      let i = 0;

      while (i < index) {
        // 找到要删除的节点
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = current.next; // 跳过当前节点
    }
    this.size--;

    return current.value;
  }

  // 查找指定值的节点
  find(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null; // 未找到返回 null
  }

  // 打印链表
  print() {
    let result = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }

  // 获取链表长度
  getSize() {
    return this.size;
  }
}
