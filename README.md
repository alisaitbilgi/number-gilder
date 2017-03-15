# number-gilder


$ npm install number-gilder --save


An integer converter function which changes ugly numbers to more readable "strings".

Converter(number, digit);  // (takes two arguments)


(first) number: the ugly number which to be converted

(second) digit: number of float digits wanted to be seen after conversion.


example usage:

var Converter = require("number-gilder");

var thousands = 1768;

var millions = 4603402;

var billions = 78474863456;

var trillions = -5732148182097;


1) Converter(thousonds);      //  returns 1.8k 

2) Converter(millions, 1);    //  returns 4.6m

3) Converter(billions, 3);    //  returns 78.475b

4) Converter(trillions, 2);   //  returns -5.73t


Second parameter is optional and it's "1" as default.

Remember: Converter function also "rounds" the float part of the number (check examples "1" and "3")

and it returns a string, not an integer. (works for both positive and negative integer values)


Extra case:


var number = 10005;

Converter(number, 1);   //  returns 10k 

Although it's expected 10.0k as result, Converter will print 10k. This means, if the last digit

of the floating part is "0" the Converter will ommit that to have a better view.

However, if you want to see it:

Converter(number, 2);  // now prints 10.0k

