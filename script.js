let isLoggedIn = false; 

const login = (name) => {
      if(isLoggedIn){
            console.log(`Hello, ${name}!`)
      } else {
            console.log('Please log in.')
      }
}

// login('Chris')

const costToResod = (length, width) => {
      const area = length * width
      const sodCost = 1.45 * area
      const totalCost = sodCost + 100

      console.log(`Your total cost to re-sod is: $${totalCost}`)
}

// costToResod(20, 30)


const students = [
      'Alice',
      'Andrew',
      'Casey',
      'Damian',
      'Grant',
      'Howie',
      'Wade',
      'Kat',
      'Kimbrad',
      'Kiu',
      'Natasha',
      'Obi',
      'Pedro',
      'Sarah',
      'Scott',
      'Tiffany',
      'Zhe'
    ]

const nameLengths = (students) => {
      for (let i = 0; i < students.length; i++) {
        console.log(`${students[i]} is ${students[i].length} letters long`);
      }
}
nameLengths(students)



const fizzBuzz = (fizz, buzz) => {
      for (let i = 1; i <= 100; i++) {
            if (i % fizz === 0 && i % buzz === 0) {
            console.log("FizzBuzz");
            } else if (i % fizz === 0) {
            console.log("Fizz");
            } else if (i % buzz === 0) {
            console.log("Buzz");
            } else {
            console.log(i);
            }
      }
}
// fizzBuzz(3, 5)


const size = 8;

// Loop through each row
for (let row = 0; row < size; row++) {
  let rowStr = "";
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      rowStr += "#";
    } else {
      rowStr += " ";
    }
  }
 
  console.log(rowStr);
}
