// Define the node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Define the BST class
class BST {
  constructor() {
    this.root = null;
  }

  // Insert a new node in tree
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      // console.log(typeof current.value);
      // console.log(typeof value);
      // console.log(value < current.value);
      while (true) {
        if (value === current.value) {
          return undefined;
        }
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  // search a node value in tree
  search(value) {
    if (!this.root) {
      console.log("Root Node does not exist!!");
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) {
          return console.log(`${value} value found!!`);
        }
        if (value < current.value) {
          if (!current.left) {
            // current.left = newNode;
            return console.log(`${value} value not found!!`);
          }
          current = current.left;
        } else {
          if (!current.right) {
            // current.right = newNode;
            return console.log(`${value} value not found!!`);
          }
          current = current.right;
        }
      }
    }
  }

  // delete a node value in tree
  delete(value) {
    if (!this.root) {
      console.log("Root Node does not exist!!");
    } else {
      let parent = this.root;
      let current = this.root;
      while (true) {
        if (value === current.value && value === parent.left.value) {
          if (!current.left && !current.right) {
            parent.left = null;
            return this;
          } else {
            return console.log("Child nodes exist, not possible to delete!!");
          }
        } else if (value === current.value && value === parent.right.value) {
          if (!current.left && !current.right) {
            parent.right = null;
            return this;
          } else {
            return console.log("Child nodes exist, not possible to delete!!");
          }
        }
        if (value < current.value) {
          if (!current.left) {
            // current.left = newNode;
            return console.log(`${value} value not found!!`);
          }
          parent = current;
          current = current.left;
        } else {
          if (!current.right) {
            // current.right = newNode;
            return console.log(`${value} value not found!!`);
          }
          parent = current;
          current = current.right;
        }
      }
    }
  }

  // find a min node value in tree
  findMin() {
    if (!this.root) {
      console.log("Root Node does not exist!!");
    } else {
      let current = this.root;
      while (true) {
        if (current.left) {
          current = current.left;
        } else {
          return console.log(`${current.value} is the minimun value!!`);
        }
      }
    }
  }

  // find a min node value in tree
  findMax() {
    if (!this.root) {
      console.log("Root Node does not exist!!");
    } else {
      let current = this.root;
      while (true) {
        if (current.right) {
          current = current.right;
        } else {
          return console.log(`${current.value} is the maximum value!!`);
        }
      }
    }
  }

  // Perform in-order traversal of the tree
  inOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  // Perform pre-order traversal of the tree
  preOrderTraversal(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  }

  // Perform post-order traversal of the tree
  postOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  // Perform breadth-first traversal of the tree
  breadthFirstTraversal() {
    const queue = [];
    const result = [];

    if (this.root) {
      queue.push(this.root);
      while (queue.length > 0) {
        const current = queue.shift();
        result.push(current.value);
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }
    }
    return result;
  }

  // Display the binary search tree
  display(node = this.root, level = 0) {
    if (node) {
      this.display(node.right, level + 1);
      console.log("  ".repeat(level) + node.value);
      this.display(node.left, level + 1);
    }
  }
}

// // Create a binary search tree and insert some nodes
// const bst = new BST();
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
// bst.insert(12);
// bst.insert(17);

// // Perform in-order traversal and print the result
// console.log("In-order Traversal: " + bst.inOrderTraversal());
// // Perform pre-order traversal and display the results
// console.log("Pre-order Traversal: " + bst.preOrderTraversal());
// // Perform post-order traversal and display the results
// console.log("Post-order Traversal: " + bst.postOrderTraversal());
// // Perform breadth-first traversal and display the results
// console.log("Breadth-First Traversal: " + bst.breadthFirstTraversal());
// // Perform search operation and display the results
// // bst.search(15);

// // // Perform delete operation and display the results
// // bst.delete(15);
// // // Perform breadth-first traversal and display the results
// // console.log("Breadth-First Traversal: " + bst.breadthFirstTraversal());

// // Perform findMin operation and display the results
// bst.findMin();

// // Perform findMax operation and display the results
// bst.findMax();
export default BST;
