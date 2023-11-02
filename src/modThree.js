// Class object for each not of our Finite State Machine
class Node {
    // Output is the value each node returns (0, 1, 2)
    // state is the current node name (S0, S1, S2)
    constructor(output, state) {
        this.next0 = null
        this.next1 = null
        this.output = output
        this.state = state
    }
}

export const modThree = (binary) => {
    // Return if the input is not a string
    if(typeof binary !== 'string') {
        return 'Invalid input'
    }

    // Initialize the 3 nodes with their state and what they output
    let S0 = new Node('0', 'S0')
    let S1 = new Node('1', 'S1')
    let S2 = new Node('2', 'S2')

    // Set the pointers for each node
    S0.next0 = S0
    S0.next1 = S1

    S1.next0 = S2
    S1.next1 = S0

    S2.next0 = S1
    S2.next1 = S2

    // Create the current node which will start at S0 and move based on the input
    let curr = S0

    //Loop through each number and move based on 0 or 1 for each node
    // Return in any of the characters in the string are not 0 or 1
    for(let i in binary) {
        if(binary[i] === '0') curr = curr.next0
        else if(binary[i] === '1') curr = curr.next1
        else {
            return 'Invalid input'
        }
    }

    // Return the value of the node after traversal
    return curr.output
}
