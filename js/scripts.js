$(document).ready(function () {
  const sentence = prompt("Give us a sentence: ");
  console.log(sentence);
  console.log(sentence.firstAndLast);
  function firstAndLast(sentence) {
    const firstLetter = sentence.charAt(0);
    const lastLetter = sentence.charAt(sentence.length - 1)
  }

});