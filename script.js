// 1. შექმენით ფუნქია, რომელიც არგუმენტად მიიღებს რიცხვების  მასივს და დააბრუნებს ჯამს;
function calculateSum(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    
    return sum;
  }
    const numbers = [10, 20, 30, 40, 50];
    const result = calculateSum(numbers);
    console.log(result);

   // 3.შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს რიცხვს და დააბრუნებს ამ რიცხვის კვადრატს

   function calculateSquare(number) {
    return number * number;
  }
    
    const number = 5;
    const resultSquare = calculateSquare(number);
    console.log(resultSquare);


   // 4.შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს ობიექტს და დააბრუნებს ობიექტს, სადაც დამატებული იქნება ახალი თვისებები მაგ:{...person, status:'New', point: 40}




    const person = { name: 'John', age: 25 };
    const result2 = addPropertiesToObject(person);

    function addPropertiesToObject(obj) {
        const newObj = {
          ...obj,
          status: 'New',
          point: 40
        };
        
        return newObj;
      }
      console.log(result2);


     //5. შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს ორ რიცხვს და შეადარებს ამ ორ რიცხვს, თუ a > b-ზე დააბრუნოს 1, თუ  a < b  დააბრუნოს -1, სხვა შემთხვევაში 0;

      function compareNumbers(a, b) {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0;
        }
      }

        const result1 = compareNumbers(5, 10);
        console.log(result1);

        const result4 = compareNumbers(7, 3);
        console.log(result4);  

        const result3 = compareNumbers(4, 4);
        console.log(result3); 

//6.შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს ტექსტს, თუ ტექსტის სიგრძე ნაკლებია 6 ზე ფუნქციამ  არაფერი დააბრუნოს  (დაწერთ if პირობას და შიგნით უბრალოდ return)
        


function checkTextLength(text) {
          if (text.length < 6) {
            return;
          }
        
        }


//8.დაწერეთ ფუნქცია რომელიც არგუმენტად მიიღებს მასივს და დააბრუნებს სტრინგს (გამოიყენეთ toString() მეთოდი)
        const myArray = [1, 2, 3, 4, 5];
        const result7 = arrayToString(myArray);


        function arrayToString(arr) {
          return arr.toString();
        }

        console.log(result7);

