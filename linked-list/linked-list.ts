class Node<TElement> {
  public prev?: Node<TElement>;
  public next?: Node<TElement>;
  public readonly curr: TElement;

  constructor(value: TElement) {
    this.curr = value;
  }
}

export class LinkedList<TElement> {
  private start?: Node<TElement>;
  private end?: Node<TElement>;

  public push(element: TElement): void {
    const node = new Node(element)
    if (this.end) {
      this.end.next = node;
      node.prev = this.end;
    } else {
      this.start = node;
    }
    this.end = node;
  }

  public pop(): TElement {
    if (!this.end) throw new Error("Can not pop an empty LinkedList.");
    const nodeToPop = this.end;
    this.end = nodeToPop.prev;
    if (this.end) {
      this.end.next = undefined;
    } else {
      this.start = undefined;
    }
    return nodeToPop.curr;
  }

  public shift(): TElement {
    if (!this.start) throw new Error("Can not shift an empty LinkedList.");
    const nodeToShift = this.start;
    this.start = nodeToShift.next;
    if (this.start) {
      this.start.prev = undefined
    } else {
      this.end = undefined;
    }
    return nodeToShift.curr;
  }

  public unshift(element: TElement): void {
    const node = new Node(element);
    if (this.start) {
      this.start.prev = node;
      node.next = this.start;
    } else {
      this.end = node;
    }
    this.start = node;
  }

  public delete(element: TElement): void {
    let nodeToDelete = this.start;
    while (nodeToDelete) {
      if (nodeToDelete.curr === element) {
        if (nodeToDelete.prev) nodeToDelete.prev.next = nodeToDelete.next;
        if (nodeToDelete.next) nodeToDelete.next.prev = nodeToDelete.prev;
        if (nodeToDelete === this.start) this.start = undefined;
        if (nodeToDelete === this.end) this.end = undefined;
        break;
      }
      nodeToDelete = nodeToDelete.next;
    }
  }

  public count(): number {
    let counter = 0;
    let nodeCurr = this.start;
    while (nodeCurr) {
      counter++
      nodeCurr = nodeCurr.next;
    }
    return counter;
  }
}
