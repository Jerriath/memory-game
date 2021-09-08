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

export function displayLoading() {
    console.log("loading");
    let loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.display = "block";
}

export function removeLoading() {
    console.log("unloading");
    let loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.display = "none";
}