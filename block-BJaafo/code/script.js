function fullName(firstName, lastName) {
 return firstName + " " + lastName;
}

let expectedOutput = fullName("rahul", "kumar");
let result = fullName("rahul", "raushan");

try{
    if(expectedOutput !== result){
        throw new Error(`${result} is not equal to ${expectedOutput}`);
    }
    if(expectedOutput !== result+ " " + "raushan"){
        throw new Error(`${result + " " + "raushan"} is not equal to ${expectedOutput }`);
    }
} catch(error){
console.log(error)
}



// No, we cant see the output of the second test if the the first test throws an error.

function totolAmount(amount, taxrate){
    return amount + (amount*taxrate);
} 
let finalResult = totolAmount(100, 10)
let expectedResult = 1000; 
// if( finalResult !== expectedResult){
//     throw new Error(`${expectedResult} is not equal to ${finalResult}`)
// }
if( finalResult + 150 !== expectedResult){
    throw new Error(`${expectedResult} is not equal to ${finalResult + 150 }`)
}