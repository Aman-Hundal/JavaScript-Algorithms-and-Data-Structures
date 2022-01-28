/* Problem Solving Approach:

Write a function which takes two numbers and returns their sum
Understand the Problem
1. Write a function that takes in two numbers as inputs and returns an output of their total (ie. n1,n2 inputs, n1+n2 = output)
2. inputs that go into problem -> n1 and n2 (two numbers). Any number? What are the upper bounds in JS? Figure this out. Also are we only working with 2 inputs? What if a user adds in more inputs -> how will our function work?
3. Output should look like a number (integer?, float?, string?, should the function check to see what the input is and then return the same type as the inputs?, what if a float and int is passed in? whats the ouput?- > a float or int?)
4. Yes the outputs can be determined from the inputs. What is user passes in only 1 input (make the second input 0, do we return undefined? ASK THE INTERVIEWER)
5. functionName = add, inputs = n1 and n2, output = sum. these are the names we will use for the important pieces of data

Write a function which takes in a string and returns counts of each character in the string
Explore Concrete Examples
1. Simple Examples
  - charCount('aaa'); returns {a:4}
  - charCount('hello'); returns {h:1, e: 1, l:2, o:1}
  - question that comes from this -> do we return chars that dont show up? ie. {z:0}

2. more complex exmaples:
  - charCount('My phone number is 12453')
  - do we include numbers? symbols?
  - do we ignore casing? ie. m vs M

3/4. charCount(null), charCount(), charCount(""), charCount(2)
  - do we reutrn error, empty object, null, undefined?

Break it Down
We have concluded that we only care about lower case and numbers and letters (ignore spaces and symbols)
1. write down skeleton of function ->
const charString(string) => {
}
2. Pseudo Code Steps:
  - create an empty result object and lower case your string entirely
  - use a for loop and loop over every character in string and add it to your object.
    - if character is a number/char and exists in obj as key,  +=1 to value of char
    - if character is a number/char and does not exist in obj as a key, add it to obj and set value of char is = 1
    - if character is not a number/char (spac,e period etc) - do nothing (no need for ifstatement or else)
  - return your result object 


Simplify/Solve The Problem (CODE your solution)
1. difficulties (potential) - you are not comfortable with working with upper and lower case string (what method lower or upper cases a string) - focus on this at end. Start with main logic and say out loud that you cant rmb the method and will get back to it later and proceeed to tack;le problem with both upper and lower. Remeber to say WHAT YOU WOULD DO THOUGH
deciphering between alphanumerics (number and letter) from everyhting else (ignore this till end, first just add in main logic and solve)
2. start solving problem by ignoring the alphanumeric problem and the upper case problem
3. CODE solution
4. if your soltuion works, now incorporate/solve the alphanumeric and upper case problem. Add soltuions and talk out loud what you want to do and think you can do. Spitball solutions and talk it through with interviewer (is there a method? or built in JS method, create a [ABC array] and confirm if character is in the array in your if statements, regex? ASKE codes?)

Last Step -> Look Back and Refactor!
*/