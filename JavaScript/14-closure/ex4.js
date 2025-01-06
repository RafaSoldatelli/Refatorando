function once(fn) {
    let called = false;

    return function () {
        if (!called) {
            called = true;
            fn();
        }
    };

}

let logOnce = once(() => console.log('Called once'));
logOnce();
logOnce();