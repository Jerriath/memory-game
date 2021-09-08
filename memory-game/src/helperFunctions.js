export function checkClicked(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false) {
            return false;
        }
    }
    return true;
}