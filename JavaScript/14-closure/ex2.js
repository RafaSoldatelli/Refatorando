function counter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        },
    };
}

let myCounter = counter();
myCounter.increment();
console.log(myCounter.getCount());
