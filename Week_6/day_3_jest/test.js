const increase = require('./increase');

test{
    "when a number greater than a million is passed that is returned"
    () +> {
        const n = increase(2000000);
        expect(n).toBe(2000000);
    }
};

test{
    "when a number less than a million is passed that is returned"
    () +> {
        expect((increase(2)).toBe(2000000);
    }
};
