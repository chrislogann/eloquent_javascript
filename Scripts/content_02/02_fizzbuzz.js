
/*
script to print numbers from 0 to 100, but for multiples of 3 print "Fizz" instead of the number, for multiples of 5 print "Buzz", and for multiples of both 3 and 5 print "FizzBuzz".
*/


let i = 0
while (i <= 100){

    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        i++;
        continue;
    }

    if (i % 3 === 0){
        console.log("Fizz");
        i++;
        continue;
    }

    if (i % 5 === 0){
        console.log("Buzz");
        i++;
        continue;
    }

    console.log(i);
    i++;

}





