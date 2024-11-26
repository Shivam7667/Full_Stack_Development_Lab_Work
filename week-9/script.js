const counterModule = (function() {
    let count = 0; // Private variable
    return {
        increment: function() {
            count++;
            console.log('Count:', count);
        },
        reset: function() {
            count = 0;
            console.log('Count has been reset');
        }
    };
})();

counterModule.increment(); // Output: Count: 1
counterModule.increment(); // Output: Count: 2
counterModule.reset();     // Output: Count has been reset
counterModule.increment(); // Output: Count: 1
