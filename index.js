
function writeCards(names, event) {
    let cardContent = [];
    for (let i = 0; i < names.length; i++) {
        cardContent.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cardContent
}

function countDown(n) {
    let i = n;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}