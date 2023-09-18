function isPalindrome(str) {
    // Remove spaces and convert to lowercase
    str = str.replace(/\s/g, '').toLowerCase();
  
    // Compare the original string with its reverse
    const reversedStr = str.split('').reverse().join('');
    
    return str === reversedStr;
  }

  const inputString1 = 'tacocat';
  const inputString2 = 'racecar';
  const inputString3 = 'tenet';
  const Palindromed1 = isPalindrome(inputString1);
  const Palindromed2 = isPalindrome(inputString2);
  const Palindromed3 = isPalindrome(inputString3);
  console.log(Palindromed1);
  console.log(Palindromed2);
  console.log(Palindromed3);