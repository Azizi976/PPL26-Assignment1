import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */

/* 
    Auxilary function:
    input: char
    output: true if the char is a vowl, false otherwise
*/

const isVowel = (char: string): boolean => {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}

/*
    Main function: pipe the 3 functions: first, deconstruct the given string into an array,
    then filter only vowls chars, at last, return the number of char vowls.
*/

export const countVowels: (s: string) => number = R.pipe(
    stringToArray,
    R.filter(isVowel),
    R.length
);

/* Question 2.2 */

/* 
    Auxilary function:
    input: string[]
    output: true if the string is symetric, false otherwise
*/

const isSymmetric = (chars: string[]): boolean => {
    return chars.every((char: string, index: number) => {
        return char === chars[chars.length - 1 - index];
    });
};
/*
    Main function: pipe the 3 functions: first set the string to lowerCase only,
    then deconstruct the given string into an array,afterwards,
    filter spaces and punctuation,and at last, check if symmetric and return T\F.
*/

export const isPalindrome: (text: string) => boolean = R.pipe(
    (txt: string) => txt.toLowerCase(),
    stringToArray,
    R.filter((char: string) => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')),
    isSymmetric
);


/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

/*
    Main function: recursively concat root.string into his children string,
    resulting pre order traversasl sentance. 
    (using join(" ") to merge words into one string and concat to merge arrays)
*/

export const treeToSentence = (t: WordTree): string => {
    return [t.root].concat(t.children.map(treeToSentence)).join(" ");
};
