/*
  Write a function `reve` which takes a string as input and returns the reversed version of the string.

  What is reversing a string?
  - Reversing a string means rearranging its characters in the opposite order.

  Example:
  - Input: "Sumana"
  - Output: "anamuS"

  - Input: "hello"
  - Output: "olleh"

  - Input: ""
  - Output: ""

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseString`
*/

function swap(arr ,index1 , index2)
{
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function reverseString(str) {
  let arr = str.split('');
  let s = 0;
  let e = str.length - 1;

  while(s < e){
    swap(arr, s , e)
    s++;
    e--;
  }
  return arr.join('');
}

module.exports = reverseString;
