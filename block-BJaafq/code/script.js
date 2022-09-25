
//Add two numbers

function addTwoNumbers(numA = 0, numB = 0){
    if (!isNaN(numA) && !isNaN(numB)){
        return numA + numB;
    } else{
        console.error("put a valid input")
    }
};

function test(message, cbf){
    try {
        cbf();
        console.log(`✅`, message)
    } catch (error) {
        console.error(error);
        console.log(`❌`, message)
    }
}

function testAdd(){
    let result = addTwoNumbers(8,9);
    let expected = 15;
     if(result !== expected ){
         throw new Error(`${result} is not equal to ${expected}`);
     };
}
   test("adding 8 and 9", testAdd)


function testAdd2(){
    let result2= addTwoNumbers(9,9);
    let expected2 = 1220;
     if(result2 !== expected2 ){
         throw new Error(`${result2} is not equal to ${expected2}`);
     };
}
   test("adding 9 and 9", testAdd2)
  
    function testAdd3(){
        let result3= addTwoNumbers(9,0);
        let expected3 = 320;
        if(result3 !== expected3 ){
            throw new Error(`${result3} is not equal to ${expected3}`);
        };
    }
    
    test("adding 9 and 0", testAdd3)

    function testAdd4(){
        let result4= addTwoNumbers(5,9);
        let expected4 = 200;
         if(result4 !== expected4){
             throw new Error(`${result4} is not equal to ${expected4}`);
         };
    }
   
    test("adding 5 and 9", testAdd4)

    function testAdd5(){
        let result5= addTwoNumbers(9,98);
         let   expected5 = 107;
        if(result5 !== expected5 ){
        throw new Error(`${result5} is not equal to ${expected5}`);
    };
    }

    test("adding 9 and 98", testAdd5)


   // Multiply two numbers

function multiplyTwoNum(numA = 0, numB = 0){
if(!isNaN(numA) && !isNaN(numB)){
    return numA * numB;
} else {
    console.error("put a valid number")
}
};


function testMultiply(){
    let result = multiplyTwoNum(8,9);
    let expected = 15;
     if(result !== expected ){
         throw new Error(`${result} is not equal to ${expected}`);
     };
}
   test("multiplying 8 and 9", testMultiply)


function testMultiply2(){
    let result2= multiplyTwoNum(9,9);
    let expected2 = 1220;
     if(result2 !== expected2 ){
         throw new Error(`${result2} is not equal to ${expected2}`);
     };
}
   test("multiplying 9 and 9", testMultiply2)
  
    function testMultiply3(){
        let result3= multiplyTwoNum(9,0);
        let expected3 = 320;
        if(result3 !== expected3 ){
            throw new Error(`${result3} is not equal to ${expected3}`);
        };
    }
    
    test("multiplying 9 and 0", testMultiply3 )

    function testMultiply4(){
        let result4= multiplyTwoNum(5,9);
        let expected4 = 45;
         if(result4 !== expected4){
             throw new Error(`${result4} is not equal to ${expected4}`);
         };
    }
   
//-----------***********---------------- Fifth test
 
// first approach

  /*  test("multiplying 5 and 9", testMultiply4)

    function testMultiply5(){
        let result5 = multiplyTwoNum(9,98);
         let   expected5 = 107;
        if(result5 !== expected5 ){
        throw new Error(`${result5} is not equal to ${expected5}`);
    };
    }
    test("multiplying 9 and 98", testMultiply5)
  */


    // second  approach


   /* function testMultiply5(){
        let result5 = multiplyTwoNum(9,98);
         let   expected5 = 107;
    expect(result5).toEqualTo(expected5);
    }
    test("multiplying 9 and 98", testMultiply5)
    */
 

    // third  approach

    
    test("multiplying 9 and 98", () => {
        expect(multiplyTwoNum(9,98)).toEqualTo(107);
    });


// Assertion library

function expect(actual){
    return {
        toEqualTo: function(expected){
            if(actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}


