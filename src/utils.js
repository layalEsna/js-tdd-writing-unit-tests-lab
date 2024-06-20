// Your code here
export function isPalindrome(str) {
    if (str === '') {
        throw new Error('Input string is Empty!')
    }
    const st = str.toLowerCase()
    const st2 =st.split('').reverse().join('')
    if (st === st2) {
        return true
    } else {
        return false
    }
}
