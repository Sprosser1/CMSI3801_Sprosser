function PalindromePermutation(str) {
    // Remove spaces and convert to lowercase
    str = str.replace(/\s/g, '').toLowerCase();
  
    // Create a frequency map for characters
    const charCount = new Map();
  
    // Count the frequency of each character
    for (let char of str) {
      if (charCount.has(char)) {
        charCount.set(char, charCount.get(char) + 1);
      } else {
        charCount.set(char, 1);
      }
    }
  
    // Count how many characters have odd frequencies
    let oddCount = 0;
  
    for (let count of charCount.values()) {
      if (count % 2 !== 0) {
        oddCount++;
      }
    }
  

    return oddCount <= 1;
  }

console.log(PalindromePermutation("Sator"));
console.log(PalindromePermutation("Arepo"));
console.log(PalindromePermutation("Tenet"));
console.log(PalindromePermutation("Opera"));
console.log(PalindromePermutation('Rotas'));