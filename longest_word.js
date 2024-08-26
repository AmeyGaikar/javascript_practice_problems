function longestWord(sen) {
    //splitting the given sentence to the array of words from sentence.
    const senToWord = sen.split(" ");
    //setting the biggest word as an empty string so that the program recognixes it as an string
    let biggestWord = " ";

    //setting the length of biggest word 1 as an dummy value to compare it to the rest of the data
    let biggestWordLen = 1;

    //implementing logic to find the biggest word.
    for (i = 0; i < senToWord.length; i++) {
        
        if(senToWord[i].length >= biggestWordLen) {
            biggestWordLen = senToWord[i].length;
            biggestWord = senToWord[i];
        }
    }

    return biggestWord;

}

console.log(longestWord("havannnna una nai"));