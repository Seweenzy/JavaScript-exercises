

function addTwoNumbers(num1, num2, num5, num6) {
    let num3= num1 + num2;
    let num4= num5 + num6;
    //console.log(num3)
    //console.log(num4)
    
}

addTwoNumbers(40,70)
addTwoNumbers(100,2)



function subtractTwoNumbers(number1, number2, ){
    return number1 - number2;

}

let result= subtractTwoNumbers(10,4);
let secondResult= subtractTwoNumbers(200,70);
let thirdResult = subtractTwoNumbers(200, 10);
//console.log(result)
//console.log(secondResult)
//console.log(thirdResult)


function greet(){
    return 'Hello, how are you today?';
}
//console.log(greet());


function add(a,b){
    return a + b;

}

let result1=add(3,3);
let result2 = add(40,10);
//console.log(result1)
//console.log(result2)


function product(c,d){
    return c * d;

}

let productResult1= product(5, 5);
let productResult2= product(10, 10);

//console.log(productResult1);
//console.log(productResult2);








let number =15;
for(i=1; i<=number; i++){

    if (i % 3== 0) {
        
        //console.log(i)
    }
}

function greet(name = 'Guest') {

    return 'Hello ' + name;
    
}
//console.log(greet())
//console.log(greet('Oluwaseun'))


function multiply(firstnumber,secondnumber){
    total= firstnumber * secondnumber;
    //console.log(total)

}

multiply(4,7)
multiply(20,5)
multiply(10,2)


function multiplication( multiply1, multiply2){
    return multiply1 * multiply2;
    
}

let productTotal= multiplication(50,20);
let productTotal2= multiplication(100,100);
//console.log(productTotal)
//console.log(productTotal2)


//divideTwoNumbers(20,5);
//divideTwoNumbers(100, 20);


function divideNumbers(div1, div2){
    return div1 / div2
}

let totalDivision= divideNumbers(200000, 4)
let totalDivision2= divideNumbers(10000, 200)
let totalDivision3= divideNumbers(300,3)

//console.log(totalDivision)
//console.log(totalDivision2)
//console.log(totalDivision3)
//console.log(typeof divideNumbers)


let a =10
let b =a

b=20;
//console.log('the value', a , 'the value', b)


personalObject={
    name: 'Oluwaseun',
    sex: 'male',
    favClub: 'manchester United',
    maritalStatus: 'single',
    favPerson: 'Ifeoluwa',

}
//console.log(personalObject)
personalObject.name='Oluwaseyi',
//console.log(personalObject);



function sumTotal(a,b) {
    let total= a+b;
    //console.log(total);
    
}
sumTotal (20,10);


function divideTwoNumbers(divide1, divide2){
    let divideTotal= divide1 / divide2;
    let multiplyTotal= divide1 * divide2;
    let additionTotal= divide1 + divide2;
    console.log(divideTotal)
    console.log(multiplyTotal)
    console.log(additionTotal)

}

divideTwoNumbers(10,10)
