// Code your solutions in this file



function writeCards(nameArray, eventName) {
    let finalNames = []
    for (let i = 0; i < nameArray.length; i++) {
        finalNames.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return finalNames
}

function countDown(number) {
    let count = 0
    while (count <= number)
        console.log(number - count++)
}