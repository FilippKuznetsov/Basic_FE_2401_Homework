/* Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа */


const a=prompt('Enter the number: ');
console.log(`10 % from ${a} is ${a*0.1}` );

/* Написать программу, которая получает два числа и выводит наименьшее */

const num1=prompt('Enter number 1: ');
const num2=prompt('Enter number 2: ');

const leastNum=function (a,b) {

    (a>=b)? console.log(`The least number is ${b}`) : console.log(`The least number is ${a}`);

    /* if (a>=b) {
       console.log(`The least number is ${b}`);
    }else{
       console.log(`The least number is ${a}`);
    } */
}
leastNum(num1,num2);

/* Написать программу, которая считывает через prompt число 
и выводит одно из следующих сообщений:
 ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’ */


    const num=prompt('Enter your number: ');

 const x=function (a) {
    if (a>100) {
        console.log(`${a} > 100`);
    }else if (a<100) {
        console.log(`${a} < 100`);
    }else{
        console.log(`${a} =100 `);
    }
 }
    x(num);


    /* Написать программу, которая запрашивает у пользователя его имя и возраст (в годах)
     и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний
      или ‘Hi, <name>’, если пользователь несовершеннолетний. */


      const namePers=prompt('Enter your name:');
      const yearPers=prompt('Enter your birdth year:');

      const controllAge=function (a,b) {
        (b>=18)? console.log(`Hello ${a}`) : console.log(`Hi ${a}`);
      }
      controllAge(namePers,yearPers);