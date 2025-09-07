function abc(fn) {
    callBack()
}

function callBack() {
    console.log('I am a call back function');
}

// abc("fn")


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 5];
function duplicate(array) {
    let newArray = [];
    let n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (array[i] == array[j]) {
                newArray.push(array[i]);
            }
        }
    }
    return newArray;
}

// console.log(duplicate(array));


