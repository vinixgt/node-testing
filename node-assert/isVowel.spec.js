const assert = require('assert');
const isVowel = require('.');

const tests = [];
const test = (name, fn) => {tests.push({name, fn})};

let failures = 0;
test('isVowel returns true for input "a"', () => {
    assert.ok(isVowel('a'));
});


test('isVowel returns false for input "c"', () => {
    assert.equal(isVowel('c'), false);
});

tests.forEach(({ name, fn}) => {
    console.log(name);
    try {
        fn();
    } catch (error) {
        console.error(`Expected ${error.expected} but got ${error.actual}`);
        failures++;
    }
});

if(failures > 0) {
    console.log('Test failed');
    return process.exit(1);
}
return process.exit(0);