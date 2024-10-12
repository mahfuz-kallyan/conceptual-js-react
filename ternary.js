const person={
    name: 'mehedi',
    age: 15,
    gender: 'male',
    isStudent: true
}

// let sentence = "";
// if(person.isStudent){
//     sentence = 'He is a student'
// }
// else{
//     sentence = 'He is not a student'
// }

// let sentence = "";
// person.isStudent? sentence = 'He is a student' : sentence = "Not a student"
let sentence = person.isStudent? "He is a student" : 'He is not a student'
console.log(sentence);
