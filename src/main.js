// This file creates the input menu and interface

import { createInterface } from 'readline'
import { modThree } from './modThree.js'

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
})

const readLineAsync = msg => {
    return new Promise(resolve => {
        readline.question(msg, userRes => {
        resolve(userRes);
        });
    });
}

const main = async () => {
    const input = await readLineAsync('Enter binary value: ')

    const output = modThree(input)

    console.log(`The modulo three remainder of ${input} is ${output}`)
    readline.close()
}

main()
