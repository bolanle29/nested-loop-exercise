// Question 1
// Array of students; Name, score, subject, term

const students=[

  ['Joy', 6,'Physics',1],
  ['Miracle', 5,'Commerce',1],
  ['Bola', 12,'Economics',1],
  ['Morris', 4,'Maths',1],
  ['Ade', 4,'Biology',1],
  ['Jimoh', 5,'Chemistry',1],
  ['IB', 10,'Computer',1],
  ['Nora', 3,'Maths',1],
  ['Nengi', 5,'C.R.K',1],
  ['Oma', 5,'Government',1],
  ['Julliet', 5,'Health Science',1],
  ['Nikki', 6,'Literature',1],
  ['Lizzy', 4,'Further Maths',1],
  ['Gift', 5,'Foods & Nutrition',1],
  ['Mek', 5,'Further Maths',1],
  ['Olu', 4,'English',1],
  ['Tiara', 1,'Health Science',1],
  ['Sunday', 4,'Foods & Nutrition',1],
  ['Constance', 6,'Literature',1],
  ['Jollie', 4,'C.R.k',1]
]
// console.table(students)


//     ['Joy', 7,'Physics',2],
//     ['Bola', 8,'Commerce',2],
//     ['Miracle', 5,'Economics',2],
//     ['Morris', 4,'Maths',2],
//     ['Ade', 4,'Biology',2],
//     ['Jimoh', 5,'Chemistry',2],
//     ['IB', 6,'Computer',2],
//     ['Nora', 6,'Maths',2],
//     ['Nengi', 3,'C.R.K',2],
//     ['Oma', 5,'Government',2],
//     ['Julliet', 1,'Health Science',2],
//     ['Nikki', 6,'Literature',2],
//     ['Lizzy', 6,'Further Maths',2],
//     ['Gift', 3,'Foods & Nutrition',2],
//     ['Mek', 5,'Further Maths',2],
//     ['Olu', 4,'English',2],
//     ['Tiara', 5,'Health Science',2],
//     ['Sunday', 4,'Foods & Nutrition',2],
//     ['Constance', 4,'Literature',2],
//     ['Jollie', 4,'C.R.k',2]
  


//     ['Joy', 5,'Physics',3],
//     ['Bola', 5,'Commerce',3],
//     ['Miracle', 4,'Economics',3],
//     ['Morris', 4,'Maths',3],
//     ['Ade', 5,'Biology',3],
//     ['Jimoh', 4,'Chemistry',3],
//     ['IB', 6,'Computer',3],
//     ['Nora', 5,'Maths',3],
 //     ['Nengi', 5,'C.R.K',3],
//     ['Oma', 4,'Government',3],
//     ['Julliet', 5,'Health Science',3],
//     ['Nikki', 3,'Literature',3],
//     ['Lizzy', 4,'Further Maths',3],
//      ['Gift', 5,'Foods & Nutrition',3],
//     ['Mek', 5,'Further Maths',3],
//     ['Olu', 4,'English',3],
//     ['Tiara', 7,'Health Science',3],
//     ['Sunday', 1,'Foods & Nutrition',3],
//     ['Constance', 5,'Literature',3],
//     ['Jollie', 7,'C.R.k',3]
 



// Question 1
// Calculate the average score for each student (1st, 2nd and 3rd position)
 



// Question 2
// Calculate the percentage of each student score. If any student score is about 75%, recommend the student for a government schorlarhip

students.forEach(scores => {
    let percentage=((scores[1]/20)*100).toFixed()
    scores.splice(4,0,percentage+'%')


});
 console.table(students)





// Question 3
// 


// outer loop
for(score=0; score<students.length; score++){
  // console.log(students[aveScore])
  // inner loop
  for(score2=0; score2<students.length; score2++){
//  console.log(students[aveScore])
  }

if (students [score] [1] >= 10){
  console.log (students [score] + "Congratulations! You qualify for the schorlarship")
}
else if (students [score] [1] <=5){
  console.log (students [score] + "We are sorry to inform you that you did not qualify for the schorlarship.You will have to repeat the class and try again next year.Gooduck.")

}
else{
  console.log (students [score] + "Congratulation! You passed, unfortunately you do not qualify for the schorlarship. Try again in the next batch. Goodluck.")
}

}
