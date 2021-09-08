export function checkClicked(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false) {
            return false;
        }
    }
    return true;
}

export function fillFalse(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = false;
    }
}