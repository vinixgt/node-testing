const { expect } = require('@jest/globals');
const { isVowel, countVowels } = require('.');

describe('isVowel', () => {
    it('should throws when hasn\'t parameter', () => {
        expect(() => isVowel()).toThrow(TypeError);
    });

    it('should throws when string length is > 1', () => {
        expect(() => isVowel('aaa')).toThrow(Error);
    });

    it('should returns true for input "a"', () => {
        expect(isVowel('a')).toBeTruthy();
    });  
    
    it('should returns false for input "c"', () => {
        expect(isVowel('c')).toBe(false);
    });
});

describe('countVowels', () => {
    it('should...', () => {
        expect(countVowels('abc')).toEqual({ a: 1, e: 0, i: 0, o: 0, u: 0 });
    });
});