// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
document.write('hello'.toUpperCase())

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var sentence = 'good afternoon, mr mike.'

sentence = sentence.toUpperCase().split(" ");

for (var i = 0; i < sentence.length; i++){
sentence[i] = sentence[i].charAt(0) + sentence[i].substring(1).toLowerCase(); 
}


console.log(sentence.join(' '));


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var money = money.substring(1);
console.log(money);
