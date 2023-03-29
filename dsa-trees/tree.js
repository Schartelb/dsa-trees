/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0
    let toVisitQueue = [this.root];
    while (toVisitQueue.length && toVisitQueue[0] !== null) {
      let current = toVisitQueue.shift();
      sum += current.val
      if (current.children) {
        for (let child of current.children)
          toVisitQueue.push(child)
      }
    }
    return sum
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0
    let toVisitQueue = [this.root];
    while (toVisitQueue.length && toVisitQueue[0] !== null) {
      let current = toVisitQueue.shift();
      if (current.val % 2 == 0) { count +=1 }
      if (current.children) {
        for (let child of current.children)
          toVisitQueue.push(child)
      }
    }
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0
    let toVisitQueue = [this.root];
    while (toVisitQueue.length && toVisitQueue[0] !== null) {
      let current = toVisitQueue.shift();
      if (current.val >lowerBound) { count +=1 }
      if (current.children) {
        for (let child of current.children)
          toVisitQueue.push(child)
      }
    }
    return count
  }
}

module.exports = { Tree, TreeNode };
