/* FizzBuzz */

let c = 0

while (c < 100 ) {
    if ((c % 3 == 0) && (c % 5 == 0)){
        console.log(c, 'Fizzbuzz');
        c += 1
    }else if (c % 3 == 0){
        console.log(c, 'Fizz');
        c += 1
    }else if (c % 5 == 0){
        console.log(c, 'buzz')
        c += 1
    }else{
        console.log(c)
        c += 1
    }
}


