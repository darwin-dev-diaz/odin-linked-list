function createLinkedList() {
  let linkedList = {};
  const getLinkedList = () => {
    return linkedList;
  };

  const appendNode = (value) => {
    if (Object.values(linkedList).length === 0) {
      linkedList = createNode(value);
    } else {
      let currentNode = linkedList;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = createNode(value);
    }
  };

  const prependNode = (value) => {
    if (Object.values(linkedList).length === 0) {
      linkedList = createNode(value);
    } else {
      linkedList = createNode(value, linkedList);
    }
  };

  const size = () => {
    if (!linkedList.next) return 0;

    let counter = 1;
    let currentNode = linkedList;
    while (currentNode.next) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  };

  const head = () => {
    return linkedList;
  };

  const tail = () => {
    let currentNode = linkedList;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };
  const at = (index) => {
    let currentNode = linkedList;
    while (index > 0) {
      currentNode = currentNode.next;
      index--;
      if (!currentNode.next) return null;
    }
    return currentNode;
  };

  const pop = () => {
    if (!linkedList.next) {
      linkedList = {};
    } else {
      let currentNode = linkedList;
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
    }
  };

  const contains = (value) => {
    let currentNode = linkedList;
    while (true) {
      if (currentNode.value === value) return true;
      if (!currentNode.next) break;
      currentNode = currentNode.next;
    }
    return false;
  };
  const find = (value) => {
    let currentNode = linkedList;
    let index = 0;
    while (true) {
      if (currentNode.value === value) return index;
      if (!currentNode.next) break;
      currentNode = currentNode.next;
      index++;
    }
    return null;
  };
  const toString = () => {
    let currentNode = linkedList;
    let returnString = "";
    while (true) {
      returnString = returnString + `( ${currentNode.value} ) -> `;
      if (!currentNode.next) break;
      currentNode = currentNode.next;
    }
    return returnString + "null";
  };
  const insertAt = (value, index) => {
    try {
      let currIndex = 0;
      let previousNode = null;
      let currentNode = linkedList;
      while (currIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currIndex++;
      }

      if (previousNode) {
        previousNode.next = createNode(value, currentNode);
      } else {
        linkedList = createNode(value, linkedList);
      }
    } catch {
      console.log("Error: Invalid index");
      return;
    }
  };

  const removeAt = (index) => {
    try {
      let currIndex = 0;
      let previousNode = null;
      let currentNode = linkedList;
      let afterNode = currentNode.next;
      while (currIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        afterNode = currentNode.next;
        currIndex++;
      }
      if (!previousNode) {
        if (afterNode) linkedList = afterNode;
        else linkedList = {};
      } else {
        previousNode.next = afterNode;
      }
    } catch {
      console.log("Error: Invalid index for removeAt() function");
    }
  };

  return {
    getLinkedList,
    appendNode,
    prependNode,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

function createNode(value = null, next = null) {
  return { value, next };
}

const l = createLinkedList();
l.appendNode("A"); // 0
l.appendNode("B"); // 1
l.appendNode("C"); // 2
l.appendNode("D"); // 3
// l.appendNode("E"); // 4
// l.appendNode("F"); // 5
// l.appendNode("G"); // 6
// l.appendNode("H"); // 7
l.removeAt(1);
console.log(l.getLinkedList());
