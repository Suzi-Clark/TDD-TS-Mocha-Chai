export default function vowelCount(text: string): number | string {
  if (typeof text === "string") {
    const lettersArray = text.toLowerCase().split("");
    const vowels = lettersArray.filter(checkVowel);
    function checkVowel(letter: string) {
      return (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
      );
    }
    return vowels.length;
  } else {
    return text + " is not a valid input";
  }
}
