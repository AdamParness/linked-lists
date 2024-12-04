class Node{
    constructor(value=null, nextNode=null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        // Create a new node with the given value
        const newNode = new Node(value);
    
        // If the list is empty, set both head and tail to the new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the list is not empty, add the new node after the current tail
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    
        // Increment the length of the list
        this.length++;
    
        // Return the entire list (optional, but can be useful)
        return this;
    }

    prepend(value) {
        // Create a new node with the given value
        const newNode = new Node(value);
    
        // If the list is empty, set both head and tail to the new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Set the new node's next pointer to the current head
            newNode.nextNode = this.head;
            // Update the head to be the new node
            this.head = newNode;
        }
    
        // Increment the length of the list
        this.length++;
    
        // Return the entire list (optional, but allows for method chaining)
        return this;
    }

    size(){
        return this.length;
    }

    head(){
        return this.head;
    }

    tail(){
        return this.tail;
    }

    at(index) {
        // Check if the index is out of bounds
        if (index < 0 || index >= this.length) {
            return null;  // Or you could throw an error
        }
    
        // Start at the head of the list
        let current = this.head;
    
        // Traverse to the desired index
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
    
        return current;
    }

    pop() {
        // Check if the list is empty
        if (!this.head) {
            return null;
        }
    
        // If there's only one node
        if (this.head === this.tail) {
            const nodeToRemove = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return nodeToRemove;
        }
    
        // Traverse to find the second-to-last node
        let current = this.head;
        while (current.nextNode !== this.tail) {
            current = current.nextNode;
        }
    
        // Store the last node to return
        const nodeToRemove = this.tail;
    
        // Update the tail to be the second-to-last node
        this.tail = current;
        // Remove the connection to the last node
        this.tail.nextNode = null;
    
        // Decrement the length
        this.length--;
    
        return nodeToRemove;
    }

    contains(value) {
        // Start at the head of the list
        let current = this.head;
    
        // Traverse the entire list
        while (current !== null) {
            // Check if the current node's value matches the search value
            if (current.value === value) {
                return true;
            }
            // Move to the next node
            current = current.nextNode;
        }
    
        // If we've gone through the entire list without finding the value
        return false;
    }

    find(value) {
        // Start at the head of the list
        let current = this.head;
        
        // Keep track of the current index
        let index = 0;
    
        // Traverse the entire list
        while (current !== null) {
            // Check if the current node's value matches the search value
            if (current.value === value) {
                return index;
            }
            
            // Move to the next node
            current = current.nextNode;
            
            // Increment the index
            index++;
        }
    
        // If we've gone through the entire list without finding the value
        return null;
    }

    toString() {
        // If the list is empty, return a string representing an empty list
        if (!this.head) {
            return "null";
        }
    
        // Initialize an array to build the string representation
        let result = "";
        let current = this.head;
    
        // Traverse the list and build the string
        while (current !== null) {
            // Add the current node's value in the specified format
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
    
        // Add 'null' at the end to complete the representation
        result += "null";
    
        return result;
    }
}


const list = new LinkedList();
list.append(5);
list.append(10);
list.prepend(0);
list.append(15);

console.log(list.toString());  
console.log(list.size());
console.log(list.head);
console.log(list.tail);
