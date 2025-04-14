//map, filtyer and reduce

//map -> map() creates a new array by applying a function to each element
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
const thiro = numbers.map((numbers,i, arr) =>{
return numbers*3+i; //[3, 7, 11, 15]
}
);
console.log(thiro); //[3, 6, 9, 12] numbers= represent array, i=index, arr = positioning 

console.log(doubled); // [2, 4, 6, 8]


//filter filter() creates a new array with only elements that pass a true/false condition.

const numbers1 = [1, 2, 3, 4, 5];
const even = numbers1.filter(num => num % 2 === 0);
const moreThanTwo = numbers1.filter((numbers1)=> {
    return numbers1 > 2;
})
console.log(moreThanTwo); //[3, 4, 5]
console.log(even); // [2, 4]

//reduce reduce() executes a reducer function on each element and returns a single value.
const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce((acc, curr) => acc + curr, 0);
const sums = numbers2.reduce((acc, curr,i, arr) => {
    return acc + curr;
})

console.log(sums);
console.log(sum); // 10



//PolyFill for map()
// 1. First define the custom map method
Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i =0; i < this.length; i++){
        temp.push(cb(this[i], i, this));
    }
    return temp;

}

// 2. Then use it
const numbers3 = [1, 2, 3, 4];


const thiros = numbers3.myMap((num, i, arr) => {
    return num * 3 ;
});

console.log(thiros); // [3, 6, 9, 12]


//polyfill for filter 

Array.prototype.myFilter= function (cb){
    let temp1= [];
    for(let i =0; i < this.length; i++){
        if(cb(this[i], i, this)) temp1.push(this[i]);
    }
    return temp1;
}

const numbers4 = [1, 2, 3, 4, 5];
const even1 = numbers4.myFilter(num => num % 2 === 0);
const moreThanTwo1 = numbers4.myFilter((numbers4)=> {
    return numbers4 > 2;
})
console.log(moreThanTwo1); //[3, 4, 5]
console.log(even1); // [2, 4]


//POLYFILL FOR Reduce 
//arr.reduce((acc,curr,i,arr)=>{}, initialValue)
Array.prototype.myReduce = function (cb, initialValue){
    var accumulator = initialValue;
    for (let i =0; i<this.length; i++){
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;

};

const nums = [1,2,3,4];
const sumOfAll = nums.myReduce((acc,curr,i,arr)=>{
    return acc +curr;
}, 0);

console.log(sumOfAll);// 10



//question number 1 [o/p based questions ]
//Return only name of the students in capital 

const students = [
    { name: 'nithin', rollNumber: 1, marks: 85 },
    { name: 'akash', rollNumber: 2, marks: 78 },
    { name: 'rahul', rollNumber: 3, marks: 92 },
    { name: 'sneha', rollNumber: 4, marks: 67 },
    { name: 'megha', rollNumber: 5, marks: 74 }
  ];
  
//approach 1 
  let names = [];
  for (let i =0; i < students.length; i++){
    names.push(students[i].name.toUpperCase());
  }
  console.log(names);


  //approch 2 🎯 Get only the names of students in capital letters
  const capitalNames = students.map(student => student.name.toUpperCase());
  
  console.log(capitalNames);
  

  // return only details of those who scored more than 80

  const topScorers = students
  .filter(student => student.marks > 80);

console.log(topScorers); //['NITHIN', 'RAHUL']


const students1 = [
    { name: 'nithin', rollNumber: 1, marks: 85 },
    { name: 'akash', rollNumber: 2, marks: 78 },
    { name: 'rahul', rollNumber: 3, marks: 92 },
    { name: 'sneha', rollNumber: 4, marks: 88 },
    { name: 'megha', rollNumber: 5, marks: 91 }
  ];
  

// 🎯 Condition: marks > 80 && rollNumber > 3
const filteredStudents = students1
  .filter(student => student.marks > 80 && student.rollNumber > 3)
  ;

console.log(filteredStudents);//senha and megha 


const result = [];
students1.forEach(student => {
  if (student.marks > 80 && student.rollNumber > 3) {
    result.push(student.name.toUpperCase());
  }
});
console.log(result); // ["SNEHA", "MEGHA"]


const result1 = students1.reduce((acc, student) => {
    if (student.marks > 80 && student.rollNumber > 3) {
      acc.push(student.name.toUpperCase());
    }
    return acc;
  }, []);
  console.log(result); // ["SNEHA", "MEGHA"]

  const result3 = [];
for (let i = 0; i < students1.length; i++) {
  const s = students[i];
  if (s.marks > 80 && s.rollNumber > 3) {
    result.push(s.name.toUpperCase());
  }
}
console.log(result); // ["SNEHA", "MEGHA"]

  // sum of marks of all students 

//   const sumOfMarks = students1.reduce((acc, student)=>{
//     return acc + student.marks;
//   }, 0);
//   console.log(sumOfMarks); //434 or 

  const sumOfMarks = students1.reduce((acc, student) => acc + student.marks, 0);
console.log(sumOfMarks);

const averageMarks = sumOfMarks / students1.length;
console.log("Average Marks:", averageMarks); //86.8


//return total marks for students with marks greaterthan 60 after 20 marks have been added to whpose who scored less than 60
const students2 = [
    { name: 'Alice', rollNumber: 1, marks: 85 },
    { name: 'Bob', rollNumber: 2, marks: 45 },
    { name: 'Charlie', rollNumber: 3, marks: 60 },
    { name: 'David', rollNumber: 4, marks: 35 },
    { name: 'Eva', rollNumber: 5, marks: 75 },
  ];
  
  // Step 1: Add 20 marks to students with marks < 60
  const updatedMarks = students2.map(student => {
    if (student.marks < 60) {
    //   return { ...student, marks: student.marks + 20 };
    student.marks +=20;
    }
    return student;
  });
  
  // Step 2: Filter students with marks > 60
  const filteredStudents1 = updatedMarks.filter(student => student.marks > 60);
  
  // Step 3: Calculate total marks
  const totalMarks = filteredStudents1.reduce((acc, student) => acc + student.marks, 0);
  
  console.log("Total Marks after update:", totalMarks); //Total Marks after update: 225

//   const totalMarks1 = students2
//   .map(student =>
//     student.marks < 60
//       ? { ...student, marks: student.marks + 20 }
//       : student
//   )
//   .filter(student => student.marks > 60)
//   .reduce((acc, student) => acc + student.marks, 0);

// console.log("Total Marks (Chained):", totalMarks1); //300 wronmg bcs old student.marks overriding 
//Even though you're creating a new object with { ...student, marks: student.marks + 20 }, for students who already have marks ≥ 60, you're reusing the same object (student).

//And here's the catch:
//You already mutated the original students2 array in the first part (non-chained approach):


const students2Original = [
    { name: 'Alice', rollNumber: 1, marks: 85 },
    { name: 'Bob', rollNumber: 2, marks: 45 },
    { name: 'Charlie', rollNumber: 3, marks: 60 },
    { name: 'David', rollNumber: 4, marks: 35 },
    { name: 'Eva', rollNumber: 5, marks: 75 },
  ];

const totalMarks1 = students2Original
  .map(student =>
    student.marks < 60
      ? { ...student, marks: student.marks + 20 }
      : student
  )
  .filter(student => student.marks > 60)
  .reduce((acc, student) => acc + student.marks, 0);

console.log("Total Marks (Chained, Fresh):", totalMarks1); //225

  
