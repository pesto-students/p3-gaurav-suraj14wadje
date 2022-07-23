const VOWELS = "aeiou";

function isVowel(char){
    return VOWELS.includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    for(vowel of VOWELS){
        vowelMap[vowel]=0;
    }

    for(let ch of str){
        ch = ch.toLowerCase();
        if(isVowel(ch)){
            vowelMap[ch]++;
        }
    }

    return vowelMap;
}

console.log(vowelCount("Hello World! How is it going?"))

//output
// Map(0) { a: 0, e: 1, i: 3, o: 4, u: 0 }