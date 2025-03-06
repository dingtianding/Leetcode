/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
        return function(): string {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */