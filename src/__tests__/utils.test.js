// Your tests here

import { isPalindrome } from '../utils'

describe('isPalindrome', () => {
    it('returns true if the string is palindrome',
        () => {
            const word1 = 'mom'
            const result = isPalindrome(word1)
            expect(result).toBe(true)
            
        })
        it('returns false if the string is not palindrome',
        () => {
            const word1 = 'door'
            const result = isPalindrome(word1)
            expect(result).toBe(false)
            
            })
            it('returns true if the string is palindrome and contains lower case and upper case',
            () => {
                const word1 = 'Racecar'
                const result = isPalindrome(word1)
                expect(result).toBe(true)
                
                })
                it("throws an error if the input is an empty string", () => {
                    const word = "";
                
                    expect(() => isPalindrome(word)).toThrow();
                  });
                
        
        
})