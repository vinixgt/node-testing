const isVowel = require('.');

describe('isVowel', () => {
    it('should returns true for input "a"', () => {
        expect(isVowel('a')).toBe(true);
    });
    
    
    it('should returns false for input "c"', () => {
        expect(isVowel('c')).toBe(false);
    });
});

