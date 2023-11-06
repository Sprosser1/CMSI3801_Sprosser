// Define a closure that increases the click counter
const updateClickCount = (function () {
    let count = 0;

    return function () {
        count++;
        console.log("Click count: " + count);
    };
})();

// Example: Call updateClickCount to increase the click counter
updateClickCount();
updateClickCount();
