const countries = require('./countries');

test("Does an empty string returngs an empty array?", () => {
    expect(countries.find("")).toEqual([]);
});

test("When passed a letter, it returns array length of 4", () => {
    expect(countries.find("a").length).toBe(4);
});

test("does a capital letter returns the same result?", () => {
    expect(countries.find("A").length).toBe(4);
});

test("passing a string that shoudl return no results", () => {
    expect(countries.find("Abcdefghijkl")).toEqual([]);
});
